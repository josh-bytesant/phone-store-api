import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const Categories = new mongoose.Schema(
  {
     category: { type: String, required: true },
     price: { type: Number, required: true }
  }
);
const StorageSizes = new mongoose.Schema(
   {
      storageSize:{ type: String, required: true },
      categories: [Categories]
   }
);
const SellRequestsSchema = new mongoose.Schema(
  {
    deviceName: { type: String, unique: true, required: true },
    unlocked: { type: Boolean, required: true },
    imageUrl: { type: String, unique: true, required: true },
    sellRequestId: {type: Number, unique: true},
    storageSizes: [
      new mongoose.Schema(
        {
           storageSize:{ type: String, required: true },
           categories: [
            new mongoose.Schema(
              {
                 category: { type: String, required: true },
                 price: { type: Number, required: true }
              }
            )
           ]
        })
    ],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  }, { collection: 'SellRequests'});


const autoIncrement = AutoIncrementFactory(mongoose.connection);
SellRequestsSchema.plugin(autoIncrement, { inc_field: 'sellRequestId'});
const SellRequests = mongoose.model('SellRequests', SellRequestsSchema);


export default SellRequests;