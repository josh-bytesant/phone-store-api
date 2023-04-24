import readXlsxFile from 'read-excel-file/node'
import path from 'path'
import { fileURLToPath } from 'url';

 const GetExcelData = () =>
{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    readXlsxFile(path.join(__dirname, '../data/upload/TradeRequests.xlsx')).then((rows) => {
        var result = rows.filter(row => row.slice(1, 65))
        console.log(result)
        //console.log(rows[3])
        //console.log(rows[4])
        //console.log(rows[65][9])
        // for(let i = 1; i < 66; i++)
        // {
        //     for(let j = 1; j < 10; j++)
        //     {

        //     }
        // }
      })
}

export default GetExcelData;