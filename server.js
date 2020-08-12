/**
 * Simple Node Web Server for sending static files using using only
 * Node.js built-in features without any outside dependencies.
 *
 * To run:
 *    npm start
 *
 * Important - This script is very minimal by design and includes no error handling.
 * It works well but has few features so is not intended for production apps.
 *
 * Since this file is small you can step through the code using a debugger
 * which makes it is useful for learning purposes.
 * 
 * @link https://github.com/dataformsjs
 * @license CC0 "Public Domain" license
 */

/* Validates online with both [jshint] and [eslint] */
/* jshint esversion:8, node:true */
/* eslint-env node, es6 */

'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

/**
 * Allowed mime types
 */
const mimeTypes = {
    htm: 'text/html; charset=UTF-8',
    html: 'text/html; charset=UTF-8',
    css: 'text/css',
    txt: 'text/plain',
    js: 'application/javascript',
    jsx: 'application/jsx',
    json: 'application/json',
    graphql: 'application/graphql',
    png: 'image/png',
    jpg: 'image/jpeg',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
};

/**
 * Simple Web Server for sending Static Files
 */
const server = http.createServer((req, res) => {
    // Send a 404 Page as an HTML Response
    function send404() {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.end('<h1>File not found</h1>');
    }

    // Send a Response from a File. If the file doesn't exist or the file type is
    // not defined in mimeTypes then a 404 HTML Response will be sent to the client.
    function sendFile(filePath) {
        const data = filePath.split('.');
        const fileType = data[data.length-1];
        if (mimeTypes[fileType] === undefined) {
            send404(); // File type not supported
            return;
        }
        fs.readFile(filePath, (err, content) => {
            if (err && err.code === 'ENOENT') {
                send404(); // File not found
            } else if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('<h1>An error has occurred, check console</h1>');
            } else {
                res.setHeader('Content-Type', mimeTypes[fileType]);
                res.end(content);
            }
        });
    }

    // Only allow GET Requests
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.end('<h1>Method not allowed</h1>');
        return;
    }

    // Send root [index.html] file
    const reqPath = url.parse(req.url).pathname;
    if (reqPath === '/') {
        sendFile(path.join(__dirname, 'index.html'));
        return;
    }

    // Does the request path match a under the scripts directory? If not send a 404.
    // A security check against Path Traversal Attacks in first performed in case
    // this script ends up being used on a production server.
    if (reqPath.includes('../') || reqPath.includes('..\\')) {
        send404();
        return;
    }
    const filePath = path.join(__dirname, reqPath);
    sendFile(filePath);
});

/**
 * Start the Server
 */
const port = 3000;
server.listen(port, null, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
