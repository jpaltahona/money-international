import * as dolarData from '../tools/getDolarData';

test('test dolar', async () => {
  const data = await dolarData.getDolarDay();
  console.log(data);

  expect(data).toBeTruthy();

});