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
    debug(message: string[] | string) {
        if (typeof (message) == 'string') {
            console.log(chalk.yellowBright(`DEBUG: ${message}`));
        } else if (typeof (message) == 'object') {
            message.map(function (element) {
                console.log(chalk.yellowBright(`DEBUG: ${element}`))
            })
        }
        return fs.appendFile(`${this.outputDir}/debug.log`, `DEBUG: ${message}\n`, (err) => {
            if (err) {
                throw (err);
            }
        })

    }
}