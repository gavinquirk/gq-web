/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/js/projects.js\");\n\r\n\r\n// --- Navigation ---\r\nconst wrapper = document.getElementById('hamburger-wrapper');\r\nconst hamburgerButton = document.getElementsByClassName('hamburger-button');\r\nconst navOverlay = document.getElementsByClassName('nav-overlay');\r\n\r\n// When menu button is clicked\r\nwrapper.onclick = () => {\r\n  // Toggle closed class on hamburger\r\n  hamburgerButton[0].classList.toggle('hamburger-closed');\r\n  // Toggle open overlay\r\n  navOverlay[0].classList.toggle('nav-open');\r\n};\r\n\r\n// For each project, insert into grid\r\nconst portfolioGrid = document.getElementById('portfolio-grid');\r\n\r\n_projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\r\n  portfolioGrid.innerHTML += `\r\n      <div class=\"flip-card\" id=${project.name}>\r\n        <div class=\"flip-card-inner\">\r\n          <div class=\"flip-card-front\">\r\n            <img src=${project.image} alt=${project.name}>\r\n          </div>\r\n          <div class=\"flip-card-back\">\r\n            <h4>${project.name}</h4>\r\n            <p>${project.description}</p>\r\n            <div class=\"flip-card-links\">\r\n              <a href=${project.deployment}><i class=\"far fa-window-restore\"></i></a>\r\n              <a href=${project.github}><i class=\"fab fa-github\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      `;\r\n});\r\n\n\n//# sourceURL=webpack://gq-web/./src/js/main.js?");

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/*! namespace exports */
/*! export projects [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => /* binding */ projects\n/* harmony export */ });\nconst projects = [\r\n  {\r\n    id: 1,\r\n    name: 'Proshop',\r\n    description:\r\n      'Custom built online store, with PayPal payment and admin management',\r\n    image: './src/img/proshop-logo-1.png',\r\n    github: 'https://github.com/gavinquirk/proshop',\r\n    deployment: 'https://gq-proshop.herokuapp.com/',\r\n  },\r\n  {\r\n    id: 2,\r\n    name: 'Idyllwild',\r\n    description:\r\n      'A website for the band Idyllwild, created using React and Firebase',\r\n    image: './src/img/idyllwild-logo-1.png',\r\n    github: 'https://github.com/gavinquirk/idyllwild',\r\n    deployment: 'https://idyllwild.firebaseapp.com/',\r\n  },\r\n  {\r\n    id: 3,\r\n    name: 'Devcamper',\r\n    description:\r\n      'API providing accounts, uploads and information related to programming bootcamps',\r\n    image: './src/img/devcamper-logo-1.png',\r\n    github: 'https://github.com/gavinquirk/devcamper_api',\r\n    deployment: 'https://gq-devcamper.herokuapp.com/',\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack://gq-web/./src/js/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;