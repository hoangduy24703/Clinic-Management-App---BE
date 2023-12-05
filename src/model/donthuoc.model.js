const sql = require ('mssql');
const request = new sql.Request()

async function returnAllDonThuoc()
{
    const listDonThuoc = await request.execute(`xemkehoachdieutri`);
    // console.log(listDonThuoc.recordsets)
    // console.log("-------------------")
    return listDonThuoc
}
module.exports={returnAllDonThuoc}