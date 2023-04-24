import GetPhoneImageUrl from "../utils/urlUtil.js";

export const singleSellRequestsSeedData = (req) => 
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
               price: 1160
             },
             {
              category: 'A1',
              price: 1155
            },
            {
              category: 'A2',
              price: 1150
            },
            {
              category: 'B1',
              price: 1145
            },
            {
              category: 'B2',
              price: 1140
            },
            {
              category: 'C',
              price: 1135
            },
            {
              category: 'C/B',
              price: 1130
            },
            {
              category: 'C/D',
              price: 1125
            }
          ]
      },
      {
          storageSize: '256GB',
          categories: [
              {
                category: 'New',
                price: 1180
              },
              {
               category: 'A1',
               price: 1175
             },
             {
               category: 'A2',
               price: 1170
             },
             {
               category: 'B1',
               price: 1165
             },
             {
               category: 'B2',
               price: 1160
             },
             {
               category: 'C',
               price: 1155
             },
             {
               category: 'C/B',
               price: 1150
             },
             {
               category: 'C/D',
               price: 1145
             },
           ]
       },
       {
          storageSize: '512GB',
          categories: [
              {
                category: 'New',
                price: 1200
              },
              {
               category: 'A1',
               price: 1195
             },
             {
               category: 'A2',
               price: 1190
             },
             {
               category: 'B1',
               price: 1185
             },
             {
               category: 'B2',
               price: 1180
             },
             {
               category: 'C',
               price: 1175
             },
             {
               category: 'C/B',
               price: 1170
             },
             {
               category: 'C/D',
               price: 1165
             }
           ]
       }
  ]
}

};


const sellRequestsSeedData = (req) =>
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
                     price: 1160
                   },
                   {
                    category: 'A1',
                    price: 1155
                  },
                  {
                    category: 'A2',
                    price: 1150
                  },
                  {
                    category: 'B1',
                    price: 1145
                  },
                  {
                    category: 'B2',
                    price: 1140
                  },
                  {
                    category: 'C',
                    price: 1135
                  },
                  {
                    category: 'C/B',
                    price: 1130
                  },
                  {
                    category: 'C/D',
                    price: 1125
                  }
                ]
            },
            {
                storageSize: '256GB',
                categories: [
                    {
                      category: 'New',
                      price: 1180
                    },
                    {
                     category: 'A1',
                     price: 1175
                   },
                   {
                     category: 'A2',
                     price: 1170
                   },
                   {
                     category: 'B1',
                     price: 1165
                   },
                   {
                     category: 'B2',
                     price: 1160
                   },
                   {
                     category: 'C',
                     price: 1155
                   },
                   {
                     category: 'C/B',
                     price: 1150
                   },
                   {
                     category: 'C/D',
                     price: 1145
                   },
                 ]
             },
             {
                storageSize: '512GB',
                categories: [
                    {
                      category: 'New',
                      price: 1200
                    },
                    {
                     category: 'A1',
                     price: 1195
                   },
                   {
                     category: 'A2',
                     price: 1190
                   },
                   {
                     category: 'B1',
                     price: 1185
                   },
                   {
                     category: 'B2',
                     price: 1180
                   },
                   {
                     category: 'C',
                     price: 1175
                   },
                   {
                     category: 'C/B',
                     price: 1170
                   },
                   {
                     category: 'C/D',
                     price: 1165
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
                     price: 1060
                   },
                   {
                    category: 'A1',
                    price: 1055
                  },
                  {
                    category: 'A2',
                    price: 1050
                  },
                  {
                    category: 'B1',
                    price: 1045
                  },
                  {
                    category: 'B2',
                    price: 1040
                  },
                  {
                    category: 'C',
                    price: 1035
                  },
                  {
                    category: 'C/B',
                    price: 1030
                  },
                  {
                    category: 'C/D',
                    price: 1025
                  }
                ]
            },
            {
                storageSize: '256GB',
                categories: [
                    {
                      category: 'New',
                      price: 1080
                    },
                    {
                     category: 'A1',
                     price: 1075
                   },
                   {
                     category: 'A2',
                     price: 1070
                   },
                   {
                     category: 'B1',
                     price: 1065
                   },
                   {
                     category: 'B2',
                     price: 1060
                   },
                   {
                     category: 'C',
                     price: 1055
                   },
                   {
                     category: 'C/B',
                     price: 1050
                   },
                   {
                     category: 'C/D',
                     price: 1045
                   },
                 ]
             },
             {
                storageSize: '512GB',
                categories: [
                    {
                      category: 'New',
                      price: 1100
                    },
                    {
                     category: 'A1',
                     price: 1095
                   },
                   {
                     category: 'A2',
                     price: 1090
                   },
                   {
                     category: 'B1',
                     price: 1085
                   },
                   {
                     category: 'B2',
                     price: 1080
                   },
                   {
                     category: 'C',
                     price: 1075
                   },
                   {
                     category: 'C/B',
                     price: 1070
                   },
                   {
                     category: 'C/D',
                     price: 1065
                   }
                 ]
             }
        ]
     }
]
}
export default sellRequestsSeedData;