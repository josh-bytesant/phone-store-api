import mongoose from 'mongoose';
//import autoIncrement from 'mongoose-auto-increment';

import BuyRequests from './buyRequest.js';
import SellRequests from './sellRequest.js';

const connectDb = () => {
  const opts = { dbName: 'phoneShop'};
  return mongoose.connect(process.env.DATABASE_URL, opts);
};

//autoIncrement.initialize(connectDb());
const models = { BuyRequests, SellRequests };

export { connectDb };

export default models;