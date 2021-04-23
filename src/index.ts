import logger from './tools/logger';
import app from './app';

app.listen(app.get('port'));

logger.info(`server on port ${app.get('port')} `);
