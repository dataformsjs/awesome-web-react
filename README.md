<p align="center">
	<img width="312" height="350" src="img/awesome-web-react.svg" alt="Awesome Web React">
</p>

<hr>

<p align="center">
    🚀 View Examples at: <a href="https://awesome-web-react.js.org/">https://awesome-web-react.js.org/</a>
</p>
<p align="center">
    <a href="CONTRIBUTING.md">🤝 Contributing</a>
</p>
<p align="center">
    <a href="https://awesome.re"><img alt="Awesome" src="https://awesome.re/badge.svg"></a>
</p>

<p align="center">
<a href="https://www.producthunt.com/posts/awesome-web-react?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-web-react" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=239557&theme=light" alt="Awesome Web React - 🚀 Develop online with React! 🌐  No Build Tools Needed! 🚧 | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</p>

<hr>

## Contents

- [About](#about)
- [Web Based Development Options](#web-based-development-options)
- [Awesome Lists](#awesome-lists)
- [UI](#ui)
- [Routing](#routing)
- [Forms](#forms)
- [Select Controls](#select-controls)
- [Rich Text Editors](#rich-text-editors)
- [Drag and Drop](#drag-and-drop)
- [Charts and Maps](#charts-and-maps)
- [Component and Hook Libraries](#component-and-hook-libraries)
- [Javascript and jQuery Libraries](#javascript-and-jquery-libraries)
- [State Management](#state-management)
- [License](#license)

## About

- This page provides a list with examples of libraries and components that you can use to develop web pages and apps with React without any build tools.
- Development build tools and projects such as `webpack`, `babel`, and `create-react-app` are great but they do not make sense for all sites, web pages, and development workflows.
- With browser based options for JSX you can **easily include React Components on any page** without having to build the entire site using React or JSX.
- Reasons why you might want to do this can include:
  - 🚀 **Fast Development** 🚀 Because there is no build process you can create and modify sites using any editor on any system.
  - 🤝 **Easily Share** 🤝 Provide React code snippets to designers or web developers who do not know or use JavaScript.
  - 📦 **Project Size** 📦 This site includes many example mini apps and each one is typically less than 10 kB in size while a standard React app using `create-react-app`  is between 150 and 250 MB and includes over 30,000 files.
  - 📄 **Add to any Page** 📄 Add React to legacy and existing sites or web pages. Often React is used on new projects only but with online development options you can include React and Libraries directly from a CDN or JavaScript files.
  - 🏫 **Learn React** 🏫 Web Development with only a Browser and a Text Editor is any easy way to get started with React or try new ideas and features.
  - 🚆 **Rapid Prototyping** 🚆 Instantly develop ideas and into quick apps and then migrate to a build process later if you want to.
- You can try all examples in your browser at https://awesome-web-react.js.org/.
- All examples can be ran locally by downloading this repository and running `npm start`. Only node is required and no dependencies are needed.

## Web Based Development Options

- [Babel Standalone](https://github.com/babel/babel/tree/master/packages/babel-standalone)
  - Standalone build of Babel for use in non-Node.js environments.
  - Babel Standalone is very large so using it for productions apps is generally not recommended in most situations.
  - However it is very useful for development because you can debug and step through code directly in browser with React Development Tools.
  - JSX Code used in a Browser with Babel Standalone can also be used for local development using `create-react-app` and other tools.
- [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md)
  - An ultra-fast and tiny (5.7 kB) browser based compiler for JSX / React.
  - Created for production use with all browsers. This list was created because of the JSX Loader and most examples use it.
  - The JSX Loader is designed for compatibility with Babel Standalone.
  - It compiles JSX to JS for modern browsers and for legacy browsers it will download and use Polyfills and Babel Standalone.
- [HTM (Hyperscript Tagged Markup)](https://github.com/developit/htm)
  - JSX alternative using standard tagged templates, with compiler support.
  - HTM is extremely small (~0.5 kB).
  - It provides many options and works with all modern browsers; however this means it will not work with legacy browsers.
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
  - Most React apps are created using JSX, however it is not required and plain JavaScript can be used.
  - JSX is generally used because it allows for much more readable code and easier development with React.

## Awesome Lists

_Find a large selection of React Components and Tools from these Awesome React Lists:_

- [Awesome React](https://github.com/enaqx/awesome-react) A collection of awesome things regarding the React ecosystem.
- [Awesome React Components](https://github.com/brillout/awesome-react-components) Curated List of React Components & Libraries.

## UI

- [Ant Design](https://github.com/ant-design/ant-design) - A UI Design Language and React UI library.
- [Styled Components](https://github.com/styled-components/styled-components) - Visual primitives for the component age.
- [Evergreen](https://github.com/segmentio/evergreen) - Evergreen React UI Framework by Segment.
- [React-Toastify](https://github.com/fkhadra/react-toastify) - React-Toastify allows you to add notifications to your app with ease.

## Routing

- [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React.

## Forms

- [React Hook Form](https://github.com/react-hook-form/react-hook-form) - Performant, flexible and extensible forms with easy to use validation.

## Select Controls

- [React Select](https://github.com/jedwatson/react-select) - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.

## Rich Text Editors

- [Draft.js](https://github.com/facebook/draft-js) - Rich Text Editor Framework for React.

## Drag and Drop

- [React DnD](https://github.com/react-dnd/react-dnd) - Drag and Drop for React

## Image and Media Controls

- [DataFormsJS Image Gallery](https://www.dataformsjs.com/examples/image-gallery-react.htm) - Component <ImageGallery> that shows Large Image in Overlay with Mobile and Desktop support.

## Charts and Maps

- [React Simple Maps](https://github.com/zcreativelabs/react-simple-maps) - Create beautiful SVG maps in react with d3-geo and topojson using a declarative api.
- [React Chart.js 2](https://github.com/jerairrest/react-chartjs-2) - React wrapper for Chart.js.

## Component and Hook Libraries

- [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - Display data from JSON and GraphQL Services, Lazy Loading, Filter, Sorting, I18N, L10N, and more.
- [React Query](https://github.com/tannerlinsley/react-query) - Hooks for fetching, caching and updating asynchronous data in React
- [SWR](https://github.com/vercel/swr) - React Hooks library for data fetching.

## Javascript and jQuery Libraries

_Links here include non-React sites. The example pages show how to use widely-used JavaScript libraries and Controls listed here with React._

- [Documentation from React](https://reactjs.org/docs/integrating-with-other-libraries.html) - Integrating with Other Libraries
- [Chosen](https://github.com/harvesthq/chosen) - Chosen is a widely used jQuery plugin that makes long, unwieldy select boxes much more user-friendly.
- [Remarkable](https://github.com/jonschlinkert/remarkable) - Markdown parser done right. Fast and easy to extend.

## State Management

- [React Redux](https://github.com/reduxjs/react-redux) - A Predictable State Container for JS Apps.
- [React Flux](https://github.com/facebook/flux) - Application Architecture for Building User Interfaces.
- [React Hooks](https://reactjs.org/docs/hooks-reference.html) - React Hooks let you use state and other React features without writing classes.
- [Recoil](https://github.com/facebookexperimental/Recoil) - A Facebook experimental state management library for complex React UIs.

# License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Images located under [img/logos](img/logos) may be copyright or trademark of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
