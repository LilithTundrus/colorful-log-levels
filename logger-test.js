"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var enuns_1 = require("./enuns");
var logger = new logger_1.default('./logs', enuns_1.logLevels.error, true);
// Template literals are supported
logger.debug("Test");
// So are indefinite arguments (rest params)
logger.debug('beh', 'BEH');
logger.info('THIS IS INFORMATION', 'THIS IS ALSO INFO');
logger.db('DB ACCESS!');
logger.db("Accessed at " + new Date().toTimeString(), 'AAAAA');
logger.auth('A person did a thing!');
logger.auth('a person did ANOTHER thing', 'And this too!');
logger.warn('Bad thing ooh!');
logger.warn('More bad', 'Oh no!');
logger.error('Very bad!!');
logger.error(Error('Oh no!!!!'), new Error('ALSO VERY BAD'));
