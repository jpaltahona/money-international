import axios from 'axios';
import { MoneyType } from '../models/uf';

export const getMonetTypeDay = async (type: string, date: string): Promise<MoneyType> => {
  const data = await axios.get<MoneyType>(`https://mindicador.cl/api/${type}/${date}`);
  const response: MoneyType = {
    ...data.data,
    date,
    type,
  };
  return response;
};

export default getMonetTypeDay;
