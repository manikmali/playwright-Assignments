"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var overLoading = /** @class */ (function () {
    function overLoading() {
    }
    overLoading.prototype.reportStep = function (message, status, takeSnapshot) {
        console.log("Hello! ", message);
        if (status != undefined) {
            console.log("Current Status is ".concat(status));
        }
        if (takeSnapshot == false) {
            console.log("Please don't take the Snapshot");
        }
        else if (takeSnapshot) {
            console.log("Please take the Snapshot");
        }
        console.log("================================");
    };
    return overLoading;
}());
var ob = new overLoading();
ob.reportStep('Manikandan');
ob.reportStep('Manikandan', 'Fail');
ob.reportStep('Manikandan', 'Pass', true);
