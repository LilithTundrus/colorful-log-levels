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
                if (this.writeToFile) {
                    let logMsg = `\n${new Date().toISOString()}: ${element}`;
                    return fs.appendFile(`${this.outputDir}/debug.log`, `DEBUG: ${message}\n`, (err) => {
                        if (err) {
                            throw (err);
                        }
                    });
                }
            });
        }
    }

    info(...message: string[]) {
        if (this.logLevel >= 1) {
            message.map((element) => {
                console.log(chalk.greenBright(`INFO: ${element}`));
                if (this.writeToFile) {
                    let logMsg = `\n${new Date().toISOString()}: ${element}`;
                    return fs.appendFile(`${this.outputDir}/info.log`, `INFO: ${message}\n`, (err) => {
                        if (err) {
                            throw (err);
                        }
                    });
                }
            });
        }
    }
}