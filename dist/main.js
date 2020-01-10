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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\nclass Element{\r\n  constructor(config){\r\n    this.config = this.getConfig(config)\r\n    this.parent = this.config.parent;\r\n    this.build()\r\n    this.bind()\r\n  }\r\n\r\n  getConfig(config){\r\n    return Object.assign({\r\n      // here ur default config\r\n      type: 'div',\r\n      attributes: { /* arbitrary js attributes */ },\r\n      events: { /* arbitrary js events */ },\r\n      styless: { /* arbitrary js styles */ }\r\n    }, config)\r\n  }\r\n\r\n  remove(){\r\n    this.element.remove()\r\n  }\r\n  clear(){\r\n    this.element.innerHTML = '';\r\n  }\r\n\r\n  build(){\r\n    this.buildHTML()\r\n    this.initAttributes()\r\n    this.initStyles()\r\n  }\r\n  buildHTML(){\r\n    if(!this.parent) this.parent = document.body\r\n    else if(this.parent.element) this.parent = this.parent.element\r\n\r\n    this.element = document.createElement(this.config.type)\r\n    if(this.config.width) this.element.width = this.config.width\r\n    if(this.config.height) this.element.height = this.config.height\r\n    this.parent.appendChild(this.element)\r\n  }\r\n\r\n  bind(){\r\n    if(!this.config.events) return 'no event';\r\n    for(let event in this.config.events){\r\n      this.bindEvent(event)\r\n    }\r\n  }\r\n  bindEvent(event){\r\n    // extend - and use\r\n    if(!event) return false\r\n    this.element.addEventListener(event, ()=>{this.config.events[event]()})\r\n  }\r\n\r\n  setStyles(styles){\r\n    for(let attribute in styles){\r\n      this.element.style[attribute] = styles[attribute]\r\n    }\r\n  }\r\n  initStyles(){\r\n    this.setStyles(this.config.style)\r\n  }\r\n  setAttributes(attributes){\r\n    for(let attribute in attributes){\r\n      this.element[attribute] = attributes[attribute];\r\n      this.element.setAttribute(attribute, attributes[attribute])\r\n    }\r\n  }\r\n  initAttributes(){\r\n    this.setAttributes(this.config.attributes)\r\n  }\r\n\r\n  insert(element, index=0){\r\n    if(!this.element.children || !this.element.children[index]) {\r\n      this.append(element)\r\n      return false\r\n    }\r\n    let referenceNode = this.element.children[index]\r\n    if(element.element) element = element.element\r\n    this.element.insertBefore(element, this.element.children[index])\r\n  }\r\n  append(element){\r\n    if(element.element) element = element.element\r\n    this.element.appendChild(element)\r\n  }\r\n  prepend(element){\r\n    this.insert(element)\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/element.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie.js */ \"./src/pie.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n  let pie = new _pie_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    width: '100px',\r\n    height: '100px'\r\n  })\r\n  pie.addSlice(10)\r\n  window.slice = pie.addSlice(25)\r\n  pie.addSlice(10)\r\n\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pie.js":
/*!********************!*\
  !*** ./src/pie.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pie; });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ \"./src/slice.js\");\n\r\n\r\n\r\nclass Pie {\r\n  constructor(config){\r\n    config = Object.assign({\r\n        backgroundColor: '#eee',\r\n        display: 'block',\r\n        height: '100%',\r\n        width: '100%',\r\n        margin: 0,\r\n        padding: 0,\r\n        scale: 100, // control the scale (slice value/scale -> slice size)\r\n        showValue: true,\r\n        color: 'white',\r\n        font: 'arial',\r\n        transition: 'all 1s ease-out',\r\n    }, config)\r\n    for(let key in config) this[key] = config[key]\r\n\r\n    this.init()\r\n    this.build()\r\n    console.log(this)\r\n  }\r\n\r\n  init(){\r\n    this.slices = []\r\n    if(this.pie) this.pie.clear()\r\n\r\n  }\r\n  build(){\r\n    this.pie = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      type: 'figure',\r\n      style: {\r\n        borderRadius: '50%',\r\n        position: 'relative',\r\n        overflow: 'hidden',\r\n        background: this.backgroundColor,\r\n        display: this.display,\r\n        height: this.height,\r\n        width: this.width,\r\n        margin: this.margin,\r\n        padding: this.padding,\r\n        color: this.color,\r\n        fontFamily: this.font,\r\n        transition: this.transition\r\n      }\r\n    })\r\n  }\r\n\r\n  addSlice(value=0, color=false){\r\n    let offset = 0\r\n    this.slices.map(slice=> offset += slice.value)\r\n    let slice = new _slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n      parent: this.pie,\r\n      value: value,\r\n      offset: offset,\r\n      scale: this.scale,\r\n      backgroundColor: (color) ? color : this.getColor(this.slices.length),\r\n      pie: this,\r\n      showValue: this.showValue\r\n    })\r\n    this.slices.push(slice)\r\n    return slice\r\n  }\r\n\r\n  refresh(){\r\n    let offset = 0\r\n    this.slices.map(slice => {\r\n      slice.offset = offset\r\n      offset += slice.value\r\n      slice.refresh()\r\n    })\r\n  }\r\n\r\n  getColor(index){\r\n    return `hsl(${index * 126515 % 255}, 75%, 50%)`\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/pie.js?");

/***/ }),

/***/ "./src/slice.js":
/*!**********************!*\
  !*** ./src/slice.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slice; });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\r\n\r\nclass Slice {\r\n  constructor(config){\r\n    config = Object.assign({\r\n      parent: null,\r\n      backgroundColor: 'red',\r\n      value: 0,\r\n      offset: 0,\r\n      transition: 'all 1s ease-out',\r\n      scale: null,\r\n      showValue: null\r\n    }, config)\r\n    for(let key in config) this[key] = config[key]\r\n\r\n    if(!this.parent) return delete this;\r\n\r\n    this.build()\r\n    this.refresh()\r\n  }\r\n\r\n  build(){\r\n    this.segment = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      parent: this.parent,\r\n      style: {\r\n        position: 'absolute',\r\n        overflow: 'hidden',\r\n        height: '100%',\r\n        width: '100%',\r\n        transform: 'translate(0, -50%) rotate(90deg) rotate(0deg)',\r\n        transformOrigin: '50% 100%',\r\n        width: '100%',\r\n        transition: this.transition\r\n      }\r\n    })\r\n\r\n    this.inner = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      parent: this.segment,\r\n      style: {\r\n        position: 'absolute',\r\n        background: this.backgroundColor,\r\n        height: '100%',\r\n        width: '100%',\r\n        transform: 'translate(0, 100%) rotate(45deg)',\r\n        transformOrigin: '50% 0',\r\n        transition: this.transition\r\n      }\r\n    })\r\n    this.over50 = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      parent: this.segment,\r\n      style: {\r\n        opacity: 0,\r\n        position: 'absolute',\r\n        background: this.backgroundColor,\r\n        height: '100%',\r\n        width: '100%',\r\n        transition: this.transition\r\n      }\r\n    })\r\n\r\n    this.text = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      parent: this.parent,\r\n      style: {\r\n        position: 'absolute',\r\n        zIndex: 100\r\n      },\r\n      attributes: {\r\n        innerHTML: this.value\r\n      }\r\n    })\r\n\r\n\r\n  }\r\n\r\n  refresh(){\r\n    if(this.value / this.scale > 0.5) {\r\n      this.over50.setStyles({ opacity: 1 })\r\n      this.segment.setStyles({\r\n        overflow: 'visible',\r\n        transform : `translate(0, -50%) rotate(90deg) rotate(${Math.floor(this.offset / this.scale * 360)}deg)`,\r\n        clipPath: `polygon(-100% -100%, 200% -100%, 200% 200%, -100% 200%)`\r\n      })\r\n    }\r\n    else {\r\n      this.segment.setStyles({\r\n        overflow: 'hidden',\r\n        transform : `translate(0, -50%) rotate(90deg) rotate(${Math.floor(this.offset / this.scale * 360)}deg)`\r\n      })\r\n      this.over50.setStyles({ opacity: 0 })\r\n    }\r\n\r\n    this.inner.setStyles({\r\n      transform : `translate(0, 100%) rotate(${Math.floor(this.value / this.scale * 360)}deg)`\r\n    })\r\n\r\n    if(this.showValue){\r\n      this.text.setStyles({\r\n        left: `${ 50 + 3 * 50 / 4 * Math.cos( (this.offset + this.value / 2) / this.scale * 2 * Math.PI - 3 * Math.PI / 5 )}%`,\r\n        top: `${ 50 + 3 * 50 / 4 * Math.sin( (this.offset + this.value / 2) / this.scale * 2 * Math.PI - 3 * Math.PI / 5 )}%`\r\n      })\r\n    }\r\n\r\n  }\r\n\r\n  setValue(value=0){\r\n    this.value = value\r\n    this.pie.refresh()\r\n  }\r\n\r\n  getSegmentCenterCoordinates(){\r\n    let seg = this.getCenter(this.segment.element.getBoundingClientRect())\r\n    let inn = this.getCenter(this.inner.element.getBoundingClientRect())\r\n    let pos = {\r\n      x: (seg.x + inn.x) / 2,\r\n      y: (seg.y + inn.y) / 2\r\n    }\r\n    return pos\r\n  }\r\n  getCenter(pos){\r\n    return {x: pos.x + pos.width / 2, y: pos.y + pos.height / 2}\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/slice.js?");

/***/ })

/******/ });