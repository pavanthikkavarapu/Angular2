"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/observable/interval");
var TestComponent = (function () {
    function TestComponent() {
        this.number = 100;
        this.todayDate = new Date();
        this.var_one = 0.99;
        this.var_two = 9.1244;
        this.count = Rx_1.Observable.interval(2000);
        this.name = 'hello';
        this.name_one = 'HELLO';
        this.array = [10, 20, 30, 40, 50];
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "UI/test.html"
    })
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map