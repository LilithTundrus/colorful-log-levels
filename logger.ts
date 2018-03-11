'use strict';
import chalk from 'chalk'


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
        console.log(typeof (message))
        if (typeof (message) == 'string') {
            console.log(chalk.yellowBright(`DEBUG: ${message}`));
        }
    }
}