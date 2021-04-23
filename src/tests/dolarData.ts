import * as dolarData from '../tools/getDolarData';
import * as managerData from '../tools/saveData';

test('test dolar', async (): Promise<void> => {
  const data = await dolarData.getDolarDay();
  await managerData.saveDateDb(data, 'dolar');
  expect(data).toBeTruthy();
});
