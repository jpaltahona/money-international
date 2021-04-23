import * as database from './database';
import { Dolar, DolarSave } from '../models/dolar';

/**
 * almacenar monedas en la Base de datos
 * @param dolar
 * @param collection
 * @returns saveDateDb
 */

export const saveDateDb = async (dolar: Dolar, collection: string): Promise<any> => {
  const db = await database.getDB();
  const insert = await db.collection(collection).insertOne(dolar);
  return insert;
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
