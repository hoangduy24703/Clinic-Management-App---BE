const sql = require ('mssql');

async function returnChiTietHoaDon(idhoadon)     //DA LAM
{
    const request = new sql.Request()
   
    request.input('IDHOADON', idhoadon)
    const listhoadon = await request.execute(`SP_XEMCHITIETHOADON`)
    return listhoadon
}

async function returnHoaDon(id)                     //DA LAM
{
    const request = new sql.Request()
    request.input('IDBENHNHAN', id)
    const listhoadon = await request.execute(`SP_XEMDANHSACHHOADONBN`)
    return listhoadon
}

module.exports={returnChiTietHoaDon, 
    returnHoaDon}