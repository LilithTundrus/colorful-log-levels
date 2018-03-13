'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs = __importStar(require("fs"));
// TODO: Create a color selector for the user
// TODO: Add a console.time wrapper!
var Logger = /** @class */ (function () {
    function Logger(outputDir, logLevel, writeToFile) {
        this.outputDir = outputDir;
        this.writeToFile = writeToFile;
        this.logLevel = logLevel;
    }
    // Accepts arrays or a single string. Supports template literals
    Logger.prototype.debug = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (this.logLevel >= 0) {
            message.map(function (element) {
                console.log(chalk_1.default.yellow('DEBUG:') + " " + element);
            });
            if (this.writeToFile) {
                var logMsg = "\n" + new Date().toISOString() + ": \n\tDEBUG: " + message.join("\n\tDEBUG: ");
                return fs.appendFile(this.outputDir + "/debug.log", logMsg, function (err) {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    };
    Logger.prototype.info = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (this.logLevel >= 1) {
            message.map(function (element) {
                console.log(chalk_1.default.greenBright('INFO:') + " " + element);
            });
            if (this.writeToFile) {
                var logMsg = "\n" + new Date().toISOString() + ": \n\tINFO: " + message.join("\n\tINFO: ");
                return fs.appendFile(this.outputDir + "/info.log", logMsg, function (err) {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    };
    Logger.prototype.db = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (this.logLevel >= 2) {
            message.map(function (element) {
                console.log(chalk_1.default.blueBright('DB:') + " " + element);
            });
            if (this.writeToFile) {
                var logMsg = "\n" + new Date().toISOString() + ": \n\tDB: " + message.join("\n\tDB: ");
                return fs.appendFile(this.outputDir + "/db.log", logMsg, function (err) {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    };
    Logger.prototype.auth = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (this.logLevel >= 3) {
            message.map(function (element) {
                console.log(chalk_1.default.magentaBright('AUTH:') + " " + element);
            });
            if (this.writeToFile) {
                var logMsg = "\n" + new Date().toISOString() + ": \n\tAUTH: " + message.join("\n\tAUTH: ");
                return fs.appendFile(this.outputDir + "/auth.log", logMsg, function (err) {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    };
    Logger.prototype.warn = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (this.logLevel >= 4) {
            message.map(function (element) {
                console.log(chalk_1.default.yellowBright('WARN:') + " " + element);
            });
            if (this.writeToFile) {
                var logMsg = "\n" + new Date().toISOString() + ": \n\tWARN: " + message.join("\n\tWARN: ");
                return fs.appendFile(this.outputDir + "/warn.log", logMsg, function (err) {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    };
    Logger.prototype.error = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        if (this.logLevel >= 5) {
            message.map(function (element) {
                console.log(chalk_1.default.red('ERROR:') + " " + (element && element.stack ? element.message + "\n" + element.stack : element.toString()));
            });
            if (this.writeToFile) {
                var logMsg = "\n" + new Date().toISOString() + ": \n\tERROR: " + message.join("\n\tERROR: ");
                return fs.appendFile(this.outputDir + "/error.log", logMsg, function (err) {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    };
    return Logger;
}());
exports.default = Logger;
