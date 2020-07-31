var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/appStyle.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/appStyle.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".description {\n  color: #261F1F; }\n\ni {\n  margin-right: 0.5rem;\n  transition: 0.4s ease-out; }\n\n.add_btn, .remove_btn {\n  padding: 0.5rem 0.6rem;\n  background-color: #FFD600;\n  border-radius: 10px;\n  font-size: 1.1rem;\n  border: none;\n  border: 3px solid #fde465;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none; }\n  .add_btn:hover i, .remove_btn:hover i {\n    color: #FF5C00; }\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  box-sizing: border-box; }\n\n.container {\n  width: 90%;\n  margin: auto; }\n\nheader {\n  height: 90vh;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  z-index: -2; }\n  header .intro_word {\n    width: 60%;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    color: #fff; }\n    header .intro_word h1 {\n      font-size: 3.5rem; }\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.767);\n  z-index: -1; }\n\n.app_logo {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  height: 10vh;\n  display: flex;\n  align-items: center; }\n  .app_logo .app_name {\n    font-size: 1.4rem;\n    color: #fff; }\n  .app_logo .logo {\n    width: 50px; }\n\n/*\r\n++++++++++++++++++++\r\nMain section \r\n++++++++++++++++++++\r\n*/\n.my_trips_header {\n  padding: 1.5rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 20px; }\n\n#trips {\n  width: 100%;\n  background: #FF5C00;\n  padding: 3rem 0; }\n\n.trip {\n  display: flex;\n  justify-content: space-between; }\n  .trip .trip_item1 {\n    box-shadow: 5px 5px 3px #d94e00, \r -5px -5px 3px #ff6a00;\n    width: 35%;\n    order: 2;\n    height: 490px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 2rem;\n    border-radius: 20px; }\n    .trip .trip_item1 .primary_details {\n      height: 50%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      .trip .trip_item1 .primary_details h3 {\n        font-size: 2rem;\n        color: #fff; }\n    .trip .trip_item1 .secondary_details div {\n      display: flex;\n      align-items: center;\n      margin-bottom: 1rem; }\n      .trip .trip_item1 .secondary_details div i {\n        font-size: 2.5rem;\n        color: #261F1F; }\n    .trip .trip_item1 .secondary_details div:last-child {\n      display: flex;\n      flex-direction: column;\n      text-align: start;\n      justify-content: space-between;\n      align-items: flex-start; }\n    .trip .trip_item1 .secondary_details .flight_distance p, .trip .trip_item1 .secondary_details .destination_weather p {\n      color: #fff;\n      margin-left: 1rem;\n      font-size: 1.5rem; }\n    .trip .trip_item1 .flight_info {\n      color: #fff;\n      font-size: 1rem;\n      display: flex;\n      justify-content: space-between; }\n      .trip .trip_item1 .flight_info h4 {\n        font-size: 1.4rem; }\n      .trip .trip_item1 .flight_info .flight_info_text {\n        line-height: 1.6;\n        width: 35%;\n        text-align: end; }\n  .trip .trip_item2 {\n    width: 45%;\n    height: 560px;\n    order: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    .trip .trip_item2 .buttons {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between; }\n      .trip .trip_item2 .buttons button {\n        margin-bottom: 1.5rem; }\n    .trip .trip_item2 img {\n      padding: 1.5rem;\n      border-radius: 20px;\n      width: 100%;\n      box-shadow: inset 5px 5px 3px #d94e00, \r inset -5px -5px 3px #ff6a00; }\n\n/* \r\n++++++++++++++++\r\nAdd trip Section\r\n++++++++++++++++\r\n*/\n.add_trip {\n  background-color: #261F1F;\n  width: 100%;\n  height: 30vh;\n  display: flex;\n  align-items: center; }\n  .add_trip form {\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n  .add_trip input[type=\"text\"], .add_trip input[type=\"date\"] {\n    width: 50%;\n    height: 35px;\n    margin-left: 1rem;\n    background-color: #261F1F;\n    outline: none;\n    border: none;\n    border-bottom: 1px solid #261F1F;\n    font-size: 1.2rem;\n    color: #7D7B7B;\n    transition: 0.4s ease-out; }\n  .add_trip input[type=\"text\"]:focus, .add_trip input[type=\"date\"]:focus {\n    border-bottom: 1px solid #FF5C00; }\n  .add_trip input[type=\"submit\"] {\n    height: 45px;\n    padding: 0 1rem;\n    background: #261F1F;\n    border: 1px solid #FF5C00;\n    color: #FF5C00;\n    font-weight: bold;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.4s ease-out;\n    font-size: 1.1rem; }\n    .add_trip input[type=\"submit\"]:hover {\n      border: 1px solid #ffffff;\n      color: #fff; }\n  .add_trip label {\n    width: 40%;\n    font-size: 1.7rem;\n    color: #FF5C00;\n    display: inline-block; }\n\n/*\r\n++++++++++++++++\r\nFooter\r\n+++++++++++++++=\r\n*/\nfooter {\n  border-top: 1px solid #7D7B7B;\n  background-color: #261F1F;\n  padding: 2rem 0; }\n  footer .social_media {\n    text-align: center; }\n    footer .social_media h5 {\n      font-size: 1.1rem;\n      color: #7D7B7B; }\n    footer .social_media .social_media_icons {\n      font-size: 1.5rem;\n      margin: 1.5rem auto;\n      display: flex;\n      justify-content: center;\n      color: #7D7B7B; }\n      footer .social_media .social_media_icons div {\n        cursor: pointer;\n        text-align: center; }\n        footer .social_media .social_media_icons div:not(:first-child) {\n          margin-left: 2rem; }\n        footer .social_media .social_media_icons div h6 {\n          transition: 0.4s ease-out; }\n        footer .social_media .social_media_icons div:hover i, footer .social_media .social_media_icons div:hover h6 {\n          color: #fff; }\n      footer .social_media .social_media_icons i {\n        color: #7D7B7B; }\n\n.copyright {\n  width: 30%;\n  margin: auto;\n  color: #7D7B7B;\n  text-align: center; }\n\n.lodging_packing_notes {\n  margin-top: 3rem;\n  height: 450px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .lodging_packing_notes .lodging_info, .lodging_packing_notes .packing_list, .lodging_packing_notes .notes {\n    width: 380px;\n    height: 100%;\n    border-radius: 20px;\n    background-color: #FF7A30;\n    padding: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 5px 5px 0px #f0732d, \r -5px -5px 0px #ff8133; }\n  .lodging_packing_notes h5 {\n    height: 50;\n    text-align: center;\n    font-size: 1.5rem; }\n  .lodging_packing_notes textarea, .lodging_packing_notes .packing_items {\n    width: 100%;\n    height: 320px;\n    border: none;\n    outline: none;\n    background-color: #FF7A30;\n    color: #fff;\n    font-size: 1.1rem;\n    border-radius: 20px; }\n  .lodging_packing_notes textarea {\n    border: 1px solid #FF7A30;\n    transition: 0.4s ease-out;\n    padding: 1rem; }\n  .lodging_packing_notes textarea:focus {\n    border: 2px solid #FF5C00; }\n  .lodging_packing_notes .editing_tools {\n    display: flex;\n    justify-content: space-between; }\n    .lodging_packing_notes .editing_tools i {\n      font-size: 1.5rem;\n      cursor: pointer;\n      color: #fff; }\n  .lodging_packing_notes .packing_item {\n    margin-bottom: 0.5rem;\n    display: inline-block;\n    position: relative;\n    background-color: #FF5C00;\n    border-radius: 20px;\n    padding: 0.5rem 1rem; }\n    .lodging_packing_notes .packing_item .packing_item_name {\n      margin-right: 1.5rem; }\n    .lodging_packing_notes .packing_item i {\n      position: absolute;\n      top: 10px;\n      right: 5px;\n      cursor: pointer;\n      color: #000; }\n", "",{"version":3,"sources":["C:/Users/User/Desktop/Front End Nanodegree PROJECTS/Capstone TravelApp/src/client/styles/appStyle.scss","appStyle.scss"],"names":[],"mappings":"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","file":"appStyle.scss","sourcesContent":["\r\n// Font\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n// Colors\r\n$primary-color: #FF5C00;\r\n$secondary-color: #FFD600;\r\n$grayish-color: #7D7B7B;\r\n$footer-background: #261F1F;\r\n\r\n.description {\r\n    color: #261F1F;\r\n}\r\n\r\ni {\r\n    margin-right: 0.5rem;\r\n    transition: 0.4s ease-out;\r\n}\r\n\r\n// primary btn\r\n.add_btn {\r\n    padding: 0.5rem 0.6rem;\r\n    background-color: $secondary-color;\r\n    border-radius: 10px;\r\n    font-size: 1.1rem;\r\n    border: none;\r\n    border: 3px solid #fde465;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    outline: none;\r\n\r\n    &:hover  i {\r\n        color: #FF5C00;\r\n    } \r\n}\r\n\r\n.remove_btn {\r\n    @extend .add_btn;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\nheader {\r\n    height: 90vh;\r\n    // background-image: url('../assets/images/Travel-wallpaper.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    z-index: -2;\r\n   \r\n    .intro_word {\r\n        width: 60%;\r\n        margin: auto;\r\n        text-align: center;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100%;\r\n        color: #fff;\r\n\r\n        h1 {\r\n            font-size: 3.5rem;\r\n        }\r\n    }\r\n}\r\n\r\n.overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.767);\r\n    z-index: -1;\r\n\r\n}\r\n\r\n.app_logo {\r\n    position: absolute;\r\n    left: 10px;\r\n    top: 10px;\r\n    height: 10vh;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    .app_name {\r\n        font-size: 1.4rem;\r\n        color: #fff;\r\n    }\r\n\r\n    .logo {\r\n    width: 50px;\r\n}\r\n}\r\n\r\n\r\n/*\r\n++++++++++++++++++++\r\nMain section \r\n++++++++++++++++++++\r\n*/\r\n.my_trips_header {\r\n    padding: 1.5rem 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 20px;\r\n}\r\n\r\n#trips {\r\n    width: 100%;\r\n    background: $primary-color;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n.trip {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .trip_item1 {\r\n        box-shadow:  5px 5px 3px #d94e00, \r\n             -5px -5px 3px #ff6a00;\r\n        width: 35%;\r\n        order: 2;\r\n        height: 490px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        padding: 2rem;\r\n        border-radius: 20px;\r\n\r\n        .primary_details {\r\n            height: 50%;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n\r\n            h3 {\r\n                font-size: 2rem;\r\n                color: #fff;\r\n            }\r\n        }\r\n        \r\n        .secondary_details {\r\n            div {\r\n                display: flex;\r\n                align-items: center;\r\n                margin-bottom: 1rem;\r\n                i {\r\n                    font-size: 2.5rem;\r\n                    color: #261F1F;\r\n                }       \r\n            }\r\n\r\n            div:last-child {\r\n                display: flex;\r\n                flex-direction: column;\r\n                text-align: start;\r\n                justify-content: space-between;\r\n                align-items: flex-start;\r\n            }\r\n\r\n            .flight_distance p, .destination_weather p {\r\n                    color: #fff;\r\n                    margin-left: 1rem;\r\n                    font-size: 1.5rem;\r\n                }\r\n        }\r\n\r\n        .flight_info {\r\n            color: #fff;\r\n            font-size: 1rem;\r\n            display: flex;\r\n            justify-content: space-between;\r\n\r\n            h4 {\r\n                font-size: 1.4rem;\r\n            }\r\n\r\n            .flight_info_text {\r\n              line-height: 1.6;\r\n              width: 35%;\r\n              text-align: end;  \r\n            }\r\n        }\r\n    }\r\n\r\n    .trip_item2 {\r\n        width: 45%;\r\n        height: 560px;\r\n        order: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n\r\n        .buttons {\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            justify-content: space-between;\r\n\r\n            button {\r\n                margin-bottom: 1.5rem;\r\n            }\r\n        }\r\n\r\n        img {\r\n            padding: 1.5rem;\r\n            border-radius: 20px;\r\n            width: 100%;\r\n            box-shadow: inset 5px 5px 3px #d94e00, \r\n            inset -5px -5px 3px #ff6a00;\r\n        }\r\n    }\r\n}\r\n\r\n/* \r\n++++++++++++++++\r\nAdd trip Section\r\n++++++++++++++++\r\n*/\r\n\r\n.add_trip {\r\n    background-color: #261F1F;\r\n    width: 100%;\r\n    height: 30vh;\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n    form {\r\n        display: flex;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n    }\r\n\r\n    input[type=\"text\"],  input[type=\"date\"] {\r\n        width: 50%;\r\n        height: 35px;\r\n        margin-left: 1rem;\r\n        background-color: #261F1F;\r\n        outline: none;\r\n        border: none;\r\n        border-bottom: 1px solid #261F1F;\r\n        font-size: 1.2rem;\r\n        color: #7D7B7B;\r\n        transition: 0.4s ease-out;\r\n    }\r\n\r\n    input[type=\"text\"]:focus,  input[type=\"date\"]:focus {\r\n        border-bottom: 1px solid #FF5C00;\r\n    }\r\n\r\n    input[type=\"submit\"] {\r\n        height: 45px;\r\n        padding: 0 1rem;\r\n        background: #261F1F;\r\n        border: 1px solid #FF5C00;\r\n        color: #FF5C00;\r\n        font-weight: bold;\r\n        border-radius: 5px;\r\n        cursor: pointer;\r\n        transition: 0.4s ease-out;\r\n        font-size: 1.1rem;\r\n\r\n        &:hover {\r\n            border: 1px solid #ffffff;\r\n            color: #fff;\r\n        }\r\n    }\r\n\r\n    label {\r\n        width: 40%;\r\n        font-size: 1.7rem;\r\n        color: #FF5C00;\r\n        display: inline-block;\r\n    }\r\n}\r\n\r\n\r\n/*\r\n++++++++++++++++\r\nFooter\r\n+++++++++++++++=\r\n*/\r\n\r\nfooter {\r\n    border-top: 1px solid #7D7B7B;\r\n    background-color: #261F1F;\r\n    padding: 2rem 0;\r\n    .social_media {\r\n        text-align: center;\r\n\r\n        h5 {\r\n            font-size: 1.1rem;\r\n            color: #7D7B7B;\r\n        }\r\n\r\n        .social_media_icons {\r\n            font-size: 1.5rem;\r\n            margin: 1.5rem auto;\r\n            display: flex;\r\n            justify-content: center;\r\n            color: #7D7B7B;\r\n          \r\n            div {\r\n               cursor: pointer;\r\n               text-align: center;\r\n\r\n               &:not(:first-child) {\r\n                    margin-left: 2rem;\r\n               }\r\n               \r\n               h6 {\r\n                   transition: 0.4s ease-out;\r\n               }\r\n\r\n               &:hover {\r\n                   i, h6 {\r\n                       color: #fff;\r\n                   }\r\n               }\r\n            }\r\n\r\n            i {\r\n                color: #7D7B7B;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.copyright {\r\n    width: 30%;\r\n    margin: auto;\r\n    color: #7D7B7B;\r\n    text-align: center;\r\n}\r\n\r\n// ++++++++++++++++++++++++++++++++++\r\n// Lodging, Packing and Notes SECTION\r\n// ++++++++++++++++++++++++++++++++++\r\n\r\n.lodging_packing_notes {\r\n    margin-top: 3rem;\r\n    height: 450px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n\r\n    .lodging_info, .packing_list, .notes {\r\n        width: 380px;\r\n        height: 100%;\r\n        border-radius: 20px;\r\n        background-color:  #FF7A30;\r\n        padding: 1.5rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        box-shadow:  5px 5px 0px #f0732d, \r\n             -5px -5px 0px #ff8133;\r\n    }\r\n\r\n    h5 {\r\n        height: 50;\r\n        text-align: center;\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    textarea, .packing_items {\r\n        width: 100%;\r\n        height: 320px;\r\n        border: none;  \r\n        outline: none;\r\n        background-color: #FF7A30;\r\n        color: #fff;\r\n        font-size: 1.1rem;\r\n        border-radius: 20px;\r\n    }\r\n\r\n    textarea {\r\n        border: 1px solid #FF7A30;\r\n        transition: 0.4s ease-out;\r\n        padding: 1rem;\r\n    }\r\n\r\n    textarea:focus {\r\n        border: 2px solid #FF5C00;\r\n    }\r\n\r\n    .editing_tools {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        i {\r\n            font-size: 1.5rem;\r\n            cursor: pointer;\r\n            color: #fff;\r\n        }\r\n    }\r\n\r\n    // .packing_items {\r\n    //     display: flex;\r\n    //     flex-wrap: wrap;\r\n    //     justify-content: space-between;\r\n    // }\r\n\r\n    .packing_item {\r\n        margin-bottom: 0.5rem;\r\n        display: inline-block;\r\n        position: relative;\r\n        background-color: #FF5C00;\r\n        border-radius: 20px;\r\n        padding: 0.5rem 1rem;\r\n\r\n        .packing_item_name {\r\n            margin-right: 1.5rem;\r\n        }\r\n\r\n        i {\r\n            position: absolute;\r\n            top: 10px;\r\n            right: 5px;\r\n            cursor: pointer;\r\n            color: #000;\r\n        }\r\n    }\r\n\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n.description {\n  color: #261F1F; }\n\ni {\n  margin-right: 0.5rem;\n  transition: 0.4s ease-out; }\n\n.add_btn, .remove_btn {\n  padding: 0.5rem 0.6rem;\n  background-color: #FFD600;\n  border-radius: 10px;\n  font-size: 1.1rem;\n  border: none;\n  border: 3px solid #fde465;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none; }\n  .add_btn:hover i, .remove_btn:hover i {\n    color: #FF5C00; }\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  box-sizing: border-box; }\n\n.container {\n  width: 90%;\n  margin: auto; }\n\nheader {\n  height: 90vh;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  z-index: -2; }\n  header .intro_word {\n    width: 60%;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    color: #fff; }\n    header .intro_word h1 {\n      font-size: 3.5rem; }\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.767);\n  z-index: -1; }\n\n.app_logo {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  height: 10vh;\n  display: flex;\n  align-items: center; }\n  .app_logo .app_name {\n    font-size: 1.4rem;\n    color: #fff; }\n  .app_logo .logo {\n    width: 50px; }\n\n/*\r\n++++++++++++++++++++\r\nMain section \r\n++++++++++++++++++++\r\n*/\n.my_trips_header {\n  padding: 1.5rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 20px; }\n\n#trips {\n  width: 100%;\n  background: #FF5C00;\n  padding: 3rem 0; }\n\n.trip {\n  display: flex;\n  justify-content: space-between; }\n  .trip .trip_item1 {\n    box-shadow: 5px 5px 3px #d94e00, \r -5px -5px 3px #ff6a00;\n    width: 35%;\n    order: 2;\n    height: 490px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 2rem;\n    border-radius: 20px; }\n    .trip .trip_item1 .primary_details {\n      height: 50%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      .trip .trip_item1 .primary_details h3 {\n        font-size: 2rem;\n        color: #fff; }\n    .trip .trip_item1 .secondary_details div {\n      display: flex;\n      align-items: center;\n      margin-bottom: 1rem; }\n      .trip .trip_item1 .secondary_details div i {\n        font-size: 2.5rem;\n        color: #261F1F; }\n    .trip .trip_item1 .secondary_details div:last-child {\n      display: flex;\n      flex-direction: column;\n      text-align: start;\n      justify-content: space-between;\n      align-items: flex-start; }\n    .trip .trip_item1 .secondary_details .flight_distance p, .trip .trip_item1 .secondary_details .destination_weather p {\n      color: #fff;\n      margin-left: 1rem;\n      font-size: 1.5rem; }\n    .trip .trip_item1 .flight_info {\n      color: #fff;\n      font-size: 1rem;\n      display: flex;\n      justify-content: space-between; }\n      .trip .trip_item1 .flight_info h4 {\n        font-size: 1.4rem; }\n      .trip .trip_item1 .flight_info .flight_info_text {\n        line-height: 1.6;\n        width: 35%;\n        text-align: end; }\n  .trip .trip_item2 {\n    width: 45%;\n    height: 560px;\n    order: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    .trip .trip_item2 .buttons {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between; }\n      .trip .trip_item2 .buttons button {\n        margin-bottom: 1.5rem; }\n    .trip .trip_item2 img {\n      padding: 1.5rem;\n      border-radius: 20px;\n      width: 100%;\n      box-shadow: inset 5px 5px 3px #d94e00, \r inset -5px -5px 3px #ff6a00; }\n\n/* \r\n++++++++++++++++\r\nAdd trip Section\r\n++++++++++++++++\r\n*/\n.add_trip {\n  background-color: #261F1F;\n  width: 100%;\n  height: 30vh;\n  display: flex;\n  align-items: center; }\n  .add_trip form {\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n  .add_trip input[type=\"text\"], .add_trip input[type=\"date\"] {\n    width: 50%;\n    height: 35px;\n    margin-left: 1rem;\n    background-color: #261F1F;\n    outline: none;\n    border: none;\n    border-bottom: 1px solid #261F1F;\n    font-size: 1.2rem;\n    color: #7D7B7B;\n    transition: 0.4s ease-out; }\n  .add_trip input[type=\"text\"]:focus, .add_trip input[type=\"date\"]:focus {\n    border-bottom: 1px solid #FF5C00; }\n  .add_trip input[type=\"submit\"] {\n    height: 45px;\n    padding: 0 1rem;\n    background: #261F1F;\n    border: 1px solid #FF5C00;\n    color: #FF5C00;\n    font-weight: bold;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.4s ease-out;\n    font-size: 1.1rem; }\n    .add_trip input[type=\"submit\"]:hover {\n      border: 1px solid #ffffff;\n      color: #fff; }\n  .add_trip label {\n    width: 40%;\n    font-size: 1.7rem;\n    color: #FF5C00;\n    display: inline-block; }\n\n/*\r\n++++++++++++++++\r\nFooter\r\n+++++++++++++++=\r\n*/\nfooter {\n  border-top: 1px solid #7D7B7B;\n  background-color: #261F1F;\n  padding: 2rem 0; }\n  footer .social_media {\n    text-align: center; }\n    footer .social_media h5 {\n      font-size: 1.1rem;\n      color: #7D7B7B; }\n    footer .social_media .social_media_icons {\n      font-size: 1.5rem;\n      margin: 1.5rem auto;\n      display: flex;\n      justify-content: center;\n      color: #7D7B7B; }\n      footer .social_media .social_media_icons div {\n        cursor: pointer;\n        text-align: center; }\n        footer .social_media .social_media_icons div:not(:first-child) {\n          margin-left: 2rem; }\n        footer .social_media .social_media_icons div h6 {\n          transition: 0.4s ease-out; }\n        footer .social_media .social_media_icons div:hover i, footer .social_media .social_media_icons div:hover h6 {\n          color: #fff; }\n      footer .social_media .social_media_icons i {\n        color: #7D7B7B; }\n\n.copyright {\n  width: 30%;\n  margin: auto;\n  color: #7D7B7B;\n  text-align: center; }\n\n.lodging_packing_notes {\n  margin-top: 3rem;\n  height: 450px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .lodging_packing_notes .lodging_info, .lodging_packing_notes .packing_list, .lodging_packing_notes .notes {\n    width: 380px;\n    height: 100%;\n    border-radius: 20px;\n    background-color: #FF7A30;\n    padding: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 5px 5px 0px #f0732d, \r -5px -5px 0px #ff8133; }\n  .lodging_packing_notes h5 {\n    height: 50;\n    text-align: center;\n    font-size: 1.5rem; }\n  .lodging_packing_notes textarea, .lodging_packing_notes .packing_items {\n    width: 100%;\n    height: 320px;\n    border: none;\n    outline: none;\n    background-color: #FF7A30;\n    color: #fff;\n    font-size: 1.1rem;\n    border-radius: 20px; }\n  .lodging_packing_notes textarea {\n    border: 1px solid #FF7A30;\n    transition: 0.4s ease-out;\n    padding: 1rem; }\n  .lodging_packing_notes textarea:focus {\n    border: 2px solid #FF5C00; }\n  .lodging_packing_notes .editing_tools {\n    display: flex;\n    justify-content: space-between; }\n    .lodging_packing_notes .editing_tools i {\n      font-size: 1.5rem;\n      cursor: pointer;\n      color: #fff; }\n  .lodging_packing_notes .packing_item {\n    margin-bottom: 0.5rem;\n    display: inline-block;\n    position: relative;\n    background-color: #FF5C00;\n    border-radius: 20px;\n    padding: 0.5rem 1rem; }\n    .lodging_packing_notes .packing_item .packing_item_name {\n      margin-right: 1.5rem; }\n    .lodging_packing_notes .packing_item i {\n      position: absolute;\n      top: 10px;\n      right: 5px;\n      cursor: pointer;\n      color: #000; }\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_addTrip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/addTrip */ "./src/client/js/addTrip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sayHello", function() { return _js_addTrip__WEBPACK_IMPORTED_MODULE_0__["sayHello"]; });

/* harmony import */ var _styles_appStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/appStyle.scss */ "./src/client/styles/appStyle.scss");
/* harmony import */ var _styles_appStyle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_appStyle_scss__WEBPACK_IMPORTED_MODULE_1__);



Object(_js_addTrip__WEBPACK_IMPORTED_MODULE_0__["sayHello"])();



/***/ }),

/***/ "./src/client/js/addTrip.js":
/*!**********************************!*\
  !*** ./src/client/js/addTrip.js ***!
  \**********************************/
/*! exports provided: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sayHello", function() { return sayHello; });
// const tripTo = document.getElementById('trip_to');
// const departing = document.getElementById('departing');
const submitBtn = document.getElementById('submit');

// submitBtn.addEventListener('click', () => {
//     const tripDetails = {
//         tripTo: tripTo.value,
//         departing: departing.value
//     }


//     postTripDetails('/', tripDetails);
// });

// const postTripDetails = async function (url = '', data = {}) {
//     console.log(data);

//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//     } catch (error) {
//         console.log(error);
//     }
// }

const sayHello = () => {
    console.log('Hello my subscribers!')
}

submitBtn.addEventListener('click', () => {
    fetch('/')
        .then(res => {
            console.log(res);
            return res.json()
        })
        .then(function (data) {
            console.log(data);
        })
})



/***/ }),

/***/ "./src/client/styles/appStyle.scss":
/*!*****************************************!*\
  !*** ./src/client/styles/appStyle.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./appStyle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/appStyle.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map