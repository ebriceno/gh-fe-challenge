"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "mocks_server_ts";
exports.ids = ["mocks_server_ts"];
exports.modules = {

/***/ "./mocks/handlers.ts":
/*!***************************!*\
  !*** ./mocks/handlers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlers: () => (/* binding */ handlers)\n/* harmony export */ });\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw */ \"msw\");\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(msw__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handlers = [\n    msw__WEBPACK_IMPORTED_MODULE_0__.rest.get(\"http://localhost:3000/example\", (_req, res, ctx)=>{\n        return res(ctx.json({\n            title: \"Lord of the Rings\",\n            description: \"The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.\"\n        }));\n    })\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2Nrcy9oYW5kbGVycy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFPbkIsTUFBTUMsV0FBVztJQUN2QkQscUNBQUlBLENBQUNFLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQ0MsTUFBTUMsS0FBS0M7UUFDckQsT0FBT0QsSUFDTkMsSUFBSUMsSUFBSSxDQUFVO1lBQ2pCQyxPQUFPO1lBQ1BDLGFBQ0M7UUFDRjtJQUVGO0NBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZmUtZXhlcmNpc2UtY2xpZW50Ly4vbW9ja3MvaGFuZGxlcnMudHM/MzFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXN0IH0gZnJvbSAnbXN3J1xuXG5pbnRlcmZhY2UgRXhhbXBsZSB7XG5cdHRpdGxlOiBzdHJpbmdcblx0ZGVzY3JpcHRpb246IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlcnMgPSBbXG5cdHJlc3QuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhhbXBsZScsIChfcmVxLCByZXMsIGN0eCkgPT4ge1xuXHRcdHJldHVybiByZXMoXG5cdFx0XHRjdHguanNvbjxFeGFtcGxlPih7XG5cdFx0XHRcdHRpdGxlOiAnTG9yZCBvZiB0aGUgUmluZ3MnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHQnVGhlIExvcmQgb2YgdGhlIFJpbmdzIGlzIGFuIGVwaWMgaGlnaC1mYW50YXN5IG5vdmVsIHdyaXR0ZW4gYnkgRW5nbGlzaCBhdXRob3IgYW5kIHNjaG9sYXIgSi4gUi4gUi4gVG9sa2llbi4nLFxuXHRcdFx0fSksXG5cdFx0KVxuXHR9KSxcbl1cbiJdLCJuYW1lcyI6WyJyZXN0IiwiaGFuZGxlcnMiLCJnZXQiLCJfcmVxIiwicmVzIiwiY3R4IiwianNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./mocks/handlers.ts\n");

/***/ }),

/***/ "./mocks/server.ts":
/*!*************************!*\
  !*** ./mocks/server.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   server: () => (/* binding */ server)\n/* harmony export */ });\n/* harmony import */ var msw_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw/node */ \"msw/node\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./mocks/handlers.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([msw_node__WEBPACK_IMPORTED_MODULE_0__]);\nmsw_node__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst server = (0,msw_node__WEBPACK_IMPORTED_MODULE_0__.setupServer)(..._handlers__WEBPACK_IMPORTED_MODULE_1__.handlers);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2Nrcy9zZXJ2ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ0Q7QUFFOUIsTUFBTUUsU0FBU0YscURBQVdBLElBQUlDLCtDQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ZlLWV4ZXJjaXNlLWNsaWVudC8uL21vY2tzL3NlcnZlci50cz80OWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHVwU2VydmVyIH0gZnJvbSAnbXN3L25vZGUnXG5pbXBvcnQgeyBoYW5kbGVycyB9IGZyb20gJy4vaGFuZGxlcnMnXG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBzZXR1cFNlcnZlciguLi5oYW5kbGVycylcbiJdLCJuYW1lcyI6WyJzZXR1cFNlcnZlciIsImhhbmRsZXJzIiwic2VydmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mocks/server.ts\n");

/***/ })

};
;