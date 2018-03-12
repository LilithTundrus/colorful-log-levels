
import Logger from './logger';
import { logLevels } from './enuns';

let logger = new Logger('./logs', logLevels.info, true)


logger.debug(`BEH ${5 + 1}`)
logger.debug('beh', 'BEH')

logger.info('THIS IS INFORMATION', 'THIS IS ALSO INFO')