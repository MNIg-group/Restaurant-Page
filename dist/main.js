/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    scroll-behavior: smooth;
    transition: all ease-in-out;
}

:root {
    --main-color: yellow;
    --color-background: rgb(99, 17, 17);
    --color-header: rgb(35, 8, 61);
    --color-secondary: rgba(57, 10, 100, 0.616);
}

#header {
    background-color: var(--color-header);
    color: var(--main-color);
    height: 2rem;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
}

a {
    color: var(--main-color);
    display: inline-block;
    border-radius: 3px;
    padding: 2px 6px;
    border: 1px solid transparent;
    cursor: pointer;
}


a:hover,
a:active,
a:focus {
    border-bottom: 1px solid var(--main-color);
}

a.dont {
    border: none;
    display: unset;
    cursor: pointer;
}

a.dont:hover {
    text-decoration: underline;
}

#header>ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    font-weight: bold;
    justify-content: space-evenly;
    font-size: medium;
    width: 100%;
}

header>ul>li {
    cursor: pointer;
    margin: 2px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
    overflow-x: hidden;
    width: 90%;
}

.img {
    object-fit: cover;
    width: 100%;
    height: 300px;
    cursor: pointer;
    border-radius: 6px;
}

#menu {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 2rem);
    margin-top: 2rem;
    background-color: var(--color-background);
}

#home {
    min-height: calc(100vh - 2rem);
    margin-top: 2rem;
    background-color: var(--color-background);
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    font-style: normal;
    font-stretch: expanded;
    padding: 0 2rem;
}

#home>h1,
#home>small {
    text-align: center;
}

.welcomePage {
    border: 1px solid var(--color-header);
    background-color: var(--color-secondary);
    width: 80%;
    margin-top: 2%;
    text-align:center;
    line-height: 3ch;
    word-wrap: break-word;
    margin: 2rem 0;
    padding: 5rem 0;
    border-radius: 6px;
}

#contact {
    min-height: calc(100vh - 2rem);
    margin-top: 2rem;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    padding: 2rem;
}

.right {
    line-height: 5ch;
    align-self: center;
    margin-bottom: 2rem;
}

.left {
    align-self: center;
    width: 100%;
}

