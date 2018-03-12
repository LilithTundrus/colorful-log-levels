
import Logger from './logger';
import { logLevels } from './enuns';

let logger = new Logger('./logs', logLevels.debug, false)


logger.debug(`BEH ${5 + 1}`)
logger.debug('beh', 'BEH')