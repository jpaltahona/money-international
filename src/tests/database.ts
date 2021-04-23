import * as database from '../tools/database';

test('test database connection', async (): Promise<void> => {
  await database.connect();
  const connection = await database.getClient();
  expect(connection.isConnected()).toBeTruthy();
  await database.disconnect();
});
