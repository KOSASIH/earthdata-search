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

/***/ "./serverless/src/decodeId/handler.js":
/*!********************************************!*\
  !*** ./serverless/src/decodeId/handler.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_obfuscation_deobfuscateId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/obfuscation/deobfuscateId */ \"./serverless/src/util/obfuscation/deobfuscateId.js\");\n/* harmony import */ var _sharedUtils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sharedUtils/config */ \"./sharedUtils/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n/**\n * Decodes an obfuscated id\n * @param {Object} event Details about the HTTP request that it received\n */\n\nvar decodeId = function decodeId(event) {\n  var _getApplicationConfig = (0,_sharedUtils_config__WEBPACK_IMPORTED_MODULE_1__.getApplicationConfig)(),\n      defaultResponseHeaders = _getApplicationConfig.defaultResponseHeaders;\n\n  var queryStringParameters = event.queryStringParameters;\n  var obfuscatedId = queryStringParameters.obfuscated_id,\n      _queryStringParameter = queryStringParameters.spin,\n      spin = _queryStringParameter === void 0 ? process.env.obfuscationSpin : _queryStringParameter;\n  return {\n    isBase64Encoded: false,\n    statusCode: 200,\n    headers: defaultResponseHeaders,\n    body: JSON.stringify({\n      id: (0,_util_obfuscation_deobfuscateId__WEBPACK_IMPORTED_MODULE_0__.deobfuscateId)(obfuscatedId, spin)\n    })\n  };\n};\n\nvar _default = decodeId;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(decodeId, \"decodeId\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/decodeId/handler.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/decodeId/handler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/decodeId/handler.js?");

/***/ }),

/***/ "./serverless/src/util/obfuscation/deobfuscateId.js":
/*!**********************************************************!*\
  !*** ./serverless/src/util/obfuscation/deobfuscateId.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deobfuscateId\": () => (/* binding */ deobfuscateId)\n/* harmony export */ });\n/* harmony import */ var scatter_swap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scatter-swap */ \"scatter-swap\");\n/* harmony import */ var scatter_swap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scatter_swap__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n/**\n * Deobfuscate a database ID determine it's original value\n * @param {Integer} value The value to deobfuscate\n */\n\nvar deobfuscateId = function deobfuscateId(value) {\n  var spin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.obfuscationSpin;\n  return parseInt(new (scatter_swap__WEBPACK_IMPORTED_MODULE_0___default())(value, spin).reverseHash(), 10);\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(deobfuscateId, \"deobfuscateId\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/obfuscation/deobfuscateId.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/obfuscation/deobfuscateId.js?");

/***/ }),

/***/ "./sharedUtils/config.js":
/*!*******************************!*\
  !*** ./sharedUtils/config.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApplicationConfig\": () => (/* binding */ getApplicationConfig),\n/* harmony export */   \"getEarthdataConfig\": () => (/* binding */ getEarthdataConfig),\n/* harmony export */   \"getEnvironmentConfig\": () => (/* binding */ getEnvironmentConfig),\n/* harmony export */   \"getSecretEarthdataConfig\": () => (/* binding */ getSecretEarthdataConfig),\n/* harmony export */   \"getSecretEnvironmentConfig\": () => (/* binding */ getSecretEnvironmentConfig),\n/* harmony export */   \"getSecretCypressConfig\": () => (/* binding */ getSecretCypressConfig),\n/* harmony export */   \"getSecretAdminUsers\": () => (/* binding */ getSecretAdminUsers)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static.config.json */ \"./static.config.json\");\n/* harmony import */ var _secret_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../secret.config.json */ \"./secret.config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar getConfig = function getConfig() {\n  try {\n    // eslint-disable-next-line global-require, import/no-unresolved\n    var overrideConfig = __webpack_require__(/*! ../overrideStatic.config.json */ \"./overrideStatic.config.json\");\n\n    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)(_static_config_json__WEBPACK_IMPORTED_MODULE_1__, overrideConfig);\n  } catch (error) {\n    return _static_config_json__WEBPACK_IMPORTED_MODULE_1__;\n  }\n};\n\nvar getApplicationConfig = function getApplicationConfig() {\n  return getConfig().application;\n};\nvar getEarthdataConfig = function getEarthdataConfig(env) {\n  return getConfig().earthdata[env];\n};\nvar getEnvironmentConfig = function getEnvironmentConfig(env) {\n  return getConfig().environment[env || \"development\"];\n};\nvar getSecretEarthdataConfig = function getSecretEarthdataConfig(env) {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.earthdata[env];\n};\nvar getSecretEnvironmentConfig = function getSecretEnvironmentConfig() {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.environment[\"development\"];\n};\nvar getSecretCypressConfig = function getSecretCypressConfig() {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.cypress;\n};\nvar getSecretAdminUsers = function getSecretAdminUsers() {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.admins;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getConfig, \"getConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getApplicationConfig, \"getApplicationConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getEarthdataConfig, \"getEarthdataConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getEnvironmentConfig, \"getEnvironmentConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretEarthdataConfig, \"getSecretEarthdataConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretEnvironmentConfig, \"getSecretEnvironmentConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretCypressConfig, \"getSecretCypressConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretAdminUsers, \"getSecretAdminUsers\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./sharedUtils/config.js?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "scatter-swap":
/*!*******************************!*\
  !*** external "scatter-swap" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("scatter-swap");

/***/ }),

/***/ "./overrideStatic.config.json":
/*!************************************!*\
  !*** ./overrideStatic.config.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"application\":{\"defaultPortal\":\"edsc\"}}');\n\n//# sourceURL=webpack://earthdata-search/./overrideStatic.config.json?");

/***/ }),

