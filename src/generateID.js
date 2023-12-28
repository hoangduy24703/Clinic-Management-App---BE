const sql = require ('mssql');
function returnZero(temp, totalLength, slicing)
{
    temp = temp.slice(slicing);
    temp = parseInt(temp)
    temp=temp+1
    return String(temp).padStart(totalLength-slicing, '0');
}
async function queryString(id, tablename)
{
    let querystring= `Select top 1 `+  id +` from `+tablename+` ORDER BY `+ id +` DESC`
    const result = await sql.query (querystring)
    // console.log("aaaa")
    return result.recordset[0]
}
async function generateID(kitudau)
{
    const slicing = kitudau.length
    let result;
    let temp
   if (kitudau =='BDT') //done
   {
    console.log()
    result = await queryString ("IDBUOIDIEUTRI", "BUOIDIEUTRI")
    temp = result.IDBUOIDIEUTRI
    // console.log(temp)
   }
   else if (kitudau =='ĐTBDT')//chờ Hòa
   {
    result = await queryString ("IDDONTHUOC", "DONTHUOC")
    temp = result.IDDONTHUOC
   }
   else if (kitudau == 'BN') //done
   {
    result = await queryString ("IDBENHNHAN", "HOSOBENHNHAN")
    temp = result.IDBENHNHAN
   }
   else if (kitudau == 'KH') //done
   {
    result = await queryString ("IDDIEUTRI", "KEHOACHDIEUTRI")
    temp = result.IDDIEUTRI
   }
   else if (kitudau == 'NV') // không có
   {
    result = await queryString ("IDNHANVIEN", "NHANVIEN")
    temp=result.IDNHANVIEN
   }
   else if (kitudau == 'DC')//done
   {
    result = await queryString ("IDTHUOC", "THUOC")
    temp=result.IDTHUOC
   }
    let totalLength = temp.length
    temp = returnZero(temp, totalLength,slicing)
    // temp = returnZero(temp, 7)
    // console.log(temp)
    return kitudau + temp.toString()

}
async function generateIDHD() //done
{
    const date = new Date().toJSON().slice(0, 10);
    
    let queryString = `SELECT TOP 1 IDHOADON FROM HOADON WHERE NGAYGIAODICH= '${date}'`
    console.log(queryString)
    
    const result = await sql.query(queryString)
    let temp = result.recordset[0].IDHOADON
    // temp=null
    if (temp==null)
    {
        temp='00001'
        const datetemp = new Date()
      
        return 'HĐ'+ datetemp.getFullYear().toString() +datetemp.getMonth().toString() +datetemp.getDate().toString()+temp
    }
    temp = temp.slice(2);
    temp=parseInt(temp)
    temp=temp+1
    // console.log(temp)
    return 'HĐ'+temp.toString()
}
module.exports ={generateID, generateIDHD}