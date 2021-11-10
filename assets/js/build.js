/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/fs-web.js":
/*!*****************************!*\
  !*** ./assets/js/fs-web.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.readFile = exports.readDir = void 0;\r\nasync function readDir(path, init) {\r\n    let d = new DOMParser().parseFromString(await (await fetch(path, init)).text(), \"text/html\"), f = new Set(), n;\r\n    if (!d.querySelector(\"body.directory\"))\r\n        throw Error(`no such file or directory, scandir '${path}'`);\r\n    Array.from(d.querySelectorAll(\"#files > li > a\")).slice(1).forEach(a => {\r\n        f.add({\r\n            name: (n = a.querySelector(\".name\")?.textContent ?? \"\"),\r\n            size: parseInt(a.querySelector(\".size\")?.textContent ?? \"\") || null,\r\n            data: a.querySelector(\".date\")?.textContent ?? \"\",\r\n            path: `${path}/${n}`\r\n        });\r\n    });\r\n    return f;\r\n}\r\nexports.readDir = readDir;\r\nasync function readFile(path, init) {\r\n    return await (await fetch(path, init)).text();\r\n}\r\nexports.readFile = readFile;\r\n\n\n//# sourceURL=webpack://my-workspace-web/./assets/js/fs-web.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Interface = void 0;\r\nconst fs_web_1 = __webpack_require__(/*! ./fs-web */ \"./assets/js/fs-web.js\");\r\nvar Interface;\r\n(function (Interface) {\r\n    function get(selectors) {\r\n        return document.querySelector(selectors);\r\n    }\r\n    Interface.get = get;\r\n    function gets(selectors) {\r\n        return document.querySelectorAll(selectors);\r\n    }\r\n    Interface.gets = gets;\r\n    {\r\n        const buttons = gets(\"#selects > button\");\r\n        buttons.forEach(b => b.onclick = () => {\r\n            get(\"#selects > button.active\")?.classList.remove(\"active\");\r\n            b.classList.add(\"active\");\r\n            gets(\"#container > div\").forEach(div => div.classList.add(\"disabled\"));\r\n            let id = b.getAttribute(\"data-block\");\r\n            get(`#container > div#${id}`)?.classList.remove(\"disabled\");\r\n        });\r\n    }\r\n    (async function () {\r\n        await (await fs_web_1.readDir(\"./pages/Code\")).forEach(async (f) => {\r\n            console.log(await fs_web_1.readFile(f.path));\r\n        });\r\n    })();\r\n})(Interface = exports.Interface || (exports.Interface = {}));\r\n\n\n//# sourceURL=webpack://my-workspace-web/./assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;