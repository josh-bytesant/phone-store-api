import mongoose from 'mongoose';
import models, { connectDb } from '../models/index.js';
import BuyRequestsSeedData, { singleBuyRequestsSeedData } from '../data/buyRequestsSeedData.js';
import SellRequestsSeedData, { singleSellRequestsSeedData } from '../data/sellRequestsSeedData.js';

export const GetBuyRequests = async () =>
{
    connectDb().then(async () => {
        const query = models.BuyRequests.find(); // `query` is an instance of `Query`
        query.setOptions({ lean : true });
        query.collection(BuyRequests.collection).exec(
            function(err, result) {
                if (err) console.log(err);
                console.log('Data GetBuyRequests: ', result);
                return result;
              });
            });

      
}

export const SaveBuyRequests = async (req) =>
{
    var buyRequest = BuyRequestsSeedData(req);
    connectDb().then(async () => {
        const buyData = new models.BuyRequests.create(buyRequest, function (err, jellybean, snickers) {
            if (err) console.log(err);
          });
      });
}


export const SellRequests = async () =>
{
    connectDb().then(async () => {
        const query = models.SellRequests.find(); // `query` is an instance of `Query`
        query.setOptions({ lean : true });
        query.collection(SellRequests.collection).exec(
            function(err, result) {
                if (err) console.log(err);
                console.log('Data SellRequests: ', result);
                return result;
              });
      });
}

export const SaveRequests = async (req) =>
{
    var sellRequest = singleSellRequestsSeedData(req);
    var buyRequest = singleBuyRequestsSeedData(req);
    connectDb().then(async () => {
        //const sellData = new models.SellRequests(sellRequest);
        //sellData.save();
        const session = await mongoose.startSession();
        //session.startTransaction();
        //session.w
        // try {
        //     const sell = await models.SellRequests.insertMany(sellRequest, { session });
        //     const buy = await models.BuyRequests.insertMany(buyRequest, { session });
        //     await session.commitTransaction();
        // } catch (error) {
        //     console.error('abort transaction');
        //     console.error(error);
        //     await session.abortTransaction();
        // } finally {
        //     session.endSession();
        // }

          try {
            await session.withTransaction(async () => {
                const sell = new models.SellRequests(sellRequest)
                await sell.save({ session });
                const buy = new models.BuyRequests(buyRequest)
                await buy.save({ session });
            }, { readConcern: { level: "snapshot" }, writeConcern: { w: "majority" } });
          } catch (error) {
                console.error('abort transaction');
                console.error(error);
          }
      });
}
