# Contributing

Contributions are welcome and wanted! 🎉

This list and site have been created to provide helpful resources and quick examples for developing with React. 😃

If you have published a high quality React Component or Library is relatively quick to create a web based demo for it with this site. 🚀👍

## Contribution Guidelines

Please follow the Contributor Code of Conduct from the repository [sindresorhus/awesome](https://github.com/sindresorhus/awesome/blob/master/code-of-conduct.md). By participating in this project you agree to abide by its terms. Instances of abusive, harassing, or otherwise unacceptable behavior can be reported with an issue in this repository, or if needed contact the author of this repository [directly](https://www.fastsitephp.com/en/security-issue).

## Adding additional React Components and Libraries - Overview

- All submitted items require a working example.
- You have full artist control for you example code! It simply needs to work and be useful.

1) Download this repository
2) Copy template files [examples/template.htm](examples/template.htm), `template.css`, and `template.jsx` to the correct sub-folder under `examples`
3) Update [links.json](links.json) to include the new file
3) Start the local server by running `npm start`
4) Edit the new example file
5) Add the same text from `links.json` to `README.md`
6) Submit Pull Request

## Adding additional React Components and Libraries - Full Details

This list is for Web Based React Development so please make sure you submit pull requests with the following items:

- Components and Libraries must be linked from a CDN.
  - https://www.jsdelivr.com/ and https://unpkg.com/ are recommended.
- Each submitted item must include an example webpage.
  - A template [examples/template.htm](examples/template.htm) is provided so you can get started quickly.
  - Copy the template (and if needed `.css`, `.jsx` templates) to the folder with the correct category, name it based on your project, and make changes there.
  - In order for your example to show on the main page you need to add it to the [links.json](links.json) file.
- Add new items to the end of the list. Current sort order is first come, first serve, however this may change to alphabetical in the future.
- Text in both `README.md` and `links.json` must match.
- One sentence of reasonable length per Component or Library and complete the sentence with a period/hard-stop.
- Add new categories at the end of the list.
  - Category graphics in `links.json` are unicode emojis
  - You can find emojis here: https://emojipedia.org/
  - In the `README.md` file add new categories to the Content/Index first H2 section.
- The category `Web Based Development Options` is a specialy category that can use more than one sentance per item.
  - However only production-ready options that are well tested and well documented can be added.
  - Please open an issue first if you would like to submit to this category.
- Please open an issue before submitting to `Awesome Lists` as well.
- All code will be published with the `CC0` "Public Domain" license so you must be the author of the code or have permission from the author to publish it.
  - Generally this won't be an issue as most examples are small and intended as demos.
  - If you are copying code you spent a lot of time on you might want to include a disclaimer such as the following.
  ```
  Original License: MIT
  Re-published here with CC0 "Public Domain" license.
  If you re-use this code attribution is appreciated.
  ```
- Do not submit image files (other than small SVG's) to this repository. Just like code SVG's published here will be published as CC0 "Public Domain". If you need to host images you can submit a pull request to the following repository and host them there:
  - https://github.com/dataformsjs/static-files
  - Folder / Directory: https://github.com/dataformsjs/static-files/tree/master/img/awesome-web-react
- Card Images
  - Card images are not required when submitting an initial example. The card layout works without images and an image can be submitted or generated later.
  - If a project has a logo image then it should be used as the Card Layout Image and linked from GitHub.
  - Small SVG and PNG images can be saved in this repository at `img/logos`. If the image is large or a print screen (screenshot) is used then please submit it to: https://github.com/dataformsjs/static-files/tree/master/img/awesome-web-react/card-images
- You have full artist control for you example code! It simply needs to work and be useful.

## How can I make my React Component work directly in a browser?

- Good Question, many if not most React Components are designed for use from node with local build tools.
- In your `package.json` file define a build script and publish the build files to `npm`. They can then be linked from a CDN.
- Here are several examples:
  - https://github.com/react-hook-form/react-hook-form/blob/master/package.json
    - Several different build options provided from `package.json`
  - https://github.com/ReactTraining/react-router/blob/master/scripts/build.js
    - Simple build script linked from `package.json`
  - https://github.com/dataformsjs/dataformsjs/blob/master/scripts/build.js
    - Larger build script linked from `package.json` but uses zero config
    - This script makes some changes to the build code such as adding a namespace, adding Preact support, and removing the need for browser `exports` and `require` functions.

## React Version

```html
<!--
    The documentation from React shows how to use with the major version like this:
-->
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin="anonymous"></script>

<!--
    In general the specific (and latest version) is being used directly in the examples.
    The reason is that when the major version is used from [unpkg] a redirect request will be made.
    When using the specific version then CDN caching is used with no redirects.
-->
<script src="https://unpkg.com/react@17.0.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>

<!--
    Related React core libraries that are used in one or more demos.
    When updating the React version these need to be updated as well:
-->
<script src="https://unpkg.com/react-is@16.13.0/umd/react-is.production.min.js"></script>
```

## Making Site Design Changes (UI - User Interface, UX - User Experince, etc)

- Changes are welcome but may not be accepted.
- Please open an issue first with your ideas before spending time on site updates.

## Editing existing examples

- Additionally please open an issue before updating existing examples that someone else has created.
- An exception to this would be if you are the author or maintainer of a library for the demo that you are editing.

## Translations

- Simply copy this repository and publish it yourself. Since a public domain license is used all code can simply be copied. If translated the new repositories will be linked back.