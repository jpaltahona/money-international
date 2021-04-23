import * as dataUf from '../tools/getMoneyData';
import * as formDate from '../tools/formatDate';

test('test dolar', async (): Promise<void> => {
  jest.setTimeout(2500);
  const date: Date = new Date();
  const dateNow = formDate.formatDate(date);
  console.log(dateNow);
  const data = await dataUf.getMonetTypeDay('utm', dateNow);
  expect(data).toBeTruthy();
});
