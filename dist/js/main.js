/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const file = './d/db.json';\r\nconst site = 'https://jsonplaceholder.typicode.com/posts';\r\nconst headers = { 'Content-type': 'application/json; charset=UTF-8' };\r\n/*\r\nconst sendData = (site, data, headers) => {\r\n  fetch(site, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers,\r\n  })\r\n    .then((response) => console.log(response.json()))\r\n    // .then((json) => console.log(json))\r\n    .catch((err) => console.log(err));\r\n};\r\n\r\nconst getData = (source) => {\r\n  fetch(source)\r\n    .then((response) => response.json())\r\n    .then((data) => sendData(site, data, headers))\r\n    .catch((err) => console.log(err));\r\n};\r\n*/\r\n// const user = fetch(file);\r\n\r\nfetch('./d/db.json') // ошибка\r\n  .then((response) => response.json())\r\n  .catch((err) => console.log(err));\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;