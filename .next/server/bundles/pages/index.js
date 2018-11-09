module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip__ = __webpack_require__("react-tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);

var _jsxFileName = "/Users/oleskryzhanivskyi/PhpstormProjects/zvuk.kiev.ua/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                return _context.abrupt("return", {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      timing: 180,
      bpm: 120,
      vocal: 0,
      backVocal: 0,
      guitarAc: 0,
      guitar: 0,
      guitarLine: 0,
      base: 0,
      baseLine: 0,
      additional: 0,
      synth: 0,
      arrange: false,
      session: 0,
      consultation: false,
      urgency: 0,
      price: 0,
      reInstrument: 0,
      reVocal: 0,
      urgent: 0
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calculatePrice();
    }
  }, {
    key: "calculatePrice",
    value: function calculatePrice() {
      var price = 0;
      price = this.state.timing * (+this.state.vocal * 4 + +this.state.backVocal + +this.state.guitar * 3 + +this.state.guitarAc * 3.5 + +this.state.guitarLine * 5 + +this.state.base * 3 + +this.state.baseLine * 4 + +this.state.additional * 3 + +this.state.reInstrument * 4 + +this.state.reVocal * 4 + +this.state.synth * 1.75) * this.state.bpm / 120; // price = price + price * 0.33 * (this.state.arrange ? 1 : 0) + this.state.session * 300;

      price = price + 0.5 * price * this.state.urgent;
      price = price + 0.5 * price * this.state.arrange;
      this.setState({
        price: Math.round(price / 10) * 1000 / 100
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;

      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var state = {};
      state[event.currentTarget.name] = value;
      this.setState(state, function () {
        _this2.calculatePrice();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "price-sticky",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: "), this.state.price, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "\u20B4")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "// TODO // \u041B\u0438\u043D\u0438\u044F/\u043A\u043E\u043C\u0431\u043E \u2014 \u0432 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 // \u0423\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C \u2014 \u043A\u043E\u043C\u0431\u043E\u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C // \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043B\u0438\u043D\u0438\u044F // \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u0438\u043B\u0438\u043F\u0448\u0430\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0432\u0435\u0440\u0445\u0443 // \u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u2014 \u0432\u0437\u044F\u0442\u044C \u0438\u0437 \u0442\u0430\u0431\u043B\u0438\u0446\u044B", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box _inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "\u0422\u0430\u0439\u043C\u0438\u043D\u0433"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "timing",
        value: this.state.timing,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "\u0412 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "BPM"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "bpm",
        value: this.state.bpm,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "\u0412\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "vocal",
        value: this.state.vocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "\u0411\u0435\u043A-\u0432\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "backVocal",
        value: this.state.backVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F + \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarAc",
        value: this.state.guitarAc,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitar",
        value: this.state.guitar,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarLine",
        value: this.state.guitarLine,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "base",
        value: this.state.base,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-tip": "\u0411\u0430\u0441\u0438\u0441\u0442\u044B \u043D\u0435 \u043D\u0443\u0436\u043D\u044B.",
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "baseLine",
        value: this.state.baseLine,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "additional",
        value: this.state.additional,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "\u0421\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0440\u0435\u043A"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "synth",
        value: this.state.synth,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reVocal",
        value: this.state.reVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reInstrument",
        value: this.state.reInstrument,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, " "))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "\u0410\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "arrange",
        value: this.state.arrange,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "\u0421\u0440\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "urgent",
        value: this.state.urgent,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, " "))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, this.state.price, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, "\u20B4")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, " ")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, "\u0421\u0442\u0443\u0434\u0438\u044F ZVUK\u2122 \u2014 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0435 \u0432 \u0441\u0447\u0435\u0442.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tooltip":
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map