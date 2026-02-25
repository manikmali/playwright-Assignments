"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _03_demomethodoverriding_1 = require("./03-demomethodoverriding");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element_type = "Check Box";
        return _this;
    }
    LoginPage.prototype.performCommonTasks = function (element_type) {
        console.log("".concat(this.element_find, " has been found"));
        console.log("".concat(element_type, " has been clicked successffuly"));
        this.enterText();
    };
    return LoginPage;
}(_03_demomethodoverriding_1.BasePage));
var sub_ob = new LoginPage();
console.log("-----------------------------------");
console.log("-----------------------------------");
sub_ob.performCommonTasks(sub_ob.element_type);
