"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/observable/interval");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.count = Rx_1.Observable.interval(1000);
        this.date = new Date();
        this.name = "hello";
        this.name1 = "HELLO";
        this.amount = 100;
        this.array = [{ 'id': 1, 'name': 'Hello_1', 'age': 20 },
            { 'id': 2, 'name': 'Hello_2', 'age': 22 },
            { 'id': 3, 'name': 'Hello_3', 'age': 24 },
            { 'id': 4, 'name': 'Hello_4', 'age': 26 },
            { 'id': 5, 'name': 'Hello_5', 'age': 28 }
        ];
        this.grade = 0.99;
        this.rating = 9.1234;
        this.countDown = 5;
        this.message = "Happy birthday!";
        this.countCompleted = false;
        this.count$ = Rx_1.Observable
            .interval(1000)
            .map(function (i) { return _this.countDown - i; })
            .takeWhile(function (i) { return i > 0; })
            .finally(function () { return _this.countCompleted = true; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'UI/pipes.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map