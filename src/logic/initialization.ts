import * as managerData from '../tools/saveData';
import * as dolarData from '../tools/getDolarData';
import * as dataUf from '../tools/getMoneyData';
import { MoneyType } from '../models/uf';
import { DolarSave } from '../models/dolar';

export const validateMoney = async (dateFormat: string, typeMoney: string): Promise<number> => {
  const data = await managerData.getDataCollection(dateFormat, typeMoney);
  let saveObj: MoneyType | DolarSave;
  if (data == null) {
    if (typeMoney === 'dolar') {
      const dolarSave = await dolarData.getDolarDay(dateFormat);
      if (dolarSave) await managerData.saveDateDb(dolarSave, 'dolar');
      return 1;
    }
    saveObj = await dataUf.getMonetTypeDay(typeMoney, dateFormat);
    await managerData.saveDateDb(saveObj, typeMoney);
    return 2;
  }
  return 2;
};

export default validateMoney;
