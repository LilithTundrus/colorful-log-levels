'use strict';
exports.__esModule = true;
var chalk_1 = require("chalk");
var Logger = /** @class */ (function () {
    function Logger(outputDir) {
        this.outputDir = outputDir;
    }
    Logger.prototype.test = function (message) {
        console.log(typeof (message));
        if (typeof (message) == 'string') {
            console.log(chalk_1["default"].blueBright(message));
        }
    };
    return Logger;
}());
exports["default"] = Logger;
