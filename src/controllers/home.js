import { Router } from 'express';
import GetExcelData from '../utils/excelReaderUtil.js'


const router = Router();

router.get('/', (req, res) => {
  GetExcelData();
  return res.send('hello from home');
});

export default router;