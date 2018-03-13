# colorful-log-levels

[![Build Status](https://travis-ci.org/LilithTundrus/logger-ts.svg?branch=master)](https://travis-ci.org/LilithTundrus/logger-ts)

## About

This is a really basic logging tool, still in development.



## Why use this?

This is a very small and basic logging tool to give your logging some readability and tracability. Based on the native console.log node.js.

## Getting Started

This project is available via NPM:

```
npm install --save colorful-log-levels
```

You should have `Node 6.11` and `tsc 2.1` or higher to be safely running this.

**For TypeScript setup is simple:**

```typescript
import Logger from 'colorful-log-levels';
import { logLevels } from 'colorful-log-levels/enums';

// First argument is the directory you want the logger to write files to
// Second is the level you want to subscribe to 
// Last argument is if you want logs to be written to file
let logger = new Logger('./logs', logLevels.error, true);

let test = `${6+1}`
// Template literals are supported
logger.debug(`Test`);
// So are indefinite arguments (rest params)
logger.debug(test, 'Debug message');

// Errors are marked as 'any' but support native errors AND custom strings
logger.error('Very bad!!');
logger.error(Error('Oh no!!!!'), new Error('ALSO VERY BAD'));
```

**For JS requires slightly different:**

```javascript
const Logger = require('colorful-log-levels').default;
let logLevels = require('colorful-log-levels/enums').logLevels;

// First argument is the directory you want the logger to write files to
// Second is the level you want to subscribe to 
// Last argument is if you want logs to be written to file
let logger = new Logger('./logs', logLevels.error, true);

let test = `${6+1}`
// Template literals are supported
logger.debug(`Test`);
// So are indefinite arguments (rest params)
logger.debug(test, 'Debug message');
```

## Issues

Do you have any issues or recommendations for this package? Feel free to open an issue in the [issue](https://github.com/LilithTundrus/colorful-log-levels/issues) section. I'm always happy to help :D


## License

This project is licensed under the MIT License - see the LICENSE.md file for details