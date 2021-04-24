import { Router } from 'express';
import * as managerData from '../tools/saveData';
import * as formatDate from '../tools/formatDate';
import logger from '../tools/logger';
import { validateMoney } from '../logic/initialization';

const router = Router();

router.get('/:type/:date', async (req, res) => {
  try {
    const typeMoney = req.params.type.toLowerCase();
    const date = new Date(req.params.date);
    const dateFormat = formatDate.formatDate(date);

    await validateMoney(dateFormat, typeMoney);
    const data = await managerData.getDataCollection(dateFormat, typeMoney);
    logger.error(data);
    res.status(200).json({ ...data });
  } catch (error) {
    logger.error(error);
    res.status(400).send('error');
  }
});

export default router;
