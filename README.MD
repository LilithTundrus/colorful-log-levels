# logger-ts

[![Build Status](https://travis-ci.org/LilithTundrus/logger-ts.svg?branch=master)](https://travis-ci.org/LilithTundrus/logger-ts)

## About

This is a really basic logging tool, still in development.


## Getting Started

This project is available via NPM:

```
npm install logger-ts--save
```

You should have `Node 6.11` and `tsc 2.1` or higher to be safely running this.

**For TypeScript setup is simple:**

```typescript
import Logger from 'logger-ts';
import { logLevels } from 'logger-ts/build/enums';

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



