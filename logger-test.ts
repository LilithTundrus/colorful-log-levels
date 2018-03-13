
import Logger from './logger';
import { logLevels } from './enuns';

let logger = new Logger('./logs', logLevels.error, true);

// Template literals are supported
logger.debug(`Test`);
// So are indefinite arguments (rest params)
logger.debug('beh', 'BEH');

logger.info('THIS IS INFORMATION', 'THIS IS ALSO INFO');

logger.db('DB ACCESS!');

logger.db(`Accessed at ${new Date().toTimeString()}`, 'AAAAA');

logger.auth('A person did a thing!');
logger.auth('a person did ANOTHER thing', 'And this too!');

logger.warn('Bad thing ooh!');
logger.warn('More bad', 'Oh no!');

logger.error('Very bad!!');
logger.error(Error('Oh no!!!!'), new Error('ALSO VERY BAD'));