/***/ "./secret.config.json":
/*!****************************!*\
  !*** ./secret.config.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"environment\":{\"test\":{\"apiHost\":\"http://localhost:3001\"},\"development\":{\"dbUsername\":\"\",\"dbPassword\":\"\",\"apiHost\":\"http://localhost:3001/dev\"},\"production\":{}},\"earthdata\":{\"sit\":{\"clientId\":\"kzAY1v0kVjQ7QVpwBw-kLQ\",\"password\":\"OpenSource_EDSC!2\",\"secret\":\"JWT_SIGNING_SECRET_KEY\",\"cmrSystemUsername\":\"edsc.sys\",\"cmrSystemPassword\":\"q4XuuVAHCk85PuxsJmsCgEdmxVtX28M4\"},\"uat\":{\"clientId\":\"K34r-9lYcLrog2soFrljlw\",\"password\":\"OpenSource_EDSC!2\",\"secret\":\"JWT_SIGNING_SECRET_KEY\",\"cmrSystemUsername\":\"edsc.sys\",\"cmrSystemPassword\":\"vgaCg3dV6h5C2b9L4YMDE8kGReGb5inY\"},\"prod\":{\"clientId\":\"0LDz2MRpxLhPK1rDQBf_KA\",\"password\":\"OpenSource_EDSC!2\",\"secret\":\"JWT_SIGNING_SECRET_KEY\",\"cmrSystemUsername\":\"edsc.sys\",\"cmrSystemPassword\":\"hyW2PeGC5zNVH554NHTQWzwuZxR7GcsY\"},\"test\":{\"secret\":\"JWT_SIGNING_SECRET_KEY\"}},\"cypress\":{\"user\":{\"id\":20,\"username\":\"macrouch\"},\"ursProfile\":{\"first_name\":\"Matthew\"}},\"admins\":[\"macrouch\",\"mreese84\",\"rabbott\",\"sarahrogers\",\"trevorlang\"]}');\n\n//# sourceURL=webpack://earthdata-search/./secret.config.json?");

/***/ }),

/***/ "./static.config.json":
/*!****************************!*\
  !*** ./static.config.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"application\":{\"version\":\"dev\",\"env\":\"dev\",\"defaultPortal\":\"default\",\"feedbackApp\":\"\",\"analytics\":{\"gtmPropertyId\":\"\",\"localIdentifier\":{\"enabled\":false,\"propertyId\":\"\"}},\"ciMode\":false,\"cmrTagNamespace\":\"edsc.extra.serverless\",\"thumbnailSize\":{\"height\":85,\"width\":85},\"orderStatusRefreshTime\":60000,\"eosdisTagKey\":\"gov.nasa.eosdis\",\"defaultCmrPageSize\":20,\"maxCmrPageSize\":2000,\"granuleLinksPageSize\":\"500\",\"defaultCmrSearchTags\":[\"edsc.*\",\"opensearch.granule.osdd\"],\"defaultMaxOrderSize\":1000000,\"defaultGranulesPerOrder\":2000,\"defaultSpatialDecimalSize\":5,\"ummGranuleVersion\":\"1.5\",\"ummServiceVersion\":\"1.2\",\"temporalDateFormatFull\":\"YYYY-MM-DD HH:mm:ss\",\"temporalDateFormatRange\":\"MM-DD HH:mm:ss\",\"minimumTemporalDateString\":\"1960-01-01 00:00:00\",\"defaultResponseHeaders\":{\"Access-Control-Allow-Origin\":\"*\",\"Access-Control-Allow-Headers\":\"*\",\"Access-Control-Allow-Credentials\":true},\"clientId\":{\"background\":\"eed-PORTAL-ENV-serverless-background\",\"client\":\"eed-PORTAL-ENV-serverless-client\",\"lambda\":\"eed-PORTAL-ENV-serverless-lambda\"}},\"environment\":{\"test\":{\"apiHost\":\"http://localhost:3000\",\"edscHost\":\"http://localhost:8080\",\"jwtToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTU3ODQzMzQ3NiwiZWFydGhkYXRhRW52aXJvbm1lbnQiOiJ0ZXN0In0.WPMuvg26HcYGxGYi7Hl9_FO6YiiJNHWalQ35_1oP5do\"},\"development\":{\"dbHost\":\"127.0.0.1\",\"dbName\":\"edsc_dev\",\"dbPort\":5432,\"apiHost\":\"http://localhost:3001/dev\",\"edscHost\":\"http://localhost:8080\"},\"production\":{\"apiHost\":\"http://localhost:3001/dev\",\"edscHost\":\"http://localhost:8080\"}},\"earthdata\":{\"dev\":{},\"test\":{\"cmrHost\":\"https://cmr.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.earthdata.nasa.gov\",\"regionHost\":\"https://fts.podaac.earthdata.nasa.gov\",\"opensearchRoot\":\"https://cmr.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"},\"sit\":{\"cmrHost\":\"https://cmr.sit.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.sit.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://sit.urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.sit.earthdata.nasa.gov\",\"regionHost\":\"https://d2dwjhzkooeayk.cloudfront.net\",\"opensearchRoot\":\"https://cmr.sit.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"},\"uat\":{\"cmrHost\":\"https://cmr.uat.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.uat.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://uat.urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.uat.earthdata.nasa.gov\",\"regionHost\":\"https://fts.podaac.uat.earthdata.nasa.gov\",\"opensearchRoot\":\"https://cmr.uat.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"},\"prod\":{\"cmrHost\":\"https://cmr.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.earthdata.nasa.gov\",\"regionHost\":\"https://fts.podaac.earthdata.nasa.gov\",\"opensearchRoot\":\"https://cmr.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"}}}');\n\n//# sourceURL=webpack://earthdata-search/./static.config.json?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./serverless/src/decodeId/handler.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;