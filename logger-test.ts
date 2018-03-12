
import Logger from './logger';

let logger = new Logger('./logs', false)


logger.debug(`BEH ${5+1}`)
logger.debug('beh', 'BEH')