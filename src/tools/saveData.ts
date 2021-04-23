import * as database from './database';
import { Dolar } from '../models/dolar';

export const saveDateDb = async (dolar: Dolar, collection: string): Promise<any> => {
  const db = await database.getDB();
  const insert = await db.collection(collection).insertOne(dolar);
  return insert;
};

export default saveDateDb;
