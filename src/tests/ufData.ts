import * as dataUf from '../tools/getMoneyData';
import * as formDate from '../tools/formatDate';
import * as managerData from '../tools/saveData';

test('test dolar', async (): Promise<void> => {
  jest.setTimeout(2500);
  const date: Date = new Date('2021-3-23');
  const dateNow = formDate.formatDate(date);
  const data = await dataUf.getMonetTypeDay('utm', dateNow);
  await managerData.saveDateDb(data, 'utm');
  expect(data).toBeTruthy();
});