p {
    color: var(--main-color);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qBAAqB;IACrB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,mCAAmC;IACnC,8BAA8B;IAC9B,2CAA2C;AAC/C;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,MAAM;IACN,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,eAAe;AACnB;;;AAGA;;;IAGI,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;IACjB,6BAA6B;IAC7B,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,cAAc;IACd,sCAAsC;IACtC,wBAAwB;IACxB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,yCAAyC;AAC7C;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,yCAAyC;IACzC,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,wCAAwC;IACxC,UAAU;IACV,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,yCAAyC;IACzC,aAAa;IACb,8BAA8B;IAC9B,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-decoration: none;\r\n    scroll-behavior: smooth;\r\n    transition: all ease-in-out;\r\n}\r\n\r\n:root {\r\n    --main-color: yellow;\r\n    --color-background: rgb(99, 17, 17);\r\n    --color-header: rgb(35, 8, 61);\r\n    --color-secondary: rgba(57, 10, 100, 0.616);\r\n}\r\n\r\n#header {\r\n    background-color: var(--color-header);\r\n    color: var(--main-color);\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n}\r\n\r\na {\r\n    color: var(--main-color);\r\n    display: inline-block;\r\n    border-radius: 3px;\r\n    padding: 2px 6px;\r\n    border: 1px solid transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n    border-bottom: 1px solid var(--main-color);\r\n}\r\n\r\na.dont {\r\n    border: none;\r\n    display: unset;\r\n    cursor: pointer;\r\n}\r\n\r\na.dont:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n#header>ul {\r\n    display: flex;\r\n    text-decoration: none;\r\n    list-style: none;\r\n    font-weight: bold;\r\n    justify-content: space-evenly;\r\n    font-size: medium;\r\n    width: 100%;\r\n}\r\n\r\nheader>ul>li {\r\n    cursor: pointer;\r\n    margin: 2px;\r\n}\r\n\r\n.gallery {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n    gap: 1rem;\r\n    margin: 2rem 0;\r\n    transition: transform 0.5s ease-in-out;\r\n    transform: translateX(0);\r\n    overflow-x: hidden;\r\n    width: 90%;\r\n}\r\n\r\n.img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 300px;\r\n    cursor: pointer;\r\n    border-radius: 6px;\r\n}\r\n\r\n#menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: calc(100vh - 2rem);\r\n    margin-top: 2rem;\r\n    background-color: var(--color-background);\r\n}\r\n\r\n#home {\r\n    min-height: calc(100vh - 2rem);\r\n    margin-top: 2rem;\r\n    background-color: var(--color-background);\r\n    color: var(--main-color);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: expanded;\r\n    padding: 0 2rem;\r\n}\r\n\r\n#home>h1,\r\n#home>small {\r\n    text-align: center;\r\n}\r\n\r\n.welcomePage {\r\n    border: 1px solid var(--color-header);\r\n    background-color: var(--color-secondary);\r\n    width: 80%;\r\n    margin-top: 2%;\r\n    text-align:center;\r\n    line-height: 3ch;\r\n    word-wrap: break-word;\r\n    margin: 2rem 0;\r\n    padding: 5rem 0;\r\n    border-radius: 6px;\r\n}\r\n\r\n#contact {\r\n    min-height: calc(100vh - 2rem);\r\n    margin-top: 2rem;\r\n    background-color: var(--color-background);\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    flex: 1;\r\n    padding: 2rem;\r\n}\r\n\r\n.right {\r\n    line-height: 5ch;\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.left {\r\n    align-self: center;\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    color: var(--main-color);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function Contact(){
    const address = document.createElement('address');
   const frame = document.createElement('iframe');
   frame.src = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d331298.62820757733!2d30.033764383749986!3d-2.2021051847401836!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1693485672949!5m2!1sen!2srw`;
   frame.width = `100%`;
   frame.height = `600rem`;
   frame.style.border = `0`;
   frame.loading=`lazy`;
//    frame.referrerpolicy = `no-referrer-when-downgrade`;
   const leftContact = document.createElement('div');

   leftContact.appendChild(frame);
   leftContact.className = `left`;

const mail = document.createElement('a');
mail.href=`mailto:lepidus@somedomain.com`;
mail.innerText = `contact on Lepidus`;
const paragraph = document.createElement('p');
paragraph.innerText = `tel: +(250)123456789
You may also want to visit us:
                Kigali
                Rwanda`;

                const rightContact = document.createElement('div');
               mail.className = 'dont';

                rightContact.appendChild(mail);
                rightContact.appendChild(paragraph);
                rightContact.className = 'right';
                
    address.appendChild(leftContact);
    address.appendChild(rightContact);
    address.id = 'contact';
    return address;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function Home(){
    const home = document.createElement('div');
    home.id = 'home';
    const mainpage = document.createElement('div');
    mainpage.className = 'welcomePage';
    const header = document.createElement('h1');
    header.innerText = `🌟Welcome to Lepidus!`;

    mainpage.innerText=` Prepare to embark on a culinary journey 
    that marries tradition with innovation. At Lepidus, we believe in crafting a harmonious 
    blend of flavors that awaken your senses and leave a lasting impression. From our mouthwatering 
    breakfast selections to our enticing lunch creations, every dish is thoughtfully curated
    to showcase the finest ingredients and culinary expertise. Our commitment to impeccable service 
    and a welcoming ambiance ensures that every visit to Lepidus is a memorable experience.`;
    const small = document.createElement('small');
    small.innerText = `
    Join us and savor the artistry of food in a setting where modernity meets timeless taste.`

    
    home.appendChild(header);
    home.appendChild(mainpage);
    home.appendChild(small);
    return home;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_baked_chicken_wings_asian_style_2829_10158_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/baked-chicken-wings-asian-style_2829-10158.png */ "./src/img/baked-chicken-wings-asian-style_2829-10158.png");
/* harmony import */ var _img_french_fries_74190_2552_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/french-fries_74190-2552.png */ "./src/img/french-fries_74190-2552.png");
/* harmony import */ var _img_fried_fish_carp_fresh_vegetable_salad_wooden_table_2829_19923_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.png */ "./src/img/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.png");
/* harmony import */ var _img_fried_rice_with_sausage_1339_8074_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/fried-rice-with-sausage_1339-8074.png */ "./src/img/fried-rice-with-sausage_1339-8074.png");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/images.png */ "./src/img/images.png");
/* harmony import */ var _img_images1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/images1.png */ "./src/img/images1.png");
/* harmony import */ var _img_images3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/images3.png */ "./src/img/images3.png");
/* harmony import */ var _img_istockphoto_499274479_612x612_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/istockphoto-499274479-612x612.png */ "./src/img/istockphoto-499274479-612x612.png");
/* harmony import */ var _img_istockphoto_516359240_612x612_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/istockphoto-516359240-612x612.png */ "./src/img/istockphoto-516359240-612x612.png");
/* harmony import */ var _img_istockphoto_667667900_612x612_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/istockphoto-667667900-612x612.png */ "./src/img/istockphoto-667667900-612x612.png");
/* harmony import */ var _img_istockphoto_696063726_612x612_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/istockphoto-696063726-612x612.png */ "./src/img/istockphoto-696063726-612x612.png");
/* harmony import */ var _img_istockphoto_882186476_612x612_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/istockphoto-882186476-612x612.png */ "./src/img/istockphoto-882186476-612x612.png");
/* harmony import */ var _img_istockphoto_1174632449_612x612_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/istockphoto-1174632449-612x612.png */ "./src/img/istockphoto-1174632449-612x612.png");
/* harmony import */ var _img_istockphoto_1194610986_612x612_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/istockphoto-1194610986-612x612.png */ "./src/img/istockphoto-1194610986-612x612.png");
/* harmony import */ var _img_istockphoto_1214687147_612x612_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/istockphoto-1214687147-612x612.png */ "./src/img/istockphoto-1214687147-612x612.png");
/* harmony import */ var _img_istockphoto_1464175244_612x612_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/istockphoto-1464175244-612x612.png */ "./src/img/istockphoto-1464175244-612x612.png");
/* harmony import */ var _img_istockphoto_1514287210_612x612_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/istockphoto-1514287210-612x612.png */ "./src/img/istockphoto-1514287210-612x612.png");
/* harmony import */ var _img_istockphoto_1514288263_612x612_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/istockphoto-1514288263-612x612.png */ "./src/img/istockphoto-1514288263-612x612.png");




















function Menu(){
    const imgArr =[_img_baked_chicken_wings_asian_style_2829_10158_png__WEBPACK_IMPORTED_MODULE_1__,_img_french_fries_74190_2552_png__WEBPACK_IMPORTED_MODULE_2__,_img_fried_fish_carp_fresh_vegetable_salad_wooden_table_2829_19923_png__WEBPACK_IMPORTED_MODULE_3__,_img_fried_rice_with_sausage_1339_8074_png__WEBPACK_IMPORTED_MODULE_4__,_img_images_png__WEBPACK_IMPORTED_MODULE_5__,_img_images1_png__WEBPACK_IMPORTED_MODULE_6__,_img_images3_png__WEBPACK_IMPORTED_MODULE_7__,_img_istockphoto_499274479_612x612_png__WEBPACK_IMPORTED_MODULE_8__,_img_istockphoto_516359240_612x612_png__WEBPACK_IMPORTED_MODULE_9__,_img_istockphoto_667667900_612x612_png__WEBPACK_IMPORTED_MODULE_10__,_img_istockphoto_696063726_612x612_png__WEBPACK_IMPORTED_MODULE_11__,_img_istockphoto_882186476_612x612_png__WEBPACK_IMPORTED_MODULE_12__,_img_istockphoto_1174632449_612x612_png__WEBPACK_IMPORTED_MODULE_13__,_img_istockphoto_1194610986_612x612_png__WEBPACK_IMPORTED_MODULE_14__,_img_istockphoto_1214687147_612x612_png__WEBPACK_IMPORTED_MODULE_15__,_img_istockphoto_1464175244_612x612_png__WEBPACK_IMPORTED_MODULE_16__,_img_istockphoto_1514287210_612x612_png__WEBPACK_IMPORTED_MODULE_17__,_img_istockphoto_1514288263_612x612_png__WEBPACK_IMPORTED_MODULE_18__];
    console.log(imgArr[0]);// first image?
    let gallery = document.createElement('div');
    gallery.classList.add('gallery');
    for(let i = 0; i< imgArr.length; i++){
        let img = document.createElement('img');
        img.src = imgArr[i];
        img.className = 'img';

        gallery.appendChild(img);
    }

    const menu = document.createElement('div');
    menu.id = 'menu';

    menu.appendChild(gallery);

    return menu;
}

/***/ }),

/***/ "./src/img/baked-chicken-wings-asian-style_2829-10158.png":
/*!****************************************************************!*\
  !*** ./src/img/baked-chicken-wings-asian-style_2829-10158.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "434f24cfbc959a21efca.png";

/***/ }),

/***/ "./src/img/french-fries_74190-2552.png":
/*!*********************************************!*\
  !*** ./src/img/french-fries_74190-2552.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4872b5b44a40b3d4dd2a.png";

/***/ }),

/***/ "./src/img/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.png":
/*!***********************************************************************************!*\
  !*** ./src/img/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.png ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "064d803aef3ff27f712e.png";

/***/ }),

/***/ "./src/img/fried-rice-with-sausage_1339-8074.png":
/*!*******************************************************!*\
  !*** ./src/img/fried-rice-with-sausage_1339-8074.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ba1649b0c874b211b40.png";

/***/ }),

/***/ "./src/img/images.png":
/*!****************************!*\
  !*** ./src/img/images.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d9372524921c5e03e70.png";

/***/ }),

/***/ "./src/img/images1.png":
/*!*****************************!*\
  !*** ./src/img/images1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27d9dc216d4c2b887e2c.png";

/***/ }),

/***/ "./src/img/images3.png":
/*!*****************************!*\
  !*** ./src/img/images3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08e976c33678a5bf5417.png";

/***/ }),

/***/ "./src/img/istockphoto-1174632449-612x612.png":
/*!****************************************************!*\
  !*** ./src/img/istockphoto-1174632449-612x612.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "005bc2b435395614a874.png";

/***/ }),

/***/ "./src/img/istockphoto-1194610986-612x612.png":
/*!****************************************************!*\
  !*** ./src/img/istockphoto-1194610986-612x612.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea09d9036e203e441786.png";

/***/ }),

/***/ "./src/img/istockphoto-1214687147-612x612.png":
/*!****************************************************!*\
  !*** ./src/img/istockphoto-1214687147-612x612.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "010c2e1d9bc203211d45.png";

/***/ }),

/***/ "./src/img/istockphoto-1464175244-612x612.png":
/*!****************************************************!*\
  !*** ./src/img/istockphoto-1464175244-612x612.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab7dc9ece7cbd8ce498f.png";

/***/ }),

/***/ "./src/img/istockphoto-1514287210-612x612.png":
/*!****************************************************!*\
  !*** ./src/img/istockphoto-1514287210-612x612.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a125d403430b44dcfecc.png";

/***/ }),

/***/ "./src/img/istockphoto-1514288263-612x612.png":
/*!****************************************************!*\
  !*** ./src/img/istockphoto-1514288263-612x612.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "340cd822dfe9dccb0880.png";

/***/ }),

/***/ "./src/img/istockphoto-499274479-612x612.png":
/*!***************************************************!*\
  !*** ./src/img/istockphoto-499274479-612x612.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d7168873caba85af872.png";

/***/ }),

/***/ "./src/img/istockphoto-516359240-612x612.png":
/*!***************************************************!*\
  !*** ./src/img/istockphoto-516359240-612x612.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37e9cea9b04760ef144c.png";

/***/ }),

/***/ "./src/img/istockphoto-667667900-612x612.png":
/*!***************************************************!*\
  !*** ./src/img/istockphoto-667667900-612x612.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b500b5b843ca93a3328.png";

/***/ }),

/***/ "./src/img/istockphoto-696063726-612x612.png":
/*!***************************************************!*\
  !*** ./src/img/istockphoto-696063726-612x612.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4caa13b351420764c93.png";

/***/ }),

/***/ "./src/img/istockphoto-882186476-612x612.png":
/*!***************************************************!*\
  !*** ./src/img/istockphoto-882186476-612x612.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81ac7816b9e6ca7b2647.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");





if(localStorage.getItem('mainPage')== null){
    localStorage.setItem('mainPage', 'homePage');
}

function component ()
{
    const root = document.createElement('div');
// ------------------------------------ Main ...............................
function Main(){
    const main = document.createElement('main');

    if(localStorage.getItem('mainPage') == `contactPage`){
        main.textContent = ` `;
        main.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }
    else if(localStorage.getItem('mainPage') == `menuPage`){
        main.textContent = ` `;
        main.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    }
    else if(localStorage.getItem('mainPage') == `homePage`|| mainPage == ''){
        main.textContent = ` `;
        main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    }

    return main;
}
// ==========================================================================================
    
function Header ()
{
    const header = document.createElement('header');

    // --------------------------- Header ..................................
    const header_links = document.createElement('ul');

    const home = document.createElement('a');
    home.innerText = `Home`;
    home.addEventListener('click',()=>{
        localStorage.setItem('mainPage', 'homePage');
        location.reload(); //reload the page
    })


    const menu = document.createElement('a');
    menu.innerText = `Menu`;
    menu.addEventListener('click',()=>{
        localStorage.setItem('mainPage', 'menuPage');
        location.reload(); //reload the page
    })


    const contact = document.createElement('a');
    contact.innerText = `Contact`;
    contact.addEventListener('click',()=>{
        localStorage.setItem('mainPage', 'contactPage');
        location.reload(); //reload the page
    })

    header_links.appendChild(home);
    header_links.appendChild(menu);
    header_links.appendChild(contact);

    header.appendChild(header_links);
    header.id = 'header';



    return header;
}
// ================================================================================



    root.appendChild(Header());
    root.appendChild(Main());
    
    return root;
}

document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87QUFDaEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIC0tbWFpbi1jb2xvcjogeWVsbG93O1xyXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiByZ2IoOTksIDE3LCAxNyk7XHJcbiAgICAtLWNvbG9yLWhlYWRlcjogcmdiKDM1LCA4LCA2MSk7XHJcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogcmdiYSg1NywgMTAsIDEwMCwgMC42MTYpO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5hOmhvdmVyLFxyXG5hOmFjdGl2ZSxcclxuYTpmb2N1cyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbmEuZG9udCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYS5kb250OmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jaGVhZGVyPnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmhlYWRlcj51bD5saSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4jbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4jaG9tZSB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG5cclxuI2hvbWU+aDEsXHJcbiNob21lPnNtYWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWVQYWdlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWhlYWRlcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogM2NoO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiA1Y2g7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COzs7QUFHQTs7O0lBR0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztJQUNULGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogcmdiKDk5LCAxNywgMTcpO1xcclxcbiAgICAtLWNvbG9yLWhlYWRlcjogcmdiKDM1LCA4LCA2MSk7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiByZ2JhKDU3LCAxMCwgMTAwLCAwLjYxNik7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDZweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYTpob3ZlcixcXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5hLmRvbnQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEuZG9udDpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyPnVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyPnVsPmxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbiNob21lIHtcXHJcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcXHJcXG4gICAgcGFkZGluZzogMCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZT5oMSxcXHJcXG4jaG9tZT5zbWFsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWVQYWdlIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItaGVhZGVyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogM2NoO1xcclxcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIG1hcmdpbjogMnJlbSAwO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3Qge1xcclxcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1Y2g7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpe1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FkZHJlc3MnKTtcclxuICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgZnJhbWUuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xMCExbTghMW0zITFkMzMxMjk4LjYyODIwNzU3NzMzITJkMzAuMDMzNzY0MzgzNzQ5OTg2ITNkLTIuMjAyMTA1MTg0NzQwMTgzNiEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSE1ZTEhM20yITFzZW4hMnNydyE0djE2OTM0ODU2NzI5NDkhNW0yITFzZW4hMnNyd2A7XHJcbiAgIGZyYW1lLndpZHRoID0gYDEwMCVgO1xyXG4gICBmcmFtZS5oZWlnaHQgPSBgNjAwcmVtYDtcclxuICAgZnJhbWUuc3R5bGUuYm9yZGVyID0gYDBgO1xyXG4gICBmcmFtZS5sb2FkaW5nPWBsYXp5YDtcclxuLy8gICAgZnJhbWUucmVmZXJyZXJwb2xpY3kgPSBgbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVgO1xyXG4gICBjb25zdCBsZWZ0Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgbGVmdENvbnRhY3QuYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG4gICBsZWZ0Q29udGFjdC5jbGFzc05hbWUgPSBgbGVmdGA7XHJcblxyXG5jb25zdCBtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5tYWlsLmhyZWY9YG1haWx0bzpsZXBpZHVzQHNvbWVkb21haW4uY29tYDtcclxubWFpbC5pbm5lclRleHQgPSBgY29udGFjdCBvbiBMZXBpZHVzYDtcclxuY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5wYXJhZ3JhcGguaW5uZXJUZXh0ID0gYHRlbDogKygyNTApMTIzNDU2Nzg5XHJcbllvdSBtYXkgYWxzbyB3YW50IHRvIHZpc2l0IHVzOlxyXG4gICAgICAgICAgICAgICAgS2lnYWxpXHJcbiAgICAgICAgICAgICAgICBSd2FuZGFgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICBtYWlsLmNsYXNzTmFtZSA9ICdkb250JztcclxuXHJcbiAgICAgICAgICAgICAgICByaWdodENvbnRhY3QuYXBwZW5kQ2hpbGQobWFpbCk7XHJcbiAgICAgICAgICAgICAgICByaWdodENvbnRhY3QuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0Q29udGFjdC5jbGFzc05hbWUgPSAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGxlZnRDb250YWN0KTtcclxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQocmlnaHRDb250YWN0KTtcclxuICAgIGFkZHJlc3MuaWQgPSAnY29udGFjdCc7XHJcbiAgICByZXR1cm4gYWRkcmVzcztcclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWUuaWQgPSAnaG9tZSc7XHJcbiAgICBjb25zdCBtYWlucGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbnBhZ2UuY2xhc3NOYW1lID0gJ3dlbGNvbWVQYWdlJztcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gYPCfjJ9XZWxjb21lIHRvIExlcGlkdXMhYDtcclxuXHJcbiAgICBtYWlucGFnZS5pbm5lclRleHQ9YCBQcmVwYXJlIHRvIGVtYmFyayBvbiBhIGN1bGluYXJ5IGpvdXJuZXkgXHJcbiAgICB0aGF0IG1hcnJpZXMgdHJhZGl0aW9uIHdpdGggaW5ub3ZhdGlvbi4gQXQgTGVwaWR1cywgd2UgYmVsaWV2ZSBpbiBjcmFmdGluZyBhIGhhcm1vbmlvdXMgXHJcbiAgICBibGVuZCBvZiBmbGF2b3JzIHRoYXQgYXdha2VuIHlvdXIgc2Vuc2VzIGFuZCBsZWF2ZSBhIGxhc3RpbmcgaW1wcmVzc2lvbi4gRnJvbSBvdXIgbW91dGh3YXRlcmluZyBcclxuICAgIGJyZWFrZmFzdCBzZWxlY3Rpb25zIHRvIG91ciBlbnRpY2luZyBsdW5jaCBjcmVhdGlvbnMsIGV2ZXJ5IGRpc2ggaXMgdGhvdWdodGZ1bGx5IGN1cmF0ZWRcclxuICAgIHRvIHNob3djYXNlIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgYW5kIGN1bGluYXJ5IGV4cGVydGlzZS4gT3VyIGNvbW1pdG1lbnQgdG8gaW1wZWNjYWJsZSBzZXJ2aWNlIFxyXG4gICAgYW5kIGEgd2VsY29taW5nIGFtYmlhbmNlIGVuc3VyZXMgdGhhdCBldmVyeSB2aXNpdCB0byBMZXBpZHVzIGlzIGEgbWVtb3JhYmxlIGV4cGVyaWVuY2UuYDtcclxuICAgIGNvbnN0IHNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcclxuICAgIHNtYWxsLmlubmVyVGV4dCA9IGBcclxuICAgIEpvaW4gdXMgYW5kIHNhdm9yIHRoZSBhcnRpc3RyeSBvZiBmb29kIGluIGEgc2V0dGluZyB3aGVyZSBtb2Rlcm5pdHkgbWVldHMgdGltZWxlc3MgdGFzdGUuYFxyXG5cclxuICAgIFxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChtYWlucGFnZSk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKHNtYWxsKTtcclxuICAgIHJldHVybiBob21lO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZTEgZnJvbSAnLi9pbWcvYmFrZWQtY2hpY2tlbi13aW5ncy1hc2lhbi1zdHlsZV8yODI5LTEwMTU4LnBuZydcclxuaW1wb3J0IEltYWdlMiBmcm9tICcuL2ltZy9mcmVuY2gtZnJpZXNfNzQxOTAtMjU1Mi5wbmcnXHJcbmltcG9ydCBJbWFnZTMgZnJvbSAnLi9pbWcvZnJpZWQtZmlzaC1jYXJwLWZyZXNoLXZlZ2V0YWJsZS1zYWxhZC13b29kZW4tdGFibGVfMjgyOS0xOTkyMy5wbmcnXHJcbmltcG9ydCBJbWFnZTQgZnJvbSAnLi9pbWcvZnJpZWQtcmljZS13aXRoLXNhdXNhZ2VfMTMzOS04MDc0LnBuZydcclxuaW1wb3J0IEltYWdlNSBmcm9tICcuL2ltZy9pbWFnZXMucG5nJ1xyXG5pbXBvcnQgSW1hZ2U2IGZyb20gJy4vaW1nL2ltYWdlczEucG5nJ1xyXG5pbXBvcnQgSW1hZ2U3IGZyb20gJy4vaW1nL2ltYWdlczMucG5nJ1xyXG5pbXBvcnQgSW1hZ2U4IGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTQ5OTI3NDQ3OS02MTJ4NjEyLnBuZydcclxuaW1wb3J0IEltYWdlOSBmcm9tICcuL2ltZy9pc3RvY2twaG90by01MTYzNTkyNDAtNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTEwIGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTY2NzY2NzkwMC02MTJ4NjEyLnBuZydcclxuaW1wb3J0IEltYWdlMTEgZnJvbSAnLi9pbWcvaXN0b2NrcGhvdG8tNjk2MDYzNzI2LTYxMng2MTIucG5nJ1xyXG5pbXBvcnQgSW1hZ2UxMiBmcm9tICcuL2ltZy9pc3RvY2twaG90by04ODIxODY0NzYtNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTEzIGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTExNzQ2MzI0NDktNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTE0IGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTExOTQ2MTA5ODYtNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTE1IGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTEyMTQ2ODcxNDctNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTE2IGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTE0NjQxNzUyNDQtNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTE3IGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTE1MTQyODcyMTAtNjEyeDYxMi5wbmcnXHJcbmltcG9ydCBJbWFnZTE4IGZyb20gJy4vaW1nL2lzdG9ja3Bob3RvLTE1MTQyODgyNjMtNjEyeDYxMi5wbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCl7XHJcbiAgICBjb25zdCBpbWdBcnIgPVtJbWFnZTEsSW1hZ2UyLEltYWdlMyxJbWFnZTQsSW1hZ2U1LEltYWdlNixJbWFnZTcsSW1hZ2U4LEltYWdlOSxJbWFnZTEwLEltYWdlMTEsSW1hZ2UxMixJbWFnZTEzLEltYWdlMTQsSW1hZ2UxNSxJbWFnZTE2LEltYWdlMTcsSW1hZ2UxOF07XHJcbiAgICBjb25zb2xlLmxvZyhpbWdBcnJbMF0pOy8vIGZpcnN0IGltYWdlP1xyXG4gICAgbGV0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbGxlcnkuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgaW1nQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IGltZ0FycltpXTtcclxuICAgICAgICBpbWcuY2xhc3NOYW1lID0gJ2ltZyc7XHJcblxyXG4gICAgICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmlkID0gJ21lbnUnO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZ2FsbGVyeSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUuanMnO1xyXG5cclxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21haW5QYWdlJyk9PSBudWxsKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYWluUGFnZScsICdob21lUGFnZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQgKClcclxue1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWFpbiAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXHJcbmZ1bmN0aW9uIE1haW4oKXtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21haW5QYWdlJykgPT0gYGNvbnRhY3RQYWdlYCl7XHJcbiAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9IGAgYDtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKENvbnRhY3QoKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYWluUGFnZScpID09IGBtZW51UGFnZWApe1xyXG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSBgIGA7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChNZW51KCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFpblBhZ2UnKSA9PSBgaG9tZVBhZ2VgfHwgbWFpblBhZ2UgPT0gJycpe1xyXG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSBgIGA7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChIb21lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYWluO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbmZ1bmN0aW9uIEhlYWRlciAoKVxyXG57XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVhZGVyIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuICAgIGNvbnN0IGhlYWRlcl9saW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGhvbWUuaW5uZXJUZXh0ID0gYEhvbWVgO1xyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWFpblBhZ2UnLCAnaG9tZVBhZ2UnKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy9yZWxvYWQgdGhlIHBhZ2VcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51LmlubmVyVGV4dCA9IGBNZW51YDtcclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21haW5QYWdlJywgJ21lbnVQYWdlJyk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vcmVsb2FkIHRoZSBwYWdlXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29udGFjdC5pbm5lclRleHQgPSBgQ29udGFjdGA7XHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYWluUGFnZScsICdjb250YWN0UGFnZScpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvL3JlbG9hZCB0aGUgcGFnZVxyXG4gICAgfSlcclxuXHJcbiAgICBoZWFkZXJfbGlua3MuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBoZWFkZXJfbGlua3MuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgICBoZWFkZXJfbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9saW5rcyk7XHJcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuXHJcblxyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChNYWluKCkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcm9vdDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==