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
        viewBox: "0 0 171.43 97",
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
          __html: ".cls-1{fill:none;}.cls-2{fill:#898fa5;}.cls-3{fill:#5d717a;}.cls-4{fill:#293134;opacity:0.5;}.cls-5{clip-path:url(#clip-path);}.cls-6{fill:#86223c;}.cls-7{fill:#283434;}.cls-8{fill:#6c2a45;}.cls-9{fill:#b02d4d;}.cls-10{fill:#db5f83;}.cls-11{clip-path:url(#clip-path-2);}.cls-12{fill:#aab2b5;}.cls-13{fill:#be3434;}.cls-14{clip-path:url(#clip-path-3);}.cls-15{fill:#d2d7dd;}"
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
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-1",
        points: "105 60 95 60 75 60 75 74 75 80 77 80 77 85 80 85 80 88 82 88 82 90 84 90 84 91 85 91 85 92 88 92 88 93 95 93 95 94 105 94 105 93 112 93 112 92 115 92 115 91 116 91 116 90 118 90 118 88 120 88 120 85 123 85 123 80 125 80 125 74 125 60 105 60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
        id: "clip-path-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-1",
        points: "123 58.83 121.16 58.83 121.16 53.53 118.4 53.53 118.4 50.36 115.56 50.36 115.56 48.24 113.72 48.24 113.72 47.18 112.8 47.18 112.8 46.12 110.04 46.12 110.04 45.06 104.6 45.06 104.6 44 95.4 44 95.4 45.06 89.96 45.06 89.96 46.12 87.2 46.12 87.2 47.18 86.28 47.18 86.28 48.24 84.44 48.24 84.44 50.36 81.6 50.36 81.6 53.53 78.84 53.53 78.84 58.83 77 58.83 77 65.18 78.84 65.18 78.84 70.47 81.6 70.47 81.6 73.65 83.44 73.65 83.44 75.77 85.28 75.77 85.28 76.83 86.2 76.83 86.2 77.89 88.96 77.89 88.96 78.94 95.4 78.94 95.4 80 104.6 80 104.6 78.94 111.04 78.94 111.04 77.89 113.8 77.89 113.8 76.83 114.72 76.83 114.72 75.77 116.56 75.77 116.56 73.65 118.4 73.65 118.4 70.47 121.16 70.47 121.16 65.18 123 65.18 123 58.83",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
        id: "clip-path-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-1",
        points: "125 58 123 58 123 53 120 53 120 50 117 50 117 48 115 48 115 47 114 47 114 46 111 46 111 45 105 45 105 44 95 44 95 45 89 45 89 46 86 46 86 47 85 47 85 48 83 48 83 50 80 50 80 53 77 53 77 58 75 58 75 64 77 64 77 69 80 69 80 72 82 72 82 74 84 74 84 75 85 75 85 76 88 76 88 77 95 77 95 78 105 78 105 77 112 77 112 76 115 76 115 75 116 75 116 74 118 74 118 72 120 72 120 69 123 69 123 64 125 64 125 58",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Asset 6"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-2",
        points: "132 74 131 74 131 71 130 71 130 69 129 69 129 67 127 67 127 66 126 66 126 65 124 65 124 64 122 64 122 63 121 63 121 62 118 62 118 61 112 61 112 60 102 60 102 61 96 61 96 62 93 62 93 63 92 63 92 64 90 64 90 65 88 65 88 66 87 66 87 67 85 67 85 69 84 69 84 71 83 71 83 74 82 74 82 80 83 80 83 83 84 83 84 85 85 85 85 87 87 87 87 88 88 88 88 89 89 89 89 90 91 90 91 91 92 91 92 92 95 92 95 93 102 93 102 94 112 94 112 93 119 93 119 92 122 92 122 91 123 91 123 90 125 90 125 89 126 89 126 88 127 88 127 87 129 87 129 85 130 85 130 83 131 83 131 80 132 80 132 74",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-3",
        points: "126 78.71 125.12 78.71 125.12 76.42 124.24 76.42 124.24 74.89 123.36 74.89 123.36 73.36 121.6 73.36 121.6 72.59 120.72 72.59 120.72 71.83 118.96 71.83 118.96 71.06 117.2 71.06 117.2 70.3 116.32 70.3 116.32 69.53 113.68 69.53 113.68 68.77 108.4 68.77 108.4 68 99.6 68 99.6 68.77 94.32 68.77 94.32 69.53 91.68 69.53 91.68 70.3 90.8 70.3 90.8 71.06 89.04 71.06 89.04 71.83 87.28 71.83 87.28 72.59 86.4 72.59 86.4 73.36 84.64 73.36 84.64 74.89 83.76 74.89 83.76 76.42 82.88 76.42 82.88 78.71 82 78.71 82 83.3 82.88 83.3 82.88 85.59 83.76 85.59 83.76 87.12 84.64 87.12 84.64 88.65 86.4 88.65 86.4 89.42 87.28 89.42 87.28 90.18 88.16 90.18 88.16 90.94 89.92 90.94 89.92 91.71 90.8 91.71 90.8 92.47 93.44 92.47 93.44 93.24 99.6 93.24 99.6 94 108.4 94 108.4 93.24 114.56 93.24 114.56 92.47 117.2 92.47 117.2 91.71 118.08 91.71 118.08 90.94 119.84 90.94 119.84 90.18 120.72 90.18 120.72 89.42 121.6 89.42 121.6 88.65 123.36 88.65 123.36 87.12 124.24 87.12 124.24 85.59 125.12 85.59 125.12 83.3 126 83.3 126 78.71",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-4",
        points: "125 77.71 124.12 77.71 124.12 75.42 123.24 75.42 123.24 73.89 122.36 73.89 122.36 72.36 120.6 72.36 120.6 71.59 119.72 71.59 119.72 70.83 117.96 70.83 117.96 70.06 116.2 70.06 116.2 69.3 115.32 69.3 115.32 68.53 112.68 68.53 112.68 67.77 107.4 67.77 107.4 67 98.6 67 98.6 67.77 93.32 67.77 93.32 68.53 90.68 68.53 90.68 69.3 89.8 69.3 89.8 70.06 88.04 70.06 88.04 70.83 86.28 70.83 86.28 71.59 85.4 71.59 85.4 72.36 83.64 72.36 83.64 73.89 82.76 73.89 82.76 75.42 81.88 75.42 81.88 77.71 81 77.71 81 82.3 81.88 82.3 81.88 84.59 82.76 84.59 82.76 86.12 83.64 86.12 83.64 87.65 85.4 87.65 85.4 88.42 86.28 88.42 86.28 89.18 87.16 89.18 87.16 89.94 88.92 89.94 88.92 90.71 89.8 90.71 89.8 91.47 92.44 91.47 92.44 92.24 98.6 92.24 98.6 93 107.4 93 107.4 92.24 113.56 92.24 113.56 91.47 116.2 91.47 116.2 90.71 117.08 90.71 117.08 89.94 118.84 89.94 118.84 89.18 119.72 89.18 119.72 88.42 120.6 88.42 120.6 87.65 122.36 87.65 122.36 86.12 123.24 86.12 123.24 84.59 124.12 84.59 124.12 82.3 125 82.3 125 77.71",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-6",
        points: "105 60 95 60 75 60 75 74 75 80 77 80 77 85 80 85 80 88 82 88 82 90 84 90 84 91 85 91 85 92 88 92 88 93 95 93 95 94 105 94 105 93 112 93 112 92 115 92 115 91 116 91 116 90 118 90 118 88 120 88 120 85 123 85 123 80 125 80 125 74 125 60 105 60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-7",
        x: 116,
        y: 71,
        width: 2,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-7",
        x: 112,
        y: 73,
        width: 3,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-7",
        x: 75,
        y: 61,
        width: 3,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-7",
        x: 118,
        y: 69,
        width: 2,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-7",
        x: 122,
        y: 66,
        width: 1,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-8",
        x: 123,
        y: 61,
        width: 2,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-8",
        x: 120,
        y: 66,
        width: 2,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-8",
        x: 105,
        y: 74,
        width: 4,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-8",
        x: 110,
        y: 74,
        width: 1,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-8",
        x: 77,
        y: 66,
        width: 2,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-9",
        x: 85,
        y: 73,
        width: 3,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-9",
        x: 82,
        y: 71,
        width: 2,
        height: 19,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-10",
        points: "123 58.83 121.16 58.83 121.16 53.53 118.4 53.53 118.4 50.36 115.56 50.36 115.56 48.24 113.72 48.24 113.72 47.18 112.8 47.18 112.8 46.12 110.04 46.12 110.04 45.06 104.6 45.06 104.6 44 95.4 44 95.4 45.06 89.96 45.06 89.96 46.12 87.2 46.12 87.2 47.18 86.28 47.18 86.28 48.24 84.44 48.24 84.44 50.36 81.6 50.36 81.6 53.53 78.84 53.53 78.84 58.83 77 58.83 77 65.18 78.84 65.18 78.84 70.47 81.6 70.47 81.6 73.65 83.44 73.65 83.44 75.77 85.28 75.77 85.28 76.83 86.2 76.83 86.2 77.89 88.96 77.89 88.96 78.94 95.4 78.94 95.4 80 104.6 80 104.6 78.94 111.04 78.94 111.04 77.89 113.8 77.89 113.8 76.83 114.72 76.83 114.72 75.77 116.56 75.77 116.56 73.65 118.4 73.65 118.4 70.47 121.16 70.47 121.16 65.18 123 65.18 123 58.83",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: 88,
        y: 72,
        width: 23,
        height: 25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-13",
        points: "125 58 124 58 124 55 123 55 123 53 122 53 122 51 120 51 120 50 119 50 119 49 117 49 117 48 115 48 115 47 114 47 114 46 111 46 111 45 105 45 105 44 95 44 95 45 89 45 89 46 86 46 86 47 85 47 85 48 83 48 83 49 81 49 81 50 80 50 80 51 78 51 78 53 77 53 77 55 76 55 76 58 75 58 75 64 76 64 76 67 77 67 77 69 78 69 78 71 80 71 80 72 81 72 81 73 82 73 82 74 84 74 84 75 85 75 85 76 88 76 88 77 95 77 95 78 105 78 105 77 112 77 112 76 115 76 115 75 116 75 116 74 118 74 118 73 119 73 119 72 120 72 120 71 122 71 122 69 123 69 123 67 124 67 124 64 125 64 125 58",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-9",
        points: "171.43 37 153.58 43.5 135.72 50 117.86 56.5 100 63 82.14 69.5 64.28 76 46.42 82.5 28.57 89 27.07 89 25.57 89 24.07 89 22.57 89 21.07 89 19.57 89 18.07 89 16.57 89 34.42 82.5 52.28 76 70.14 69.5 88 63 105.86 56.5 123.72 50 141.58 43.5 159.43 37 160.93 37 162.43 37 163.93 37 165.43 37 166.93 37 168.43 37 169.93 37 171.43 37",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-9",
        points: "165 0 152.78 4.45 43.64 44.17 0 60.05 0 86.75 7.84 83.89 115.97 44.17 165 26.69 165 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-9",
        points: "171.43 37 153.58 43.5 135.72 50 117.86 56.5 100 63 82.14 69.5 64.28 76 46.42 82.5 28.57 89 27.07 89 25.57 89 24.07 89 22.57 89 21.07 89 19.57 89 18.07 89 16.57 89 34.42 82.5 52.28 76 70.14 69.5 88 63 105.86 56.5 123.72 50 141.58 43.5 159.43 37 160.93 37 162.43 37 163.93 37 165.43 37 166.93 37 168.43 37 169.93 37 171.43 37",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-9",
        points: "165 0 152.78 4.45 43.64 44.17 0 60.05 0 86.75 7.84 83.89 115.97 44.17 165 26.69 165 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-15",
        x: 98,
        y: 78,
        width: 4,
        height: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box _inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "\u0422\u0430\u0439\u043C\u0438\u043D\u0433"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "timing",
        value: this.state.timing,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "\u0412 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "BPM"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "bpm",
        value: this.state.bpm,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "\u0412\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "vocal",
        value: this.state.vocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, "\u0411\u0435\u043A-\u0432\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "backVocal",
        value: this.state.backVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F + \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarAc",
        value: this.state.guitarAc,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitar",
        value: this.state.guitar,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarLine",
        value: this.state.guitarLine,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "base",
        value: this.state.base,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "baseLine",
        value: this.state.baseLine,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "additional",
        value: this.state.additional,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, "\u0421\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "synth",
        value: this.state.synth,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reVocal",
        value: this.state.reVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0440\u0430\u0437")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reInstrument",
        value: this.state.reInstrument,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0440\u0430\u0437"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "\u0410\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "arrange",
        value: this.state.arrange,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), this.state.arrange ? 'Нужна' : 'Не нужна')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, "\u0421\u0440\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "urgent",
        value: this.state.urgent,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }), this.state.urgent ? 'Да' : 'Нет')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, "\u041E\u0431\u0449\u0430\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, this.state.price, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, "\u20B4"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
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
//# sourceMappingURL=5.39264dc1450b263dedab.hot-update.js.map