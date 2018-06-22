import { logLevels } from './enums';
export default class Logger {
    private outputDir;
    private writeToFile;
    private logLevel;
    constructor(outputDir: string, logLevel: logLevels, writeToFile?: boolean);
    debug(...message: Array<any | string>): void;
    info(...message: Array<any | string>): void;
    db(...message: Array<any | string>): void;
    auth(...message: Array<any | string>): void;
    warn(...message: Array<any | string>): void;
    error(...message: Array<any | Error>): void;
}
