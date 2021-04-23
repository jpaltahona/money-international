import { Db, MongoClient } from 'mongodb';
import config from '../config';

const { mongo } = config;
let client: MongoClient;
let isConnected = false;
let database: Db;

/**
 * Conecta con la base de datos
 */
 export const connect = async (): Promise<void> => {
  // Connection URL
  const url = `mongodb://${mongo.host}:${mongo.port}`;
  client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  database = client.db(mongo.database);
  isConnected = true;
};

/**
 * Desconecta de la base de datos
 */
 export const disconnect = async (): Promise<void> => {
  await client.close();
  isConnected = false;
};

/**
 * Obtiene un cliente para poder trabajar directamente con mongo
 * @returns Cliente
 */
 export const getClient = async (): Promise<MongoClient> => {
  if (!isConnected) {
    await connect();
  }
  return client;
};

/**
 * Obtiene una conexión con la base de datos del proyecto
 * @returns Base de datos del  proyecto
 */
 export const getDB = async (): Promise<Db> => {
  if (!isConnected) {
    await connect();
  }
  return database;
};

export default getClient;