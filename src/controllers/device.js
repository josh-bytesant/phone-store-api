import { Router } from 'express';
import * as request from '../repository/requestsRepo.js';
import BuyRequestsSeedData from '../data/buyRequestsSeedData.js'


const router = Router();

router.get('/', async (req, res) => {
  const buyRequests = await request.GetBuyRequests();
  return res.send(buyRequests);
});

router.get('/:searchTerm', async (req, res) => {
  var inputSearch = req.params.searchTerm;
  
  const buyRequests = await request.GetBuyRequests();
  return res.send(buyRequests);
});

router.post('/', async (req, res) => {
  var sellData = await request.SaveRequests(req);
  return res.send("Created");
});

export default router;