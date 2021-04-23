import * as dolarData from '../tools/getDolarData';
import * as managerData from '../tools/saveData';
import * as formatDate from '../tools/formatDate';
import logger from '../tools/logger';

test('test dolar', async (): Promise<void> => {
  const date = new Date();
  const dateFormat = formatDate.formatDate(date);
  const data = await dolarData.getDolarDay(dateFormat);

  if (data) await managerData.saveDateDb(data, 'dolar');
});

test('test Get money', async (): Promise<void> => {
  const date = new Date();
  const dateFormat = formatDate.formatDate(date);
  const data = await managerData.getDataCollection(dateFormat, 'dolar');
  logger.info(data);
  expect(data).toBeTruthy();
});
