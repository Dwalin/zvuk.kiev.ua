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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);


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
        className: "zv-layout"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-logo"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "price-sticky"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: "), this.state.price, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u20B4")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box _inner"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0422\u0430\u0439\u043C\u0438\u043D\u0433"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "timing",
        value: this.state.timing,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u0412 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "BPM"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "bpm",
        value: this.state.bpm,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0412\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "vocal",
        value: this.state.vocal,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0411\u0435\u043A-\u0432\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "backVocal",
        value: this.state.backVocal,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-tip": "\u0417\u0430\u043F\u0438\u0441\u044C \u0432 \u043B\u0438\u043D\u0438\u044E \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0431\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0431\u043E\u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044F",
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430 (\u043B\u0438\u043D\u0438\u044F + \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarAc",
        value: this.state.guitarAc,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-tip": "\u0417\u0430\u043F\u0438\u0441\u044C \u0432 \u043B\u0438\u043D\u0438\u044E \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0431\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0431\u043E\u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044F",
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 (\u043B\u0438\u043D\u0438\u044F)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarLine",
        value: this.state.guitarLine,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-tip": "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u043F\u0440\u0438\u043C\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0440\u0435\u0430\u043C\u043F\u0438\u043D\u0433\u0430",
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 (\u043A\u043E\u043C\u0431\u043E\u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitar",
        value: this.state.guitar,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-tip": "\u0417\u0430\u043F\u0438\u0441\u044C \u0432 \u043B\u0438\u043D\u0438\u044E \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0431\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0431\u043E\u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044F",
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 (\u043B\u0438\u043D\u0438\u044F)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "baseLine",
        value: this.state.baseLine,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-tip": "\u0417\u0430\u043F\u0438\u0441\u044C \u0441 \u043F\u0440\u0438\u043C\u0438\u043D\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0440\u0435\u0430\u043C\u043F\u0438\u043D\u0433\u0430",
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 (\u043A\u043E\u043C\u0431\u043E\u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "base",
        value: this.state.base,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "additional",
        value: this.state.additional,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0421\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0440\u0435\u043A"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "synth",
        value: this.state.synth,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reVocal",
        value: this.state.reVocal,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reInstrument",
        value: this.state.reInstrument,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, " "))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0410\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "arrange",
        value: this.state.arrange,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "\u0421\u0440\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "urgent",
        value: this.state.urgent,
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, " ")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-copyright"
      }, "\u0421\u0442\u0443\u0434\u0438\u044F ZVUK\u2122 \u2014 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0435 \u0432 \u0441\u0447\u0435\u0442.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_tooltip___default.a, null));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ })
/******/ ]);