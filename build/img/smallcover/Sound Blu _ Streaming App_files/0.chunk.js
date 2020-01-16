(window["webpackJsonpsoundblu"] = window["webpackJsonpsoundblu"] || []).push([[0],{

/***/ "./src/js/component/Navigation/MainNav.jsx":
/*!*************************************************!*\
  !*** ./src/js/component/Navigation/MainNav.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Volumes_DATA_SoundBlu_Github_soundblu_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Popup */ "./src/js/component/common/Popup.jsx");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/index */ "./src/js/redux/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Volumes/DATA/SoundBlu/Github/soundblu/src/js/component/Navigation/MainNav.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Volumes_DATA_SoundBlu_Github_soundblu_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








class MainNav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.showDropDown = e => {
      if (e.target.id !== undefined && e.target.id !== null && e.target.id !== "") {
        const Pop = document.querySelectorAll(".PopUp");

        for (let i = 0; i < Pop.length; i++) {
          if (Pop[i].className.split(" ")[1] !== e.target.id) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(Pop[i]).slideUp();
          }
        }

        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".".concat(e.target.id)).slideToggle();
      }
    };

    this.menuHandler = e => {
      console.log(e);
      this.props.openMenu();
    };

    this.state = {
      Msg: [{
        img: "./img/msg.png",
        name: "Taylor Devis",
        time: "1:45 PM",
        des: "Added You As Friend"
      }, {
        img: "./img/msg.png",
        name: "Taylor Devis",
        time: "1:45 PM",
        des: "Added You As Friend"
      }, {
        img: "./img/msg.png",
        name: "Taylor Devis",
        time: "1:45 PM",
        des: "Added You As Friend"
      }],
      dropMenu: ["Comedies", "Sci Fi", "Action"],
      UserDrop: [{
        img: "settings",
        name: "Setting",
        link: "/profile-setting"
      }, {
        img: "help",
        name: "Help",
        link: ""
      }, {
        img: "exit",
        name: "Sign Out",
        link: ""
      }]
    };
  }

  render() {
    const UserDropDown = this.state.UserDrop.map((v, k) => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "msgContainer",
        key: k,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "./img/icon/".concat(v.img, ".png"),
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: v.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, v.name));
    });
    const Msg = this.state.Msg.map((v, k) => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "msgContainer",
        key: k,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "Dp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: v.img,
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, v.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, v.des)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, v.time));
    });
    const dropDown = this.state.dropMenu.map((v, k) => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "MenuContainer",
        key: k,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, v));
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "MainNav py-md-5  p-0 col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Logo col-md-2 col-sm-6 col-6 order-md-0 order-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./img/logo.png",
      className: "img-fluid ml-md-4 m-0",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "NavItem col-md-6 col-sm-3 col-3 order-md-1 order-0 justify-content-md-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./img/bars.png",
      className: "d-md-none d-block img-fluid ml-3",
      onClick: this.menuHandler,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "d-md-flex d-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      id: "drop",
      onClick: this.showDropDown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "drop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Movies", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      id: "drop",
      className: "fas fa-chevron-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      classes: "drop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, dropDown), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "tv shows"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "web serires"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "trailers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "channels"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-md-4 col-sm-3 col-3 order-2 icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "MainIcon  order-md-0 order-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Inside",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./img/icon/search.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "MainIcon order-md-1 order-0",
      id: "Bell1",
      onClick: this.showDropDown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Icons",
      id: "Bell1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Inside",
      id: "Bell1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./img/icon/bell.png",
      id: "Bell1",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      classes: "Bell1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, Msg)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "MainIcon d-md-flex d-none",
      id: "Msg1",
      onClick: this.showDropDown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Icons",
      id: "Msg1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Inside",
      id: "Msg1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./img/icon/msg.png",
      id: "Msg1",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      classes: "Msg1 mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, Msg)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "MainIcon flex-row  order-md-2 order-2",
      id: "userProfile",
      onClick: this.showDropDown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Icons",
      id: "userProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./img/dp.png",
      alt: "",
      id: "userProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "d-md-inline d-none",
      id: "userProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Radu Cristian"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fas fa-caret-down",
      id: "userProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      classes: "userProfile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, UserDropDown)))))));
  }

}

const mapStateToProps = state => {
  return _objectSpread({}, state);
};

const mapDispatchToProps = dispatch => {
  return {
    openMenu: () => {
      dispatch(_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__["Menubar"].openMenu());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(MainNav));

/***/ }),

/***/ "./src/js/component/common/Popup.jsx":
/*!*******************************************!*\
  !*** ./src/js/component/common/Popup.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/DATA/SoundBlu/Github/soundblu/src/js/component/common/Popup.jsx";


class Popup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "PopUp ".concat(this.props.classes),
      style: {
        display: "none"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-caret-up",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Popup);

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
//# sourceMappingURL=0.chunk.js.map