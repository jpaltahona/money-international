import axios from 'axios';
import { Dolar } from '../models/dolar';

export const getDolarDay = async () :Promise<Dolar> => {
  const data = await axios.get<Dolar>('https://currency26.p.rapidapi.com/convert/USD/CLP/1', {
    headers: {
      'x-rapidapi-host': 'currency26.p.rapidapi.com',
      'x-rapidapi-key': '3e145c02a5mshd5aa02a0558e374p164099jsn355af2542355',
    },
  });
  return data.data;
};

export default getDolarDay;
