const sql = require ('mssql');
const request = new sql.Request()

async function returnChiTietHoSoBenhNhan()
{
    const chiTietHoSo = await request.execute(`xemchitiethosobenhnhan`);
    console.log(listDonThuoc.recordsets)
    console.log("-------------------")
    return chiTietHoSo
}

async function returnCapNhatHoSoBenhNhan() {
    const capNhatHoSo = await request.execute(`capnhathosobenhnhan`);
    return capNhatHoSo
}

module.exports={returnChiTietHoSoBenhNhan, returnCapNhatHoSoBenhNhan}