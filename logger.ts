'use strict';
import chalk from 'chalk'


export default class Logger {
    private outputDir: string
    constructor(outputDir: string) {
        this.outputDir = outputDir;
    }

    // Accepts arrays or a single string. Supports template literals
    test(message: string[] | string) {
        console.log(typeof (message))
        if (typeof (message) == 'string') {
            console.log(chalk.blueBright(message))
        }
    }
}