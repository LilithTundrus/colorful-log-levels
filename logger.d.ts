import { logLevels } from './enums';
export default class Logger {
    private outputDir;
    private writeToFile;
    private logLevel;
    constructor(outputDir: string, logLevel: logLevels, writeToFile?: boolean);
    debug(...message: string[]): void;
    info(...message: string[]): void;
    db(...message: string[]): void;
    auth(...message: string[]): void;
    warn(...message: string[]): void;
    error(...message: Array<any | Error>): void;
}
