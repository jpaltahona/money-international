import * as database from './database';
import { Dolar, DolarSave } from '../models/dolar';
import { MoneyType } from '../models/uf';
/**
 * almacenar monedas en la Base de datos
 * @param dolar
 * @param collection
 * @returns saveDateDb
 */

export const saveDateDb = async (
  money: any, collection: string,
): Promise<any> => {
  const db = await database.getDB();
  const document = await db.collection<DolarSave>(collection)
    .findOne({ date: money.date, type: money.type });
  if (document == null) {
    await db.collection(collection).insertOne(money);
  }
  return document;
};

/**
 * consultar una coleccion de mongo por fecha y traer la el valor de las diferentes mondenas
 * @param date
 * @param collection
 * @returns getDataCollection
 */
export const getDataCollection = async (date: string, collection: string): Promise<DolarSave> => {
  const db = await database.getDB();
  const response = await db.collection(collection).findOne({ date });
  return response;
};

export default saveDateDb;
