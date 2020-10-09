function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ForcastValues.ts":
  /*!**********************************!*\
    !*** ./src/app/ForcastValues.ts ***!
    \**********************************/

  /*! exports provided: ForcastValues */

  /***/
  function srcAppForcastValuesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForcastValues", function () {
      return ForcastValues;
    });

    var ForcastValues = function ForcastValues() // public location:string,
    // public products:string,
    // public  interval:string
    {
      _classCallCheck(this, ForcastValues);
    };
    /***/

  },

  /***/
  "./src/app/Forcasting.ts":
  /*!*******************************!*\
    !*** ./src/app/Forcasting.ts ***!
    \*******************************/

  /*! exports provided: Forcasting */

  /***/
  function srcAppForcastingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Forcasting", function () {
      return Forcasting;
    });

    var Forcasting = function Forcasting() {
      _classCallCheck(this, Forcasting);
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _incrementalsales_volume_incrementalsales_volume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./incrementalsales-volume/incrementalsales-volume.component */
    "./src/app/incrementalsales-volume/incrementalsales-volume.component.ts");
    /* harmony import */


    var _product1_product1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product1/product1.component */
    "./src/app/product1/product1.component.ts");

    var routes = [{
      path: 'Product1-component',
      component: _product1_product1_component__WEBPACK_IMPORTED_MODULE_3__["Product1Component"]
    }, {
      path: 'incremantalsales',
      component: _incrementalsales_volume_incrementalsales_volume_component__WEBPACK_IMPORTED_MODULE_2__["IncrementalsalesVolumeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Product1-component"];
    };

    var _c1 = function _c1() {
      return ["/incremantalsales"];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.opened = false;
      this.today = new Date();
      this.time = new Date().getTime;
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 21,
      vars: 4,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=\n  , initial-scale=1.0"], [2, "background-color", "rgb(230,247,255)"], [1, "col-lg-1", 2, "background-color", "lightgray", "height", "100%"], [2, "margin-top", "30VH!IMPORTANT"], [2, "font-size", "17px", "font-weight", "700", "color", "black", 3, "routerLink"], [1, "charts", "col-lg-11"], [1, "row", 2, "margin-top", "-20px"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Time series forecasting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Incremental sales volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".title[_ngcontent-%COMP%]\r\n{\r\n    background-color: darkgray;\r\n    font-size: 17px;\r\n    height: 10vh;\r\n}\r\n.title_text[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 30px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    font-family: system-ui;\r\n}\r\n.title_date[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 33px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    font-family: system-ui;\r\n}\r\npath[_ngcontent-%COMP%]\r\n{\r\n    stroke: brown!important;\r\n\r\n    fill: none!important;\r\n}\r\n.line[_ngcontent-%COMP%] {\r\n    fill: none;\r\n    stroke: steelblue;\r\n    stroke-width: 2;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n  fill: none;\r\n  pointer-events: all;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n    fill: steelblue;\r\n    stroke: #fff;\r\n}\r\ndiv.tooltip[_ngcontent-%COMP%] {   \r\n    position: absolute;           \r\n    text-align: center;           \r\n    width: 60px;                  \r\n    height: 28px;                 \r\n    padding: 2px;             \r\n    font: 12px sans-serif;        \r\n    background: lightsteelblue;   \r\n    border: 0px;      \r\n    border-radius: 8px;           \r\n    pointer-events: none;         \r\n  }\r\n.tp-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: #eee;\r\n }\r\n.tp-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n    width:100px;   \r\n }\r\nmatside-nav-container[_ngcontent-%COMP%]{\r\nheight: 100%;\r\n }\r\nmat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%]\r\n {\r\n     padding: 16px;\r\n }\r\nmat-sidenav[_ngcontent-%COMP%]\r\n {\r\n     background-color: bisque;\r\n     width: 200px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSx1QkFBdUI7O0lBRXZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBRUksa0RBQWtEO0FBQ3REO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7Q0FDbkI7QUFDQTtJQUNHLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDQTtBQUNELFlBQVk7Q0FDWDtBQUNBOztLQUVJLGFBQWE7Q0FDakI7QUFDQTs7S0FFSSx3QkFBd0I7S0FDeEIsWUFBWTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcbi50aXRsZV90ZXh0XHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG59XHJcbi50aXRsZV9kYXRlXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxufVxyXG5wYXRoXHJcbntcclxuICAgIHN0cm9rZTogYnJvd24haW1wb3J0YW50O1xyXG5cclxuICAgIGZpbGw6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHN0ZWVsYmx1ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMjtcclxufVxyXG4gIFxyXG4ub3ZlcmxheSB7XHJcbiAgZmlsbDogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBkb3RzIGJ5IGFzc2lnbmluZyBhIGZpbGwgYW5kIHN0cm9rZSAqL1xyXG4uZG90IHtcclxuICAgIGZpbGw6IHN0ZWVsYmx1ZTtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5kaXYudG9vbHRpcCB7ICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgICAgIFxyXG4gICAgd2lkdGg6IDYwcHg7ICAgICAgICAgICAgICAgICAgXHJcbiAgICBoZWlnaHQ6IDI4cHg7ICAgICAgICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDJweDsgICAgICAgICAgICAgXHJcbiAgICBmb250OiAxMnB4IHNhbnMtc2VyaWY7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c3RlZWxibHVlOyAgIFxyXG4gICAgYm9yZGVyOiAwcHg7ICAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgICAgICAgICBcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAgICAgICAgIFxyXG4gIH1cclxuICAudHAtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiB9XHJcbiAudHAtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOjEwMHB4OyAgIFxyXG4gfVxyXG4gbWF0c2lkZS1uYXYtY29udGFpbmVye1xyXG5oZWlnaHQ6IDEwMCU7XHJcbiB9XHJcbiBtYXQtc2lkZW5hdixtYXQtc2lkZW5hdi1jb250ZW50XHJcbiB7XHJcbiAgICAgcGFkZGluZzogMTZweDtcclxuIH1cclxuIG1hdC1zaWRlbmF2XHJcbiB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAgIHdpZHRoOiAyMDBweDtcclxuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _product1_product1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./product1/product1.component */
    "./src/app/product1/product1.component.ts");
    /* harmony import */


    var _product2_product2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./product2/product2.component */
    "./src/app/product2/product2.component.ts");
    /* harmony import */


    var _incrementalsales_volume_incrementalsales_volume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./incrementalsales-volume/incrementalsales-volume.component */
    "./src/app/incrementalsales-volume/incrementalsales-volume.component.ts"); // import { MaterialModule } from './material/material.module';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_12__["NgxCsvParserModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_13__["HighchartsChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _product1_product1_component__WEBPACK_IMPORTED_MODULE_14__["Product1Component"], _product2_product2_component__WEBPACK_IMPORTED_MODULE_15__["Product2Component"], _incrementalsales_volume_incrementalsales_volume_component__WEBPACK_IMPORTED_MODULE_16__["IncrementalsalesVolumeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_12__["NgxCsvParserModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_13__["HighchartsChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _product1_product1_component__WEBPACK_IMPORTED_MODULE_14__["Product1Component"], _product2_product2_component__WEBPACK_IMPORTED_MODULE_15__["Product2Component"], _incrementalsales_volume_incrementalsales_volume_component__WEBPACK_IMPORTED_MODULE_16__["IncrementalsalesVolumeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_12__["NgxCsvParserModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_13__["HighchartsChartModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/details.ts":
  /*!****************************!*\
    !*** ./src/app/details.ts ***!
    \****************************/

  /*! exports provided: Details */

  /***/
  function srcAppDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Details", function () {
      return Details;
    });

    var Details = function Details() // public  interval:string
    {
      _classCallCheck(this, Details);
    };
    /***/

  },

  /***/
  "./src/app/forcast-service.service.ts":
  /*!********************************************!*\
    !*** ./src/app/forcast-service.service.ts ***!
    \********************************************/

  /*! exports provided: ForcastServiceService */

  /***/
  function srcAppForcastServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForcastServiceService", function () {
      return ForcastServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ForcastServiceService =
    /*#__PURE__*/
    function () {
      function ForcastServiceService(_Http) {
        _classCallCheck(this, ForcastServiceService);

        this._Http = _Http;
        this.clicked = true;
      }

      _createClass(ForcastServiceService, [{
        key: "setDetails",
        value: function setDetails(data) {
          this.clicked = true;
          this.details = data;
        }
      }, {
        key: "getDetails",
        value: function getDetails() {
          return this.details;
        }
      }, {
        key: "enroll",
        value: function enroll(details) {
          console.log(details, "newApicheck");
          return this._Http.post("https://tpo-forecast.azure-api.net/prophet/score", details);
        }
      }, {
        key: "setData",
        value: function setData(csvdata) {}
      }, {
        key: "getClicked",
        value: function getClicked() {
          return this.clicked;
        }
      }, {
        key: "setLocation",
        value: function setLocation(loc) {
          this.location = loc;
          console.log(this.location, "service");
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          return this.location;
        }
      }, {
        key: "setProduct",
        value: function setProduct(pro) {
          this.product = pro;
          console.log(this.product, "service2");
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          return this.product;
        }
      }]);

      return ForcastServiceService;
    }();

    ForcastServiceService.ɵfac = function ForcastServiceService_Factory(t) {
      return new (t || ForcastServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ForcastServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ForcastServiceService,
      factory: ForcastServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForcastServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/incrementalsales-volume/incrementalsales-volume.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/incrementalsales-volume/incrementalsales-volume.component.ts ***!
    \******************************************************************************/

  /*! exports provided: IncrementalsalesVolumeComponent */

  /***/
  function srcAppIncrementalsalesVolumeIncrementalsalesVolumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncrementalsalesVolumeComponent", function () {
      return IncrementalsalesVolumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../details */
    "./src/app/details.ts");
    /* harmony import */


    var _forcast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../forcast-service.service */
    "./src/app/forcast-service.service.ts");
    /* harmony import */


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["fileImportInput"];

    var IncrementalsalesVolumeComponent =
    /*#__PURE__*/
    function () {
      function IncrementalsalesVolumeComponent(forcast, ngxCsvParser) {
        _classCallCheck(this, IncrementalsalesVolumeComponent);

        this.forcast = forcast;
        this.ngxCsvParser = ngxCsvParser;
        this.today = new Date();
        this.time = new Date().getTime;
        this.userforms = new _details__WEBPACK_IMPORTED_MODULE_2__["Details"]();
        this.totalsales = 0;
        this.basevolume = 0;
        this.incrementalsales = 0;
        this.lift = 0;
        this.tfv = 0;
        this.productsarray = [];
        this.uniqueproductsarray = [];
      }

      _createClass(IncrementalsalesVolumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var d = new _details__WEBPACK_IMPORTED_MODULE_2__["Details"]();
          d.data = Number(this.week);
          d.product = this.ProductValue[0];
          d.location = this.LocationValue[0];
          this.jsonObj = this.tempdata;
          this.jsonObj = this.tempdata;
          this.jsonObj.filter(function (f) {
            _this.productsarray.push(f.productcatogery);
          });
          console.log(this.productsarray, "productsarray");
          this.productsarray.forEach(function (c) {
            if (!_this.uniqueproductsarray.includes(c)) {
              _this.uniqueproductsarray.push(c);
            }
          });
          console.log(this.uniqueproductsarray, "uparray");
          this.jsonObj = this.jsonObj.filter(function (f) {
            return f.LocatHierachyNode == _this.LocationValue && f.productcatogery == _this.ProductValue;
          });
          this.jsonObj2 = this.jsonObj.filter(function (f) {
            return f.LocatHierachyNode == _this.LocationValue && f.productcatogery == _this.ProductValue;
          }); //&& f.productcatogery =="100 ML Butterscotch"

          this.jsonObj = this.jsonObj.filter(function (f) {
            return new Date(f.date) >= new Date(_this.startdate) && new Date(f.date) <= new Date(_this.enddate);
          });
          this.jsonObj.filter(function (f) {
            console.log(f.date2);
            _this.totalsales = _this.totalsales + Number(Number(f.date2).toFixed(2));
          });
          this.jsonObj.filter(function (f) {
            console.log(f.SeasonalVolume);
            _this.basevolume = _this.basevolume + Number(Number(f.SeasonalVolume).toFixed(2));
          });
          this.jsonObj.filter(function (f) {
            console.log(f.TotFactoredVolume);
            _this.tfv = _this.tfv + Number(Number(f.TotFactoredVolume).toFixed(2));
          });
          this.incrementalsales = this.totalsales - this.basevolume;
          this.lift = this.incrementalsales / this.basevolume;
          console.log(this.incrementalsales, "insales");
          console.log(this.tfv, "totfacvol");
          console.log(this.basevolume, "basevol");
          console.log(this.lift, "totsales");
          console.log(this.jsonObj, "dates");
          this.barChart();
        }
      }, {
        key: "fileChangeListener",
        value: function fileChangeListener($event) {
          var _this2 = this;

          var files = $event.srcElement.files;
          this.header = this.header === 'true' || this.header === true;
          this.ngxCsvParser.parse(files[0], {
            header: this.header,
            delimiter: ','
          }).pipe().subscribe(function (result) {
            console.log('Result', result); // this.csvRecords = result;

            _this2.arrayToJSONObject(result);
          }, function (error) {
            console.log('Error', error);
          });
        }
      }, {
        key: "arrayToJSONObject",
        value: function arrayToJSONObject(csvRecords) {
          //header
          var keys = csvRecords[0]; //vacate keys from main array

          var newArr = csvRecords.slice(1, csvRecords.length);
          var formatted = [],
              data = newArr,
              cols = keys,
              l = cols.length;

          for (var i = 0; i < data.length; i++) {
            var d = data[i],
                o = {};

            for (var j = 0; j < l; j++) {
              o[cols[j]] = d[j];
            }

            formatted.push(o);
          } //  this.location=this.forcast.getLocation();


          this.jsondata = JSON.stringify(formatted);
          console.log(data, "test");
          this.jsonObj = JSON.parse(this.jsondata);
          this.tempdata = this.jsonObj; // this.jsonObj=this.jsonObj.filter((f)=>{f.Loacation =="Banjara hills"})

          this.jsonObj2 = JSON.parse(this.jsondata);
          this.jsonObj.splice(0, this.jsonObj.length - this.n);
          this.jsonObj2.splice(0, this.jsonObj.length - this.n);
          console.log(this.jsonObj, "datatest");
          console.log(this.jsonObj, "datatest");
          console.log(this.forcast.getLocation(), "datatest2");
        }
      }, {
        key: "barChart",
        value: function barChart() {
          highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('barChart', {
            chart: {
              type: 'column'
            },
            title: {
              text: ''
            },
            xAxis: {
              categories: ['Total Volume', 'Basic Decomposition', '']
            },
            yAxis: {
              allowDecimals: false,
              min: 0,
              title: {
                text: ''
              }
            },
            plotOptions: {
              column: {
                stacking: 'normal'
              }
            },
            tooltip: {
              valueSuffix: ''
            },
            series: [{
              name: 'Total Factored Volume',
              type: undefined,
              data: [this.tfv, 0, 0],
              color: 'red'
            }, {
              name: 'Incremental Sales',
              type: undefined,
              data: [0, this.incrementalsales, 0],
              color: 'green'
            }, {
              name: 'Base Decomposition',
              type: undefined,
              data: [0, this.basevolume, 0],
              color: 'blue'
            }]
          });
          highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('barChart2', {
            chart: {
              type: 'column'
            },
            title: {
              text: ''
            },
            xAxis: {
              categories: ['Lift']
            },
            yAxis: {
              allowDecimals: false,
              min: 0,
              title: {
                text: ''
              }
            },
            plotOptions: {
              column: {
                stacking: 'normal'
              }
            },
            tooltip: {
              valueSuffix: ''
            },
            series: [{
              name: 'Lift (from promotion)',
              type: undefined,
              data: [this.lift],
              color: 'brown'
            }]
          });
        }
      }]);

      return IncrementalsalesVolumeComponent;
    }();

    IncrementalsalesVolumeComponent.ɵfac = function IncrementalsalesVolumeComponent_Factory(t) {
      return new (t || IncrementalsalesVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forcast_service_service__WEBPACK_IMPORTED_MODULE_3__["ForcastServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"]));
    };

    IncrementalsalesVolumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IncrementalsalesVolumeComponent,
      selectors: [["app-incrementalsales-volume"]],
      viewQuery: function IncrementalsalesVolumeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
        }
      },
      decls: 59,
      vars: 15,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=\n      , initial-scale=1.0"], [1, "title", "container-fluid"], [1, "col-sm-3", "col-md-6", "col-lg-7", "title_text"], [1, "col-5", "title_date"], [2, "padding-left", "112px"], [1, "charts", "col-lg-10"], ["type", "file", "name", "FileUpload", "id", "csvFileUpload", "accept", ".csv", 3, "change"], ["fileImportInput", ""], [1, ""], [1, "row"], [2, "margin", "30px"], ["id", "barChart", 2, "min-width", "600px", "max-width", "1000px", "height", "400px", "margin", "0 auto", "float", "left"], ["id", "barChart2", 2, "min-width", "200px", "margin-left", "101px!important", "max-width", "1000px", "height", "400px", "margin", "0 auto", "float", "left"], [1, "card-title", "text-center"], [1, "col-lg-2", 2, "margin-right", "0%", "position", "relative", "left", "-37px"], [1, "side_panel", "col-lg-2"], [2, "margin-top", "50px", "padding-right", "100px"], [2, "display", "block", "width", "max-content", "font-size", "14px"], ["type", "date", 3, "ngModel", "ngModelChange"], [2, "display", "block", "width", "max-content", "margin-top", "20px", "font-size", "14px"], ["novalidate", "", 3, "ngSubmit"], ["userform", "ngForm"], [2, "font-size", "18px!important"], [2, "font-size", "20px", "margin-top", "10px"], ["multiple", "", "name", "locations", 3, "ngModel", "ngModelChange"], ["value", "Banjara hills"], ["value", "KPHB"], ["value", "Panjagutta"], [2, "font-size", "20px"], ["multiple", "", "name", "products", 3, "ngModel", "ngModelChange"], ["value", "100 ML Butterscotch"], ["value", "250 ML Cornetto Snekers"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 2, "margin-top", "10vh"]],
      template: function IncrementalsalesVolumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Incremental sales volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IncrementalsalesVolumeComponent_Template_input_change_18_listener($event) {
            return ctx.fileChangeListener($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " start date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IncrementalsalesVolumeComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.startdate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "End date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IncrementalsalesVolumeComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.enddate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IncrementalsalesVolumeComponent_Template_form_ngSubmit_35_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "locations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IncrementalsalesVolumeComponent_Template_mat_select_ngModelChange_40_listener($event) {
            return ctx.LocationValue = $event;
          })("ngModelChange", function IncrementalsalesVolumeComponent_Template_mat_select_ngModelChange_40_listener($event) {
            return ctx.userforms.location = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Banjara hills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "KPHB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Panjagutta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IncrementalsalesVolumeComponent_Template_mat_select_ngModelChange_50_listener($event) {
            return ctx.ProductValue = $event;
          })("ngModelChange", function IncrementalsalesVolumeComponent_Template_mat_select_ngModelChange_50_listener($event) {
            return ctx.userforms.product = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ML Butterscotch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cornetto Snekers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, ctx.today, "dd-MM-yyyy "), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 11, ctx.today, "hh:mm:ss a", "+0530"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enddate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.LocationValue)("ngModel", ctx.userforms.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ProductValue)("ngModel", ctx.userforms.product);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: ["@media (min-width: 1200px)\r\n{\r\n.container[_ngcontent-%COMP%] {\r\n    width: 881px!important;\r\n}}\r\n.title[_ngcontent-%COMP%]\r\n{\r\n    background-color: darkgray;\r\n    font-size: 17px;\r\n    height: 10vh;\r\n}\r\n.title_text[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 30px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    \r\n}\r\n.title_date[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 33px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    font-family: system-ui;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jcmVtZW50YWxzYWxlcy12b2x1bWUvaW5jcmVtZW50YWxzYWxlcy12b2x1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQixDQUFDO0FBQ0Q7O0lBRUksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9pbmNyZW1lbnRhbHNhbGVzLXZvbHVtZS9pbmNyZW1lbnRhbHNhbGVzLXZvbHVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4ODFweCFpbXBvcnRhbnQ7XHJcbn19XHJcbi50aXRsZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGhlaWdodDogMTB2aDtcclxufVxyXG4udGl0bGVfdGV4dFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLyogZm9udC1mYW1pbHk6IHN5c3RlbS11aTsgKi9cclxufVxyXG4udGl0bGVfZGF0ZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncrementalsalesVolumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-incrementalsales-volume',
          templateUrl: './incrementalsales-volume.component.html',
          styleUrls: ['./incrementalsales-volume.component.css']
        }]
      }], function () {
        return [{
          type: _forcast_service_service__WEBPACK_IMPORTED_MODULE_3__["ForcastServiceService"]
        }, {
          type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParser"]
        }];
      }, {
        fileImportInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileImportInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product1/product1.component.ts":
  /*!************************************************!*\
    !*** ./src/app/product1/product1.component.ts ***!
    \************************************************/

  /*! exports provided: Product1Component */

  /***/
  function srcAppProduct1Product1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product1Component", function () {
      return Product1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../details */
    "./src/app/details.ts");
    /* harmony import */


    var _ForcastValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ForcastValues */
    "./src/app/ForcastValues.ts");
    /* harmony import */


    var _Forcasting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Forcasting */
    "./src/app/Forcasting.ts");
    /* harmony import */


    var _forcast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../forcast-service.service */
    "./src/app/forcast-service.service.ts");
    /* harmony import */


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["fileImportInput"];

    var Product1Component =
    /*#__PURE__*/
    function () {
      function Product1Component(forcast, ngxCsvParser) {
        _classCallCheck(this, Product1Component);

        this.forcast = forcast;
        this.ngxCsvParser = ngxCsvParser;
        this.newforcast = [];
        this.test = [];
        this.header = false;
        this.title = 'Line Chart';
        this.today = new Date();
        this.time = new Date().getTime;
        this.userforms = new _details__WEBPACK_IMPORTED_MODULE_2__["Details"]();
        this.csvRecords = [];
        this.jsonObj = [];
        this.jsonObj2 = [];
        this.margin = {
          top: 20,
          right: 20,
          bottom: 30,
          left: 50
        };
        this.n4 = [];
        this.n5 = [];
        this.width = 1300 - this.margin.left - this.margin.right;
        this.height = 600 - this.margin.top - this.margin.bottom;
      }

      _createClass(Product1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          var d = new _details__WEBPACK_IMPORTED_MODULE_2__["Details"]();
          d.data = Number(this.week);
          d.product = this.ProductValue[0];
          d.location = this.LocationValue[0];
          this.jsonObj = this.tempdata;
          this.jsonObj2 = this.tempdata;
          this.jsonObj = this.jsonObj.filter(function (f) {
            return f.LocatHierachyNode == _this3.LocationValue && f.productcatogery == _this3.ProductValue;
          });
          this.jsonObj2 = this.jsonObj2.filter(function (f) {
            return f.LocatHierachyNode == _this3.LocationValue && f.productcatogery == _this3.ProductValue;
          });
          this.forcast.enroll(d).subscribe(function (data) {
            console.log(data, "test");
            console.log(data[1], "test32");
            var temp1 = data[0];
            _this3.temp2 = data[1];
            _this3.temp3 = data[2];
            _this3.l = data.length;

            _this3.newforcast.push(_this3.jsonObj[_this3.jsonObj.length - 1]);

            for (_this3.j = 0, _this3.week = 1; _this3.j < data[1].length; _this3.j++) {
              var temparray = void 0;
              var forcast2 = new _ForcastValues__WEBPACK_IMPORTED_MODULE_3__["ForcastValues"]();
              var forcasting = new _Forcasting__WEBPACK_IMPORTED_MODULE_4__["Forcasting"]();
              forcasting.TotFactoredVolume = Math.round(temp1[_this3.j]).toString();
              forcast2.TotFactoredVolume = Math.round(temp1[_this3.j]).toString();
              var testDate = new Date("12-30-2019");
              var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000 * _this3.week;
              testDate.setTime(testDate.getTime() + weekInMilliseconds);
              var d5 = testDate;
              console.log(d5, "d5date");
              var monthNames = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "December"];
              var maxds = d5.getFullYear() + "-" + monthNames[d5.getMonth()] + "-" + d5.getDate();
              console.log(testDate, "date");
              forcast2.date = maxds;
              forcasting.date = maxds;

              _this3.newforcast.push(JSON.parse(JSON.stringify(forcasting)));

              _this3.jsonObj.push(JSON.parse(JSON.stringify(forcasting)));

              _this3.week++;
            }

            console.log(_this3.forcast.getDetails(), "getDetails");

            _this3.barChartPopulation();
          }, function (error) {
            return console.log('e', error);
          });
        }
      }, {
        key: "fileChangeListener",
        value: function fileChangeListener($event) {
          var _this4 = this;

          var files = $event.srcElement.files;
          this.header = this.header === 'true' || this.header === true;
          this.ngxCsvParser.parse(files[0], {
            header: this.header,
            delimiter: ','
          }).pipe().subscribe(function (result) {
            console.log('Result', result); // this.csvRecords = result;

            _this4.arrayToJSONObject(result);
          }, function (error) {
            console.log('Error', error);
          });
        }
      }, {
        key: "arrayToJSONObject",
        value: function arrayToJSONObject(csvRecords) {
          //header
          var keys = csvRecords[0]; //vacate keys from main array

          var newArr = csvRecords.slice(1, csvRecords.length);
          var formatted = [],
              data = newArr,
              cols = keys,
              l = cols.length;

          for (var i = 0; i < data.length; i++) {
            var d = data[i],
                o = {};

            for (var j = 0; j < l; j++) {
              o[cols[j]] = d[j];
            }

            formatted.push(o);
          }

          this.jsondata = JSON.stringify(formatted);
          console.log(data, "test");
          this.jsonObj = JSON.parse(this.jsondata);
          this.tempdata = this.jsonObj;
          this.jsonObj2 = JSON.parse(this.jsondata);
          this.jsonObj.splice(0, this.jsonObj.length - this.n);
          this.jsonObj2.splice(0, this.jsonObj.length - this.n);
          console.log(this.jsonObj, "datatest");
          console.log(this.jsonObj, "datatest");
          console.log(this.forcast.getLocation(), "datatest2");
        }
      }, {
        key: "barChartPopulation",
        value: function barChartPopulation() {
          var d = [];

          for (var i = 0; i < this.jsonObj.length; i++) {
            d.push(Number(this.jsonObj[i].TotFactoredVolume));
          }

          var n5 = [];
          var maxd = new Date(this.jsonObj[this.jsonObj.length - 1].date);
          var maxds = maxd.getFullYear() + "-" + (maxd.getMonth() + 1) + "-" + maxd.getDate();

          for (var i = 0; i < this.jsonObj.length; i++) {
            n5.push(new Date(this.jsonObj[i].date));
          }

          console.log(Date.UTC(2017, 0), "kg2");
          highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('barChart', {
            chart: {
              type: 'line'
            },
            title: {
              text: ''
            },
            xAxis: {
              categories: n5,
              type: 'datetime',
              plotLines: [{
                color: "blue",
                width: 2,
                value: this.jsonObj2.length - 1
              }]
            },
            tooltip: {
              valueSuffix: ''
            },
            series: [{
              type: undefined,
              name: 'data',
              //  pointStart: Date.UTC(2016, 11,0,0,0),
              //  pointIntervalUnit: 'year',
              data: d,
              zoneAxis: 'x',
              zones: [{
                value: this.jsonObj2.length - 1,
                color: "orange"
              }, {
                value: this.jsonObj.length - 1,
                color: "gray"
              }]
            }, {
              type: undefined,
              name: 'yhat lower',
              pointStart: this.jsonObj2.length - 1,
              //  pointIntervalUnit: 'year',
              data: this.temp2,
              zoneAxis: 'x',
              color: 'green'
            }, {
              type: undefined,
              name: 'yhat upper',
              pointStart: this.jsonObj2.length - 1,
              //  pointIntervalUnit: 'year',
              data: this.temp3,
              zoneAxis: 'x',
              color: 'red'
            }]
          });
        }
      }]);

      return Product1Component;
    }();

    Product1Component.ɵfac = function Product1Component_Factory(t) {
      return new (t || Product1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forcast_service_service__WEBPACK_IMPORTED_MODULE_5__["ForcastServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__["NgxCsvParser"]));
    };

    Product1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Product1Component,
      selectors: [["app-product1"]],
      viewQuery: function Product1Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
        }
      },
      decls: 58,
      vars: 15,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=\n      , initial-scale=1.0"], [1, "title", "container-fluid"], [1, "col-sm-3", "col-md-6", "col-lg-7", "title_text"], [1, "col-5", "title_date"], [2, "padding-left", "112px"], [1, "charts", "col-lg-10"], ["type", "file", "name", "FileUpload", "id", "csvFileUpload", "accept", ".csv", 3, "change"], ["fileImportInput", ""], [1, "container"], [1, "row"], [1, "col-sm", 2, "margin", "30px"], ["id", "barChart", 2, "min-width", "310px", "max-width", "1000px", "height", "400px", "margin", "0 auto"], [1, "card-title", "text-center"], [1, "col-lg-2", 2, "margin-left", "0%", "position", "relative", "left", "-37px"], [1, "side_panel", "col-lg-2"], [2, "margin-top", "50px"], ["novalidate", "", 3, "ngSubmit"], ["userform", "ngForm"], [2, "font-size", "18px!important"], [2, "font-size", "20px"], ["multiple", "", "name", "locations", 3, "ngModel", "ngModelChange"], ["value", "Banjara hills"], ["value", "KPHB"], ["value", "Panjagutta"], ["multiple", "", "name", "products", 3, "ngModel", "ngModelChange"], ["value", "100 ML Butterscotch"], ["value", "250 ML Cornetto Snekers"], [2, "margin-top", "50px", "font-size", "14px", "font-weight", "700", "display", "block", "width", "max-content"], ["type", "text", "name", "weeks", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 2, "margin-top", "15vh"]],
      template: function Product1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Time series forecasting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Product1Component_Template_input_change_20_listener($event) {
            return ctx.fileChangeListener($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Product1Component_Template_form_ngSubmit_30_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "locations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Product1Component_Template_mat_select_ngModelChange_35_listener($event) {
            return ctx.LocationValue = $event;
          })("ngModelChange", function Product1Component_Template_mat_select_ngModelChange_35_listener($event) {
            return ctx.userforms.location = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Banjara hills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "KPHB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Panjagutta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Product1Component_Template_mat_select_ngModelChange_45_listener($event) {
            return ctx.ProductValue = $event;
          })("ngModelChange", function Product1Component_Template_mat_select_ngModelChange_45_listener($event) {
            return ctx.userforms.product = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ML Butterscotch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cornetto Snekers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Future Forcast Weeks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Product1Component_Template_input_ngModelChange_53_listener($event) {
            return ctx.userforms.data = $event;
          })("ngModelChange", function Product1Component_Template_input_ngModelChange_53_listener($event) {
            return ctx.week = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 8, ctx.today, "dd-MM-yyyy "), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 11, ctx.today, "hh:mm:ss a", "+0530"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.LocationValue)("ngModel", ctx.userforms.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ProductValue)("ngModel", ctx.userforms.product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userforms.data)("ngModel", ctx.week);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
      styles: [".title[_ngcontent-%COMP%]\r\n{\r\n    background-color: darkgray;\r\n    font-size: 17px;\r\n    height: 10vh;\r\n}\r\n.title_text[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 30px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    \r\n}\r\n.title_date[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 33px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    font-family: system-ui;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdDEvcHJvZHVjdDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QxL3Byb2R1Y3QxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLnRpdGxlX3RleHRcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7ICovXHJcbn1cclxuLnRpdGxlX2RhdGVcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzNweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product1',
          templateUrl: './product1.component.html',
          styleUrls: ['./product1.component.css']
        }]
      }], function () {
        return [{
          type: _forcast_service_service__WEBPACK_IMPORTED_MODULE_5__["ForcastServiceService"]
        }, {
          type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__["NgxCsvParser"]
        }];
      }, {
        fileImportInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileImportInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product2/product2.component.ts":
  /*!************************************************!*\
    !*** ./src/app/product2/product2.component.ts ***!
    \************************************************/

  /*! exports provided: Product2Component */

  /***/
  function srcAppProduct2Product2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product2Component", function () {
      return Product2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Product2Component =
    /*#__PURE__*/
    function () {
      function Product2Component() {
        _classCallCheck(this, Product2Component);
      }

      _createClass(Product2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Product2Component;
    }();

    Product2Component.ɵfac = function Product2Component_Factory(t) {
      return new (t || Product2Component)();
    };

    Product2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Product2Component,
      selectors: [["app-product2"]],
      decls: 2,
      vars: 0,
      template: function Product2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product2 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QyL3Byb2R1Y3QyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product2',
          templateUrl: './product2.component.html',
          styleUrls: ['./product2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Mahi\Desktop\TPO6\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map