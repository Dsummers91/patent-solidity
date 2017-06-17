webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 116;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(209),
        styles: [__webpack_require__(202)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patent_list_patent_list_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_service_patent_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__patent_patent_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__patent_list_patent_list_component__["a" /* PatentListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__patent_patent_component__["a" /* PatentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* appRoutes */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_app_shared_service_patent_service__["a" /* PatentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patent_list_patent_list_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patent_patent_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__patent_list_patent_list_component__["a" /* PatentListComponent */]
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_1__patent_patent_component__["a" /* PatentComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Blockchain Patent</h1>\n\n<table class=\"table table-bordered text-center table-striped\">\n  <thead>\n    <tr>\n      <th class=\"text-center\">Patents ID</th>\n      <th class=\"text-center\">Abstract</th>\n      <th class=\"text-center\">Date Created</th>\n      <th class=\"text-center\">Status</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"patents\">\n    <tr *ngFor=\"let patent of patents\" (click)=\"goToPatent(patent.args.patentAddress)\">\n      <td>{{patent.args.patentID}}</td>\n      <td>{{patent.args.patentAbstract}}</td>\n      <td>{{patent.date}}</td>\n      <td>{{state[patent.state]}}</td>\n      <td><button class=\"btn btn-info btn-sm btn-small\">GO</button></td>\n    </tr>\n  </tbody>\n</table>\n<br>\n\n<h2 class=\"text-center\">Create Patent Contract</h2>\n<div class=\"col-xs-6 col-xs-offset-3\">\n  <div class=\"form-group row\">\n  <label  class=\"col-2 col-form-label\">ID</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"create.name\" class=\"form-control\" type=\"text\" value=\"\" id=\"example-text-input\">\n  </div>\n  <label  class=\"col-2 col-form-label\">Inventors</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"create.inventors\" class=\"form-control\" type=\"text\" value=\"\" id=\"example-text-input\">\n  </div>\n  <label  class=\"col-2 col-form-label\">Abstract</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"create.abstract\" class=\"form-control\" type=\"text\" value=\"\" id=\"example-text-input\">\n  </div>\n  <label  class=\"col-2 col-form-label\">Description</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"create.description\" class=\"form-control\" type=\"text\" value=\"\" id=\"example-text-input\">\n  </div>\n  <label  class=\"col-2 col-form-label\">Url</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"create.url\" class=\"form-control\" type=\"text\" value=\"\" id=\"example-text-input\">\n  </div>\n</div>\n</div>\n<br>\n<div class=\"clearfix\"></div>\n<div class=\"text-center\">\n  <button (click)=\"createPatent('2')\" class=\"btn btn-primary\" type=\"submit\">Create</button>\n</div>"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title text-center\">{{patent.patentNumber}}</h1>\n<div class=\"col-xs-offset-2 col-xs-8\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>State</th>\n        <th>ID</th>\n        <th>Descrption</th>\n        <th>URL</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{patent.state}}</td>\n        <td>{{patent.patentNumber}}</td>\n        <td>{{patent.patentDescription}}</td>\n        <td><a [attr.href]=\"patent.url\">link</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div><div class=\"clearfix\"></div>\n<h3 class=\"text-center\">Minimum Bid: {{patent.minimumBid}}</h3>, \n<h3 class=\"text-center\">Highest Bid: {{patent.highestBid}}</h3>, \n<div class=\"clearfix\"></div>\n<br>\n<h2 class=\"text-center\">Bidder Methods</h2>\n<div class=\"container text-center\">\n  <div class=\"col-xs-offset-2 col-xs-4\">\n    <div class=\"input-group\">\n      <span class=\"btn btn-primary text-center\" class=\"input-group-addon\" id=\"btnGroupAddon\">Name</span>\n      <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Bidder Name\">\n    </div>\n    <button class=\"btn btn-default text-center\"  (click)=\"registerForBidding(name)\">Register</button>\n  </div>\n  <div class=\"col-xs-4\">\n    <div class=\"input-group\">\n      <span class=\"btn btn-primary text-center\" class=\"input-group-addon\" id=\"btnGroupAddon\">Ether</span>\n      <input [(ngModel)]=\"amount\" type=\"number\" class=\"form-control\" placeholder=\"Amount In ether\">\n    </div>\n    <button class=\"btn btn-default text-center\"  (click)=\"bid(amount)\">Bid</button>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n<br>\n<h2 class=\"text-center\">Owner Methods</h2>\n<div class=\"container text-center\">\n  <button class=\"btn btn-success text-center\" (click)=\"openBidding()\">Open For Bidding</button>\n  <button class=\"btn btn-warning text-center\" (click)=\"closeBidding()\">Close Bidding</button>\n</div>\n<h2 class=\"text-center\">Post Auction Methods</h2>\n<div class=\"container text-center\">\n  <button class=\"btn btn-success text-center\" (click)=\"confirmPatent()\">Confirm Patent</button>\n  <button class=\"btn btn-warning text-center\" (click)=\"refundBid()\">Refund Bids</button>\n  <button class=\"btn btn-info text-center\" (click)=\"bidderApproveContract()\">Approve Contract</button>\n  <button class=\"btn btn-danger text-center\" (click)=\"dispute()\">Dispute</button>\n</div>\n<h2 class=\"text-center\">Mediator Methods</h2>\n<div class=\"container text-center\">\n  <button class=\"btn btn-success text-center\" (click)=\"approveContract()\">Approve Contract</button>\n  <button class=\"btn btn-danger text-center\" (click)=\"nullifyContract()\">Nullify Contract</button>\n</div>\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatentService = (function () {
    function PatentService(http) {
        this.http = http;
    }
    PatentService.prototype.getPatentContract = function (web3) {
        if (__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].production) {
            return this.http.get('./patentlibrary.json')
                .map(function (response) { return response.json(); });
        }
        return this.http.get('http://127.0.0.1:8000/patentlibrary')
            .map(function (response) { return response.json(); });
    };
    PatentService.prototype.getPatent = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].production) {
            return this.http.get('./patent.json')
                .map(function (response) { return response.json(); });
        }
        return this.http.get('http://127.0.0.1:8000/patent')
            .map(function (response) { return response.json(); });
    };
    return PatentService;
}());
PatentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PatentService);

var _a;
//# sourceMappingURL=patent.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_service_patent_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatentListComponent = (function () {
    function PatentListComponent(patentService, router) {
        this.patentService = patentService;
        this.router = router;
        this.patents = [];
        this.state = ['Closed', 'OpenForBidding', 'Escrow', 'Dispute'];
        this.create = { url: 'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain' };
    }
    PatentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        if (typeof window.web3 !== 'undefined') {
            this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3__(window.web3.currentProvider);
        }
        else {
            this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3__(new __WEBPACK_IMPORTED_MODULE_3_web3__["providers"].HttpProvider("http://localhost:8545"));
        }
        this.patentService.getPatentContract(this.web3)
            .subscribe(function (lib) {
            _this.library = _this.web3.eth.contract(lib.abi).at('0x68cb2bab4308f9c3b2d51e608d92a4474f14ed50');
            window.lib = _this.library;
            _this.getContracts();
        });
        setInterval(function () {
            _this.patents = _this.patents || [];
        }, 2000);
        window.web3 = this.web3;
        window.createPatent = this.createPatent;
    };
    PatentListComponent.prototype.getContracts = function () {
        var _this = this;
        var events = this.library.patentCreated({}, { fromBlock: 1135160, toBlock: 'latest' });
        events.watch(function (err, r) {
            r.date = new Date(r.args.date * 1000);
            _this.patentService.getPatent()
                .subscribe(function (pat) {
                var patent = _this.web3.eth.contract(pat.abi).at(r.args.patentAddress);
                patent._state(function (err, res) {
                    r.state = res;
                });
                window.patent = patent;
            });
            _this.patents.push(r);
        });
    };
    PatentListComponent.prototype.ngOnDestroy = function () {
    };
    PatentListComponent.prototype.goToPatent = function (id) {
        this.router.navigate(["./" + id]);
    };
    PatentListComponent.prototype.getPatent = function (patent) {
        this.library.getPatentById.call("33", function (err, res) {
            if ('' + res == '0x0000000000000000000000000000000000000000' || '' + res == '0x') {
                console.log('created');
                return false;
            }
            else {
                console.log('not created');
            }
        });
    };
    PatentListComponent.prototype.createPatent = function (id) {
        var _this = this;
        this.library.createPatent.sendTransaction(this.create.name, this.create.description, this.create.abstract, this.create.inventors, this.create.url, { from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
            _this.create = {};
        });
    };
    return PatentListComponent;
}());
PatentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-patent-list',
        template: __webpack_require__(210),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_service_patent_service__["a" /* PatentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_service_patent_service__["a" /* PatentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PatentListComponent);

var _a, _b;
//# sourceMappingURL=patent-list.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_service_patent_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatentComponent = (function () {
    function PatentComponent(patentService, route) {
        this.patentService = patentService;
        this.route = route;
        this.patent = {};
        this.patentContract = {};
        this.state = ['Closed', 'OpenForBidding', 'Escrow', 'Dispute'];
    }
    PatentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof window.web3 !== 'undefined') {
            this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3__(window.web3.currentProvider);
        }
        else {
            this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3__(new __WEBPACK_IMPORTED_MODULE_3_web3__["providers"].HttpProvider("http://localhost:8545"));
        }
        window.web3 = this.web3;
        this.updatePatent();
        setTimeout(function () {
            _this.patent = _this.patent || {};
        }, 500);
        this.updatePatent();
        this.patent = this.patent || {};
        this.interval = setInterval(function () {
            _this.updatePatent();
            _this.patent = _this.patent || {};
        }, 2500);
    };
    PatentComponent.prototype.updatePatent = function () {
        var _this = this;
        this.patentService.getPatent()
            .subscribe(function (pat) {
            var patent = _this.web3.eth.contract(pat.abi).at(_this.route.snapshot.params['id']);
            patent._state(function (err, res) {
                _this.patent.state = _this.state[res];
            });
            patent._owner(function (err, res) {
                _this.patent.owner = res;
            });
            patent._patentDescription(function (err, res) {
                _this.patent.patentDescription = res;
            });
            patent._patentNumber(function (err, res) {
                _this.patent.patentNumber = res;
            });
            patent._patentUrl(function (err, res) {
                _this.patent.url = res;
            });
            patent._minimumBid(function (err, res) {
                _this.patent.minimumBid = _this.web3.fromWei(res, 'ether');
            });
            patent._highestBid(function (err, res) {
                _this.patent.highestBid = _this.web3.fromWei(res, 'ether');
            });
            _this.patentContract = patent;
            window.p = patent;
        });
    };
    PatentComponent.prototype.ngOnDestroy = function () {
        // this.interval.clearInterval();
    };
    PatentComponent.prototype.closeBidding = function () {
        this.patentContract.closeBidding({ from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(res);
        });
    };
    PatentComponent.prototype.openBidding = function () {
        this.patentContract.openBidding(2, this.web3.toWei(2, 'ether'), { from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(res);
        });
    };
    PatentComponent.prototype.confirmPatent = function (name) {
        var amount = this.web3.toWei(.001, 'ether');
        this.patentContract.confirmPatent({ value: amount, from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.registerForBidding = function (name) {
        console.log(name);
        this.patentContract.registerForBidding(name, { from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.dispute = function () {
        this.patentContract.dispute({ from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.nullifyContract = function () {
        this.patentContract.nullifyContract({ from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.approveContract = function () {
        this.patentContract.approveContract({ from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.bidderApproveContract = function () {
        this.patentContract.bidderApproveContract({ from: window.web3.eth.coinbase, gas: 4000000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.bid = function (amount) {
        amount = this.web3.toWei(amount, 'ether');
        this.web3.eth.sendTransaction({ to: this.patentContract.address, from: this.web3.eth.coinbase, value: amount, gas: 400000 }, function (err, res) {
            console.log(err, res);
        });
    };
    PatentComponent.prototype.refundBid = function () {
        this.patentContract.refundBid({ from: window.web3.eth.coinbase, gas: 3000000 }, function (err, res) {
            console.log(res);
        });
    };
    return PatentComponent;
}());
PatentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-patent',
        template: __webpack_require__(211),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_service_patent_service__["a" /* PatentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_service_patent_service__["a" /* PatentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], PatentComponent);

var _a, _b;
//# sourceMappingURL=patent.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    patentLibrary: '0x8d70a269afb234f69f84388170f52689c7b6d466'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.bundle.js.map