'use strict';
import chalk from 'chalk'
import * as fs from 'fs';

// Create a subscriber level

export default class Logger {
    private outputDir: string;
    private writeToFile: boolean;
    constructor(outputDir: string, writeToFile?: boolean) {
        this.outputDir = outputDir;
        this.writeToFile = writeToFile;
    }

    // Accepts arrays or a single string. Supports template literals
    debug(...message: string[]) {
        message.map((element) => {
            console.log(chalk.yellowBright(`DEBUG: ${element}`));
            if (this.writeToFile) {
                let logMsg = `\n${new Date().toISOString()}: ${element}`;
                return fs.appendFile(`${this.outputDir}/debug.log`, `DEBUG: ${message}\n`, (err) => {
                    if (err) {
                        throw (err);
                    }
                })
            }
        })
    }
}