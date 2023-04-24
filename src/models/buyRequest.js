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
const BuyRequestsSchema = new mongoose.Schema(
  {
    deviceName: { type: String, unique: true, required: true },
    unlocked: { type: Boolean, required: true },
    imageUrl: { type: String, unique: true, required: true },
    buyRequestId: {type: Number, unique: true},
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
  }, { collection: 'BuyRequests'});


const autoIncrement = AutoIncrementFactory(mongoose.connection);
BuyRequestsSchema.plugin(autoIncrement, { inc_field: 'buyRequestId'});
const BuyRequests = mongoose.model('BuyRequests', BuyRequestsSchema);


export default BuyRequests;