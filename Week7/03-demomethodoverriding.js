"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.element_find = "Hint Message";
        this.element_type = "Submit Button";
    }
    BasePage.prototype.findElement = function (searchElement) {
        return searchElement = this.element_find;
    };
    BasePage.prototype.clickElement = function (element) {
        return element = this.element_type;
    };
    BasePage.prototype.enterText = function () {
        console.log("Good to understand the concepts");
    };
    BasePage.prototype.performCommonTasks = function (element_type) {
        console.log("".concat(this.clickElement(element_type), " has not been clicked yet"));
    };
    return BasePage;
}());
exports.BasePage = BasePage;
var base_obj = new BasePage();
base_obj.performCommonTasks(base_obj.element_type);
