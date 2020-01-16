(window["webpackJsonpsoundblu"] = window["webpackJsonpsoundblu"] || []).push([[14],{

/***/ "./src/js/component/Navigation/SideMenu.jsx":
/*!**************************************************!*\
  !*** ./src/js/component/Navigation/SideMenu.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Volumes_DATA_SoundBlu_Github_soundblu_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/index */ "./src/js/redux/actions/index.js");
/* harmony import */ var _redux_constant___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/constant/ */ "./src/js/redux/constant/index.js");

var _jsxFileName = "/Volumes/DATA/SoundBlu/Github/soundblu/src/js/component/Navigation/SideMenu.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Volumes_DATA_SoundBlu_Github_soundblu_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function SideMenu(props) {
  const onCloseHande = e => {
    e.bubbles = true;
    props.onClose();
  };

  const NavItems = _redux_constant___WEBPACK_IMPORTED_MODULE_5__["MenuItems"].map((v, k) => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "./img/icon/".concat(v.img, ".png"),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, v.name));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["slide"], {
    id: "sidebar",
    disableCloseOnEsc: true,
    isOpen: props.Menu.openMenu,
    disableOverlayClick: true,
    width: "300px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12 closed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    onClick: onCloseHande,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12 Dp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ProfileImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "./img/Dp.png",
    className: "img-fluid",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Radu Cristian"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "View Profile & Settings")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12 MenuItems",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, NavItems)))));
}

const mapStateToProps = state => {
  return _objectSpread({}, state);
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => {
      dispatch(_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__["Menubar"].closeMenu());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SideMenu));

/***/ }),

/***/ "./src/js/redux/actions/Menu.js":
/*!**************************************!*\
  !*** ./src/js/redux/actions/Menu.js ***!
  \**************************************/
/*! exports provided: openMenu, closeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenu", function() { return openMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony import */ var _constant_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/Actions */ "./src/js/redux/constant/Actions.js");

const openMenu = payloads => {
  return dispatch => {
    dispatch({
      type: _constant_Actions__WEBPACK_IMPORTED_MODULE_0__["OPENMENU"],
      payload: true
    });
  };
};
const closeMenu = payloads => {
  return dispatch => {
    dispatch({
      type: _constant_Actions__WEBPACK_IMPORTED_MODULE_0__["CLOSEDMENU"],
      payload: false
    });
  };
};

/***/ }),

/***/ "./src/js/redux/actions/Search.js":
/*!****************************************!*\
  !*** ./src/js/redux/actions/Search.js ***!
  \****************************************/
/*! exports provided: onMovieSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMovieSearch", function() { return onMovieSearch; });
/* harmony import */ var _constant_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/Actions */ "./src/js/redux/constant/Actions.js");

const onMovieSearch = e => {
  return dispatch => {
    dispatch({
      type: _constant_Actions__WEBPACK_IMPORTED_MODULE_0__["MOVIESEARCH"],
      payload: e
    });
  };
};

/***/ }),

/***/ "./src/js/redux/actions/index.js":
/*!***************************************!*\
  !*** ./src/js/redux/actions/index.js ***!
  \***************************************/
/*! exports provided: Search, Menubar, slideChange, reviewHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return Menubar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideChange", function() { return slideChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewHandle", function() { return reviewHandle; });
/* harmony import */ var _constant_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/Actions */ "./src/js/redux/constant/Actions.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./src/js/redux/actions/Menu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "./src/js/redux/actions/Search.js");



const Search = _Search__WEBPACK_IMPORTED_MODULE_2__;
const Menubar = _Menu__WEBPACK_IMPORTED_MODULE_1__;
const slideChange = e => {
  return dispatch => {
    dispatch({
      type: _constant_Actions__WEBPACK_IMPORTED_MODULE_0__["SLIDECHANGE"],
      payload: e
    });
  };
};
const reviewHandle = e => {
  return dispatch => {
    dispatch({
      type: _constant_Actions__WEBPACK_IMPORTED_MODULE_0__["REVIEWEXPAND"],
      payload: e
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=14.chunk.js.map