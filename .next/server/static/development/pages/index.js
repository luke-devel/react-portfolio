module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/SpotifyArtistInfo.png":
/*!*********************************************!*\
  !*** ./assets/images/SpotifyArtistInfo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/SpotifyArtistInfo-1e8b8d0d016ada34ef3093e3ba976399.png";

/***/ }),

/***/ "./assets/images/SpotifyGenreMap.png":
/*!*******************************************!*\
  !*** ./assets/images/SpotifyGenreMap.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/SpotifyGenreMap-8546126bd252c2a8e4aba44d5602989a.png";

/***/ }),

/***/ "./assets/images/headshot.png":
/*!************************************!*\
  !*** ./assets/images/headshot.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/headshot-17663374cf3de38db38687b844bcdeed.png";

/***/ }),

/***/ "./components/FlipText.js":
/*!********************************!*\
  !*** ./components/FlipText.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlipText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Flip */ "react-reveal/Flip");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\FlipText.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function FlipText({
  text
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    class: "col-12",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    left: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: "60px",
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, text.word))))));
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Footer() {
  return __jsx("div", {
    class: "container-fluid",
    style: {
      background: "gray"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    class: "col-lg-12 spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), __jsx("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    class: "col-lg-12 footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    class: "text-center copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Copyright \xA9 2020 Luke Olson"))));
}

/***/ }),

/***/ "./components/Headshot.js":
/*!********************************!*\
  !*** ./components/Headshot.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Headshot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_headshot_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/headshot.png */ "./assets/images/headshot.png");
/* harmony import */ var _assets_images_headshot_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_headshot_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\Headshot.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Headshot() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    class: "col-12",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: _assets_images_headshot_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Headshot",
    style: {
      height: "250px",
      border: "5px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SingleProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleProject */ "./components/SingleProject.js");
/* harmony import */ var _assets_images_SpotifyGenreMap_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/SpotifyGenreMap.png */ "./assets/images/SpotifyGenreMap.png");
/* harmony import */ var _assets_images_SpotifyGenreMap_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_SpotifyGenreMap_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_SpotifyArtistInfo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/SpotifyArtistInfo.png */ "./assets/images/SpotifyArtistInfo.png");
/* harmony import */ var _assets_images_SpotifyArtistInfo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_SpotifyArtistInfo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Projects() {
  return __jsx("div", {
    style: {
      backgroundColor: "#343A40"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "projectsDiv",
    style: {
      textAlign: "center",
      background: "gray",
      marginTop: "-16px",
      padding: "20px" // clipPath:
      //   "polygon(50% 0%, 100% 135px, 100% 100%, 50% 100%, 0 100%, 0 135px)"

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    style: {
      textDecoration: "underline",
      fontWeight: "bold",
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_SingleProject__WEBPACK_IMPORTED_MODULE_1__["default"], {
    SingleProject: {
      name: "Spotify Genre Map",
      picture: "/_next/static/images/SpotifyGenreMap-8546126bd252c2a8e4aba44d5602989a.png",
      description: "App to display Spotify monthly listener for all 3800 Spotify genres. This app uses an automated web-scraper using Puppeteer and node.js. The scraper pulled data from open.spotify.com to pupulate an MySQL database with Spotify Artists Genre info and listener info of the top 50 listening cities of the given artist's genre. This data is shown using Mapbox and GEOJSON data to populate a map with clusters varying in size dependant on the monthly listeners per genre.",
      liveSite: "https://project-2-spotify.herokuapp.com/",
      githubRepo: "https://github.com/luke-ols0/project-2-spotify",
      height: "250px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_SingleProject__WEBPACK_IMPORTED_MODULE_1__["default"], {
    SingleProject: {
      name: "Spotify Artist Info",
      picture: "/_next/static/images/SpotifyArtistInfo-1e8b8d0d016ada34ef3093e3ba976399.png",
      description: "App uses next.js and React to allow a user to search a Spotify artist by URL, URI, or ID. Puppeteer is used on serverside next.js to scrape the Artist information and display it for the user using React as the frontend framework.",
      liveSite: "https://spotify-artist-info.herokuapp.com/",
      githubRepo: "https://github.com/luke-ols0/nextjs-spotify-id",
      height: "250px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./components/QuickLinks.js":
/*!**********************************!*\
  !*** ./components/QuickLinks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\QuickLinks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function QuickLinks() {
  let socialLinks = {
    justifyContent: "space-between",
    width: "50%",
    margin: "auto"
  }; // let iTag = { color: "#343A40", fontSize: "5em", padding: "10px" };

  let iTag = {
    color: "black",
    fontSize: "5em",
    padding: "10px"
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "social-links",
    style: socialLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/luke-ols0",
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("i", {
    class: "fab fa-github-square",
    style: iTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/luke-olson-98005a191/",
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("i", {
    class: "fab fa-linkedin",
    style: iTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/SingleProject.js":
/*!*************************************!*\
  !*** ./components/SingleProject.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleProject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\SingleProject.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function SingleProject({
  SingleProject
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "containter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, SingleProject.name), __jsx("img", {
    src: SingleProject.picture,
    alt: SingleProject.name,
    style: {
      height: SingleProject.height,
      border: "5px solid black",
      marginTop: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })))), __jsx("div", {
    className: "row",
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    href: SingleProject.liveSite,
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("i", {
    class: "fas fa-satellite-dish",
    style: {
      color: "#000000",
      fontSize: "2em",
      padding: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("h1", {
    style: {
      fontSize: "15px",
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Live Site")), __jsx("div", {
    className: "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/luke-ols0",
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("i", {
    class: "fab fa-github",
    style: {
      color: "#000000",
      fontSize: "2em",
      padding: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("h1", {
    style: {
      fontSize: "15px",
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "GitHub Repo"))), __jsx("p", {
    style: {
      marginTop: "10px",
      fontSize: "25px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, SingleProject.description));
}

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\components\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Navbar() {
  let fontStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000000",
    marginTop: "10px",
    padding: "10px",
    fontSize: "30px",
    marginBottom: "10px",
    fontWeight: "bold"
  };
  return __jsx("nav", {
    class: "navbar navbar-expand-lg navbar-light bg-dark",
    style: {
      margin: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("ul", {
    class: "nav col-xs-4 navbar-nav mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    class: "nav-link",
    href: "/",
    style: fontStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Portfolio"), __jsx("a", {
    class: "nav-link",
    href: "contact",
    style: fontStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Contact")));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_FlipText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FlipText */ "./components/FlipText.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Headshot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Headshot */ "./components/Headshot.js");
/* harmony import */ var _components_QuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/QuickLinks */ "./components/QuickLinks.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
var _jsxFileName = "C:\\Users\\luke\\Development\\next-js\\react-portfolio\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    style: {
      background: "#343A40"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("header", {
    style: {
      padding: "1em",
      background: "gray",
      marginBottom: "1em",
      paddingBottom: "3.5em",
      textAlign: "center",
      clipPath: "polygon(50% 0%, 100% 0px, 100% 65%, 50% 100%, 0 65%, 0 0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_Headshot__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_FlipText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: {
      word: "Luke Olson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("p", {
    style: {
      fontSize: "25px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "HTML/CSS | Bootstrap | JavaScript, C++, Java | NodeJS | React | Next.js | MySQL | Sequelize"), __jsx(_components_QuickLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luke\Development\next-js\react-portfolio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Flip":
/*!************************************!*\
  !*** external "react-reveal/Flip" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Flip");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map