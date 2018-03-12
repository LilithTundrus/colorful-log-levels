'use strict';
import chalk from 'chalk';
import * as fs from 'fs';
import { logLevels } from './enuns';

// Create a subscriber level

export default class Logger {
    private outputDir: string;
    private writeToFile: boolean;
    private logLevel: logLevels;
    constructor(outputDir: string, logLevel: logLevels, writeToFile?: boolean) {
        this.outputDir = outputDir;
        this.writeToFile = writeToFile;
        this.logLevel = logLevel
    }

    // Accepts arrays or a single string. Supports template literals
    debug(...message: string[]) {
        if (this.logLevel >= 0) {
            message.map((element) => {
                console.log(chalk.yellowBright(`DEBUG: ${element}`));
            });
            if (this.writeToFile) {
                let logMsg = `\n${new Date().toISOString()}: \n\tDEBUG: ${message.join(`\n\tDEBUG: `)}`;
                return fs.appendFile(`${this.outputDir}/debug.log`, logMsg, (err) => {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    }

    info(...message: string[]) {
        if (this.logLevel >= 1) {
            message.map((element) => {
                console.log(chalk.greenBright(`DEBUG: ${element}`));
            });
            if (this.writeToFile) {
                let logMsg = `\n${new Date().toISOString()}: \n\tINFO: ${message.join(`\n\tINFO: `)}`;
                return fs.appendFile(`${this.outputDir}/info.log`, logMsg, (err) => {
                    if (err) {
                        throw (err);
                    }
                });
            }
        }
    }
}