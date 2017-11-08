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
var app_service_1 = require("./app.service");
var CrisisListComponent = (function () {
    function CrisisListComponent(__myService) {
        var _this = this;
        this.__myService = __myService;
        this.var_one = {};
        __myService.getEmpData().subscribe(function (res) { return _this.var_one = res; });
    }
    return CrisisListComponent;
}());
CrisisListComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>{{var_one | json}}</h2>\n    ",
        providers: [app_service_1.MyService]
    }),
    __metadata("design:paramtypes", [app_service_1.MyService])
], CrisisListComponent);
exports.CrisisListComponent = CrisisListComponent;
//# sourceMappingURL=page_one.component.js.map