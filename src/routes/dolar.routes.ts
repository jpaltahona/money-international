import { Router } from 'express';
import * as managerData from '../tools/saveData';
import * as formatDate from '../tools/formatDate';
import logger from '../tools/logger';

const router = Router();

router.get('/:type', async (req, res) => {
  try {
    const typeMoney = req.params.type.toLowerCase();
    const date = new Date();
    const dateFormat = formatDate.formatDate(date);
    const data = await managerData.getDataCollection(dateFormat, typeMoney);
    logger.error(data);
    res.status(200).json({ ...data });
  } catch (error) {
    logger.error(error);
    res.status(400).send('error');
  }
});

export default router;
