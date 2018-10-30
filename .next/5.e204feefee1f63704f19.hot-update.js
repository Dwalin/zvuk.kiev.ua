webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);

var _jsxFileName = "C:\\Users\\Oles\\PhpstormProjects\\zvuk.kiev.ua\\pages\\index.js";

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
      timing: 210,
      bpm: 100,
      vocal: 1,
      backVocal: 0,
      guitarAc: 0,
      guitar: 0,
      guitarLine: 0,
      base: 0,
      baseLine: 0,
      additional: 1,
      synth: 0,
      arrange: false,
      session: 0,
      consultation: false,
      urgency: 0,
      price: 0,
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
      price = this.state.timing * (+this.state.vocal * 4 + +this.state.backVocal + +this.state.guitar * 3 + +this.state.guitarAc * 3.5 + +this.state.guitarLine * 5 + +this.state.base * 3 + +this.state.baseLine * 4 + +this.state.additional * 3 + +this.state.synth * 1.75) * this.state.bpm / 120; // price = price + price * 0.33 * (this.state.arrange ? 1 : 0) + this.state.session * 300;

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
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-butt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 150 150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: ".cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#86223c;}.cls-4{fill:#be3434;}"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
        id: "clip-path",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
        className: "cls-1",
        d: "M0,50v53H.15C2.48,129.22,35.09,150,75,150s72.52-20.78,74.85-47H150V50Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Button"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Layer_2-2",
        "data-name": "Layer 2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
        className: "cls-3",
        d: "M0,50v53H.15C2.48,129.22,35.09,150,75,150s72.52-20.78,74.85-47H150V50Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ellipse", {
        className: "cls-4",
        cx: 75,
        cy: 50,
        rx: 75,
        ry: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box _inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "\u0422\u0430\u0439\u043C\u0438\u043D\u0433"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "timing",
        value: this.state.timing,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "\u0412 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "BPM"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "bpm",
        value: this.state.bpm,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "\u0412\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "vocal",
        value: this.state.vocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "\u0411\u0435\u043A-\u0432\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "backVocal",
        value: this.state.backVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F + \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarAc",
        value: this.state.guitarAc,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitar",
        value: this.state.guitar,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarLine",
        value: this.state.guitarLine,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "base",
        value: this.state.base,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "baseLine",
        value: this.state.baseLine,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "additional",
        value: this.state.additional,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "\u0421\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "synth",
        value: this.state.synth,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reVocal",
        value: this.state.reVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0440\u0430\u0437")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reInstrument",
        value: this.state.reInstrument,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0440\u0430\u0437"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "\u0410\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "arrange",
        value: this.state.arrange,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), this.state.arrange ? 'Нужна' : 'Не нужна')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "\u0421\u0440\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "urgent",
        value: this.state.urgent,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), this.state.urgent ? 'Да' : 'Нет')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, "\u041E\u0431\u0449\u0430\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, this.state.price, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, "\u20B4"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, "\u0421\u0442\u0443\u0434\u0438\u044F \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u0438 zvuk.kiev.ua \u2014 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0435 \u0432 \u0441\u0447\u0435\u0442.")));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.e204feefee1f63704f19.hot-update.js.map