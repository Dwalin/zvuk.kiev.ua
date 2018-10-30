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
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        className: "zv-butt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "checkbox",
        className: "sliderCheck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "160 10 180 220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: ".cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#be3434;}.cls-4{fill:#00c200;}.cls-5{opacity:0.25;}.cls-6{opacity:0.15;}.cls-7{fill:#dcdcdc;}.cls-8{clip-path:url(#clip-path-3);}.cls-9{fill:#ababab;}.cls-10{fill:#f2f2f2;}.cls-11{fill:#d1d1d1;}.cls-12{fill:#dedede;}.cls-13{fill:#fff;}.cls-14{fill:#e1e1e1;}.cls-15{clip-path:url(#clip-path-4);}"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
        id: "clip-path",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-1",
        points: "330 67.5 330 63 328 63 328 59 324 59 324 55 320 55 320 52 317 52 317 50 314 50 314 48 310 48 310 45.92 308 45.92 308 44.94 305 44.94 305 43.95 301 43.95 301 43 298 43 298 41.98 289 41.98 289 41 209 41 209 41.98 200 41.98 200 43 197 43 197 43.95 193 43.95 193 44.94 190 44.94 190 45.92 188 45.92 188 48 184 48 184 50 181 50 181 52 178 52 178 55 174 55 174 59 170 59 170 63 168 63 168 67.5 166 67.5 166 75.5 166 79.5 166 87.5 168 87.5 168 92 170 92 170 96 174 96 174 100 178 100 178 103 181 103 181 105 184 105 184 106 188 106 188 108.1 190 108.1 190 109.09 193 109.09 193 110.08 197 110.08 197 112.05 209 112.05 209 113 289 113 289 112.05 301 112.05 301 110.08 305 110.08 305 109.09 308 109.09 308 108.1 310 108.1 310 106 314 106 314 105 317 105 317 103 320 103 320 100 324 100 324 96 328 96 328 92 330 92 330 87.5 332 87.5 332 79.5 332 75.5 332 67.5 330 67.5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
        id: "clip-path-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-1",
        points: "267 59 265 59 265 63 261 63 261 67 257 67 257 70 254 70 254 72 251 72 251 73 247 73 247 75.1 245 75.1 245 76.09 242 76.09 242 77.08 238 77.08 238 79.05 226 79.05 226 80 212 80 212 79.05 200 79.05 200 77.08 196 77.08 196 76.09 193 76.09 193 75.1 191 75.1 191 73 187 73 187 72 184 72 184 70 181 70 181 67 177 67 177 63 173 63 173 59 171 59 171 54.5 169 54.5 169 84 171 84 171 88 173 88 173 92 177 92 177 96 182 96 182 97 184 97 184 101 187 101 187 103 191 103 191 105 193 105 193 106 196 106 196 107 200 107 200 108 203 108 203 109 212 109 212 110 226 110 226 109 235 109 235 108 238 108 238 107 242 107 242 106 245 106 245 105 247 105 247 103 251 103 251 101 254 101 254 97 256 97 256 96 261 96 261 92 265 92 265 88 267 88 267 84 269 84 269 54.5 267 54.5 267 59",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
        id: "clip-path-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-1",
        points: "269 42.5 267 42.5 267 38 265 38 265 34 261 34 261 30 257 30 257 27 254 27 254 25 251 25 251 23 247 23 247 20.93 245 20.93 245 19.94 242 19.94 242 18.95 238 18.95 238 18 235 18 235 16.98 226 16.98 226 16 212 16 212 16.98 203 16.98 203 18 200 18 200 18.95 196 18.95 196 19.94 193 19.94 193 20.93 191 20.93 191 23 187 23 187 25 184 25 184 27 181 27 181 30 177 30 177 34 173 34 173 38 171 38 171 42.5 169 42.5 169 54.5 171 54.5 171 59 173 59 173 63 177 63 177 67 181 67 181 70 184 70 184 72 187 72 187 73 191 73 191 75.1 193 75.1 193 76.09 196 76.09 196 77.08 200 77.08 200 79.05 212 79.05 212 80 226 80 226 79.05 238 79.05 238 77.08 242 77.08 242 76.09 245 76.09 245 75.1 247 75.1 247 73 251 73 251 72 254 72 254 70 257 70 257 67 261 67 261 63 265 63 265 59 267 59 267 54.5 269 54.5 269 42.5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "slider"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Layer_4",
        "data-name": "Layer 4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "sliderBG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-3",
        x: 166,
        y: 41,
        width: 166,
        height: 72,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-4",
        y: 41,
        width: 166,
        height: 72,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        id: "bgshadow",
        className: "cls-5",
        points: "330 67.5 330 63 328 63 328 59 324 59 324 55 320 55 320 52 317 52 317 50 314 50 314 48 310 48 310 45.92 308 45.92 308 44.94 305 44.94 305 43.95 301 43.95 301 43 298 43 298 41.98 289 41.98 289 41 209 41 209 41.98 200 41.98 200 43 197 43 197 43.95 193 43.95 193 44.94 190 44.94 190 45.92 188 45.92 188 48 184 48 184 50 181 50 181 52 178 52 178 55 174 55 174 59 170 59 170 63 168 63 168 67.5 166 67.5 166 74.5 168 74.5 168 70 170 70 170 66 174 66 174 62 178 62 178 59 181 59 181 57 184 57 184 55 188 55 188 52.92 190 52.92 190 51.94 193 51.94 193 50.95 197 50.95 197 50 200 50 200 48.98 209 48.98 209 48 289 48 289 48.98 298 48.98 298 50 301 50 301 50.95 305 50.95 305 51.94 308 51.94 308 52.92 310 52.92 310 55 314 55 314 57 317 57 317 59 320 59 320 62 324 62 324 66 328 66 328 70 330 70 330 74.5 332 74.5 332 67.5 330 67.5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "shadowClip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-6",
        points: "284 74.33 281.4 74.33 281.4 69.69 278.8 69.69 278.8 65.56 273.6 65.56 273.6 61.44 268.4 61.44 268.4 58.34 264.5 58.34 264.5 56.28 260.6 56.28 260.6 54.22 255.4 54.22 255.4 52.08 252.8 52.08 252.8 51.06 248.9 51.06 248.9 50.05 243.7 50.05 243.7 49.06 239.8 49.06 239.8 48.02 228.1 48.02 228.1 47 209.9 47 209.9 48.02 198.2 48.02 198.2 49.06 194.3 49.06 194.3 50.05 189.1 50.05 189.1 51.06 185.2 51.06 185.2 52.08 182.6 52.08 182.6 54.22 177.4 54.22 177.4 56.28 173.5 56.28 173.5 58.34 169.6 58.34 169.6 61.44 164.4 61.44 164.4 65.56 159.2 65.56 159.2 69.69 156.6 69.69 156.6 74.33 154 74.33 154 86.7 156.6 86.7 156.6 91.34 159.2 91.34 159.2 95.47 164.4 95.47 164.4 99.59 169.6 99.59 169.6 102.69 173.5 102.69 173.5 104.75 177.4 104.75 177.4 105.78 182.6 105.78 182.6 107.95 185.2 107.95 185.2 108.97 189.1 108.97 189.1 109.98 194.3 109.98 194.3 112.02 209.9 112.02 209.9 113 228.1 113 228.1 112.02 243.7 112.02 243.7 109.98 248.9 109.98 248.9 108.97 252.8 108.97 252.8 107.95 255.4 107.95 255.4 105.78 260.6 105.78 260.6 104.75 264.5 104.75 264.5 102.69 268.4 102.69 268.4 99.59 273.6 99.59 273.6 95.47 278.8 95.47 278.8 91.34 281.4 91.34 281.4 86.7 284 86.7 284 74.33",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-5",
        points: "273 74.67 270.84 74.67 270.84 70.31 268.68 70.31 268.68 66.44 264.36 66.44 264.36 62.56 260.04 62.56 260.04 59.66 256.8 59.66 256.8 57.72 253.56 57.72 253.56 55.78 249.24 55.78 249.24 53.77 247.08 53.77 247.08 52.82 243.84 52.82 243.84 51.86 239.52 51.86 239.52 50.94 236.28 50.94 236.28 49.95 226.56 49.95 226.56 49 211.44 49 211.44 49.95 201.72 49.95 201.72 50.94 198.48 50.94 198.48 51.86 194.16 51.86 194.16 52.82 190.92 52.82 190.92 53.77 188.76 53.77 188.76 55.78 184.44 55.78 184.44 57.72 181.2 57.72 181.2 59.66 177.96 59.66 177.96 62.56 173.64 62.56 173.64 66.44 169.32 66.44 169.32 70.31 167.16 70.31 167.16 74.67 165 74.67 165 86.3 167.16 86.3 167.16 90.66 169.32 90.66 169.32 94.53 173.64 94.53 173.64 98.41 177.96 98.41 177.96 101.31 181.2 101.31 181.2 103.25 184.44 103.25 184.44 104.22 188.76 104.22 188.76 106.26 190.92 106.26 190.92 107.21 194.16 107.21 194.16 108.17 198.48 108.17 198.48 110.08 211.44 110.08 211.44 111 226.56 111 226.56 110.08 239.52 110.08 239.52 108.17 243.84 108.17 243.84 107.21 247.08 107.21 247.08 106.26 249.24 106.26 249.24 104.22 253.56 104.22 253.56 103.25 256.8 103.25 256.8 101.31 260.04 101.31 260.04 98.41 264.36 98.41 264.36 94.53 268.68 94.53 268.68 90.66 270.84 90.66 270.84 86.3 273 86.3 273 74.67",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "side",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-7",
        points: "267 59 265 59 265 63 261 63 261 67 257 67 257 70 254 70 254 72 251 72 251 73 247 73 247 75.1 245 75.1 245 76.09 242 76.09 242 77.08 238 77.08 238 79.05 226 79.05 226 80 212 80 212 79.05 200 79.05 200 77.08 196 77.08 196 76.09 193 76.09 193 75.1 191 75.1 191 73 187 73 187 72 184 72 184 70 181 70 181 67 177 67 177 63 173 63 173 59 171 59 171 54.5 169 54.5 169 84 171 84 171 88 173 88 173 92 177 92 177 96 182 96 182 97 184 97 184 101 187 101 187 103 191 103 191 105 193 105 193 106 196 106 196 107 200 107 200 108 203 108 203 109 212 109 212 110 226 110 226 109 235 109 235 108 238 108 238 107 242 107 242 106 245 106 245 105 247 105 247 103 251 103 251 101 254 101 254 97 256 97 256 96 261 96 261 92 265 92 265 88 267 88 267 84 269 84 269 54.5 267 54.5 267 59",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-9",
        x: 169,
        y: 50,
        width: 5,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-9",
        x: 188,
        y: 63,
        width: 9,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-10",
        x: 199,
        y: 67,
        width: 7,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-11",
        x: 226,
        y: 70,
        width: 9,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-11",
        x: 238,
        y: 70,
        width: 5,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-11",
        x: 255,
        y: 61,
        width: 6,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-10",
        x: 264,
        y: 51,
        width: 5,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-11",
        x: 174,
        y: 50,
        width: 9,
        height: 56,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-10",
        x: 183,
        y: 63,
        width: 3,
        height: 47,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-10",
        x: 242,
        y: 72,
        width: 6,
        height: 34,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-9",
        x: 251,
        y: 69,
        width: 4,
        height: 34,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-9",
        x: 261,
        y: 58,
        width: 4,
        height: 34,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: 179,
        y: "28.66",
        width: 80,
        height: "40.34",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: 182,
        y: "28.66",
        width: 74,
        height: "42.34",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: 183,
        y: "28.66",
        width: 72,
        height: "44.34",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-13",
        x: "200.29",
        y: "18.96",
        width: "35.43",
        height: "62.06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: 186,
        y: "28.66",
        width: 66,
        height: "46.19",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: "193.54",
        y: "28.66",
        width: "50.93",
        height: "49.54",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: "197.96",
        y: "26.82",
        width: "42.07",
        height: "51.22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-12",
        x: "190.21",
        y: "28.66",
        width: "57.57",
        height: "47.86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-13",
        x: "210.25",
        y: "18.97",
        width: "15.5",
        height: "64.03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        className: "cls-13",
        x: 216,
        y: "18.97",
        width: 6,
        height: "64.03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-14",
        points: "269 42.5 267 42.5 267 38 265 38 265 34 261 34 261 30 257 30 257 27 254 27 254 25 251 25 251 23 247 23 247 20.93 245 20.93 245 19.94 242 19.94 242 18.95 238 18.95 238 18 235 18 235 16.98 226 16.98 226 16 212 16 212 16.98 203 16.98 203 18 200 18 200 18.95 196 18.95 196 19.94 193 19.94 193 20.93 191 20.93 191 23 187 23 187 25 184 25 184 27 181 27 181 30 177 30 177 34 173 34 173 38 171 38 171 42.5 169 42.5 169 54.5 171 54.5 171 59 173 59 173 63 177 63 177 67 181 67 181 70 184 70 184 72 187 72 187 73 191 73 191 75.1 193 75.1 193 76.09 196 76.09 196 77.08 200 77.08 200 79.05 212 79.05 212 80 226 80 226 79.05 238 79.05 238 77.08 242 77.08 242 76.09 245 76.09 245 75.1 247 75.1 247 73 251 73 251 72 254 72 254 70 257 70 257 67 261 67 261 63 265 63 265 59 267 59 267 54.5 269 54.5 269 42.5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        className: "cls-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-10",
        points: "219 0 219 1 218 1 217 1 217 2 216 2 216 3 215 3 215 3.08 215 4 213 4 213 5 212 5 211 5 211 5.94 211 6 209 6 209 6.92 209 7 208 7 208 8 206 8 206 9 205 9 205 10 203 10 203 11 202 11 202 12 201 12 201 12.95 201 13 200 13 199 13 199 14 198 14 198 15 196 15 196 15.94 196 16 195 16 194 16 194 17 192 17 192 18.94 192 19 190 19 189 19 189 21 187 21 186 21 186 22 186 22.95 186 23 184 23 183 23 183 24 182 24 182 25 181 25 181 26 180 26 179 26 179 27 177 27 177 27.93 177 27.94 177 28 175 28 175 29 174 29 174 30 173 30 173 31 171 31 171 32 170 32 170 33 168 33 168 34 167 34 166 34 166 35 165 35 165 36 164 36 164 36.02 164 37 162 37 162 38 161 38 160 38 160 38.94 160 39 158 39 158 39.92 158 40 157 40 157 41 157 52 158 52 158 51 159 51 160 51 160 50.95 160 50 161 50 161 49 162 49 162 48 164 48 164 47 165 47 165 46 167 46 167 45 168 45 168 44.92 168 44 170 44 170 43.94 170 43 171 43 172 43 172 42 174 42 174 41.02 174 41 175 41 175 40 176 40 176 39 177 39 178 39 178 38 180 38 180 37 181 37 181 36 183 36 183 35 184 35 184 34 185 34 185 33 187 33 187 32.94 187 32.92 187 32 189 32 189 31 190 31 191 31 191 30 192 30 192 29 193 29 193 28 194 28 196 28 196 27.95 196 27 196 26 197 26 199 26 199 24 200 24 202 24 202 23.94 202 22 204 22 204 21 205 21 206 21 206 20.94 206 20 208 20 208 19 209 19 209 18 210 18 211 18 211 17.95 211 17 212 17 212 16 213 16 213 15 215 15 215 14 216 14 216 13 218 13 218 12 219 12 219 11.93 219 11 221 11 221 10.94 221 10 221 0 219 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
        className: "cls-10",
        points: "251.31 5.06 251.31 6.41 249.97 6.41 248.63 6.41 248.63 7.75 247.28 7.75 247.28 9.09 245.94 9.09 245.94 9.21 245.94 10.44 243.25 10.44 243.25 11.78 241.91 11.78 240.56 11.78 240.56 13.04 240.56 13.13 237.88 13.13 237.88 14.37 237.88 14.47 236.53 14.47 236.53 15.81 233.84 15.81 233.84 17.16 232.5 17.16 232.5 18.5 229.81 18.5 229.81 19.84 228.47 19.84 228.47 21.19 227.13 21.19 227.13 22.47 227.13 22.53 225.78 22.53 224.44 22.53 224.44 23.88 223.09 23.88 223.09 25.22 220.41 25.22 220.41 26.48 220.41 26.56 219.06 26.56 217.72 26.56 217.72 27.91 215.03 27.91 215.03 30.51 215.03 30.59 212.34 30.59 211 30.59 211 33.28 208.31 33.28 206.97 33.28 206.97 34.63 206.97 35.91 206.97 35.97 204.28 35.97 202.94 35.97 202.94 37.31 201.59 37.31 201.59 38.66 200.25 38.66 200.25 40 198.91 40 197.56 40 197.56 41.34 194.88 41.34 194.88 42.59 194.88 42.61 194.88 42.69 192.19 42.69 192.19 44.03 190.84 44.03 190.84 45.38 189.5 45.38 189.5 46.72 186.81 46.72 186.81 48.06 185.47 48.06 185.47 49.41 182.78 49.41 182.78 50.75 181.44 50.75 180.09 50.75 180.09 52.09 178.75 52.09 178.75 53.44 177.41 53.44 177.41 53.46 177.41 54.78 174.72 54.78 174.72 56.13 173.38 56.13 172.03 56.13 172.03 57.39 172.03 57.47 169.34 57.47 169.34 58.71 169.34 58.81 168 58.81 168 60.16 168 74.94 169.34 74.94 169.34 73.59 170.69 73.59 172.03 73.59 172.03 73.53 172.03 72.25 173.38 72.25 173.38 70.91 174.72 70.91 174.72 69.56 177.41 69.56 177.41 68.22 178.75 68.22 178.75 66.88 181.44 66.88 181.44 65.53 182.78 65.53 182.78 65.43 182.78 64.19 185.47 64.19 185.47 64.11 185.47 62.84 186.81 62.84 188.16 62.84 188.16 61.5 190.84 61.5 190.84 60.18 190.84 60.16 192.19 60.16 192.19 58.81 193.53 58.81 193.53 57.47 194.88 57.47 196.22 57.47 196.22 56.13 198.91 56.13 198.91 54.78 200.25 54.78 200.25 53.44 202.94 53.44 202.94 52.09 204.28 52.09 204.28 50.75 205.63 50.75 205.63 49.41 208.31 49.41 208.31 49.33 208.31 49.31 208.31 48.06 211 48.06 211 46.72 212.34 46.72 213.69 46.72 213.69 45.38 215.03 45.38 215.03 44.03 216.38 44.03 216.38 42.69 217.72 42.69 220.41 42.69 220.41 42.63 220.41 41.34 220.41 40 221.75 40 224.44 40 224.44 37.31 225.78 37.31 228.47 37.31 228.47 37.23 228.47 34.63 231.16 34.63 231.16 33.28 232.5 33.28 233.84 33.28 233.84 33.2 233.84 31.94 236.53 31.94 236.53 30.59 237.88 30.59 237.88 29.25 239.22 29.25 240.56 29.25 240.56 29.19 240.56 27.91 241.91 27.91 241.91 26.56 243.25 26.56 243.25 25.22 245.94 25.22 245.94 23.88 247.28 23.88 247.28 22.53 249.97 22.53 249.97 21.19 251.31 21.19 251.31 21.09 251.31 19.84 254 19.84 254 19.76 254 18.5 254 5.06 251.31 5.06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-box _inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "\u0422\u0430\u0439\u043C\u0438\u043D\u0433"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "timing",
        value: this.state.timing,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "\u0412 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "BPM"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "bpm",
        value: this.state.bpm,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "\u0412\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "vocal",
        value: this.state.vocal,
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
      }, "\u0411\u0435\u043A-\u0432\u043E\u043A\u0430\u043B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "backVocal",
        value: this.state.backVocal,
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
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F + \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarAc",
        value: this.state.guitarAc,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitar",
        value: this.state.guitar,
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
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "guitarLine",
        value: this.state.guitarLine,
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
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "base",
        value: this.state.base,
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
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430 \u2014 \u043B\u0438\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "baseLine",
        value: this.state.baseLine,
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
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "additional",
        value: this.state.additional,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, "\u0421\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "synth",
        value: this.state.synth,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0442\u0440\u0435\u043A\u043E\u0432")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reVocal",
        value: this.state.reVocal,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0440\u0430\u0437")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "reInstrument",
        value: this.state.reInstrument,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "\u041A\u043E\u043B-\u0432\u043E \u0440\u0430\u0437"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, "\u0410\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "arrange",
        value: this.state.arrange,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }), this.state.arrange ? 'Нужна' : 'Не нужна')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "\u0421\u0440\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Checkbox",
        name: "urgent",
        value: this.state.urgent,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), this.state.urgent ? 'Да' : 'Нет')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, "\u041E\u0431\u0449\u0430\u044F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, this.state.price, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, "\u20B4"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-calc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "zv-copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
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
//# sourceMappingURL=5.4f512c0f3c8ea7761413.hot-update.js.map