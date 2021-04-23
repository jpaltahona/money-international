import axios from 'axios';
import { Dolar, DolarSave } from '../models/dolar';
import logger from './logger';

export const getDolarDay = async (date: string) :Promise<DolarSave | null> => {
  try {
    const data = await axios.get<Dolar>('https://currency26.p.rapidapi.com/convert/USD/CLP/1', {
      headers: {
        'x-rapidapi-host': 'currency26.p.rapidapi.com',
        'x-rapidapi-key': '3e145c02a5mshd5aa02a0558e374p164099jsn355af2542355',
      },
    });
    const response: DolarSave = {
      ...data.data,
      date,
    };
    return response;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default getDolarDay;
