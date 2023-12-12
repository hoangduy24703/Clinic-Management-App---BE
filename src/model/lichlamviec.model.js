const sql = require ('mssql');

async function returnLichLamViec(ID_NHASI, NGAY_A, NGAY_B) {
    try {
        const request = new sql.Request();
        request.input('ID_NHASI', sql.Char, ID_NHASI);
        request.input('NGAY_A', sql.Date, NGAY_A);
        request.input('NGAY_B', sql.Date, NGAY_B);
        return await request.execute('SP_XEM_LICH_LAM_VIEC_NGAY');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {returnLichLamViec};