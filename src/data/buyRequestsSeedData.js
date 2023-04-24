import GetPhoneImageUrl from "../utils/urlUtil.js";

export const singleBuyRequestsSeedData = (req) => 
{
  return {
    deviceName: 'iPhone XS Max',
    unlocked: true,
    imageUrl: GetPhoneImageUrl(req, 'iPhone XS Max'),
    storageSizes: [
        {
           storageSize: '64GB',
           categories: [
               {
                 category: 'New',
                 price: 560
               },
               {
                category: 'A1',
                price: 555
              },
              {
                category: 'A2',
                price: 555
              },
              {
                category: 'B1',
                price: 545
              },
              {
                category: 'B2',
                price: 540
              },
              {
                category: 'C',
                price: 535
              },
              {
                category: 'C/B',
                price: 530
              },
              {
                category: 'C/D',
                price: 525
              }
            ]
        },
        {
            storageSize: '256GB',
            categories: [
                {
                  category: 'New',
                  price: 580
                },
                {
                 category: 'A1',
                 price: 575
               },
               {
                 category: 'A2',
                 price: 570
               },
               {
                 category: 'B1',
                 price: 565
               },
               {
                 category: 'B2',
                 price: 560
               },
               {
                 category: 'C',
                 price: 555
               },
               {
                 category: 'C/B',
                 price: 550
               },
               {
                 category: 'C/D',
                 price: 545
               },
             ]
         },
         {
            storageSize: '512GB',
            categories: [
                {
                  category: 'New',
                  price: 600
                },
                {
                 category: 'A1',
                 price: 595
               },
               {
                 category: 'A2',
                 price: 590
               },
               {
                 category: 'B1',
                 price: 585
               },
               {
                 category: 'B2',
                 price: 580
               },
               {
                 category: 'C',
                 price: 575
               },
               {
                 category: 'C/B',
                 price: 570
               },
               {
                 category: 'C/D',
                 price: 565
               }
             ]
         }
    ]
 }

};

const BuyRequestsSeedData = (req) =>
{
  return [
    {
        deviceName: 'iPhone XS Max',
        unlocked: true,
        imageUrl: GetPhoneImageUrl(req, 'iPhone XS Max'),
        storageSizes: [
            {
               storageSize: '64GB',
               categories: [
                   {
                     category: 'New',
                     price: 560
                   },
                   {
                    category: 'A1',
                    price: 555
                  },
                  {
                    category: 'A2',
                    price: 555
                  },
                  {
                    category: 'B1',
                    price: 545
                  },
                  {
                    category: 'B2',
                    price: 540
                  },
                  {
                    category: 'C',
                    price: 535
                  },
                  {
                    category: 'C/B',
                    price: 530
                  },
                  {
                    category: 'C/D',
                    price: 525
                  }
                ]
            },
            {
                storageSize: '256GB',
                categories: [
                    {
                      category: 'New',
                      price: 580
                    },
                    {
                     category: 'A1',
                     price: 575
                   },
                   {
                     category: 'A2',
                     price: 570
                   },
                   {
                     category: 'B1',
                     price: 565
                   },
                   {
                     category: 'B2',
                     price: 560
                   },
                   {
                     category: 'C',
                     price: 555
                   },
                   {
                     category: 'C/B',
                     price: 550
                   },
                   {
                     category: 'C/D',
                     price: 545
                   },
                 ]
             },
             {
                storageSize: '512GB',
                categories: [
                    {
                      category: 'New',
                      price: 600
                    },
                    {
                     category: 'A1',
                     price: 595
                   },
                   {
                     category: 'A2',
                     price: 590
                   },
                   {
                     category: 'B1',
                     price: 585
                   },
                   {
                     category: 'B2',
                     price: 580
                   },
                   {
                     category: 'C',
                     price: 575
                   },
                   {
                     category: 'C/B',
                     price: 570
                   },
                   {
                     category: 'C/D',
                     price: 565
                   }
                 ]
             }
        ]
     },
     {
        deviceName: 'iPhone XS',
        unlocked: true,
        imageUrl: GetPhoneImageUrl(req, 'iPhone XS'),
        storageSizes: [
            {
               storageSize: '64GB',
               categories: [
                   {
                     category: 'New',
                     price: 510
                   },
                   {
                    category: 'A1',
                    price: 505
                  },
                  {
                    category: 'A2',
                    price: 500
                  },
                  {
                    category: 'B1',
                    price: 495
                  },
                  {
                    category: 'B2',
                    price: 490
                  },
                  {
                    category: 'C',
                    price: 485
                  },
                  {
                    category: 'C/B',
                    price: 480
                  },
                  {
                    category: 'C/D',
                    price: 475
                  }
                ]
            },
            {
                storageSize: '256GB',
                categories: [
                    {
                      category: 'New',
                      price: 530
                    },
                    {
                     category: 'A1',
                     price: 525
                   },
                   {
                     category: 'A2',
                     price: 520
                   },
                   {
                     category: 'B1',
                     price: 515
                   },
                   {
                     category: 'B2',
                     price: 510
                   },
                   {
                     category: 'C',
                     price: 505
                   },
                   {
                     category: 'C/B',
                     price: 500
                   },
                   {
                     category: 'C/D',
                     price: 595
                   },
                 ]
             },
             {
                storageSize: '512GB',
                categories: [
                    {
                      category: 'New',
                      price: 550
                    },
                    {
                     category: 'A1',
                     price: 545
                   },
                   {
                     category: 'A2',
                     price: 540
                   },
                   {
                     category: 'B1',
                     price: 535
                   },
                   {
                     category: 'B2',
                     price: 530
                   },
                   {
                     category: 'C',
                     price: 525
                   },
                   {
                     category: 'C/B',
                     price: 520
                   },
                   {
                     category: 'C/D',
                     price: 515
                   }
                 ]
             }
        ]
     }
];
}

export default BuyRequestsSeedData;