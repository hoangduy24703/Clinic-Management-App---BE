const sql = require ('mssql');

async function returnLichHenIDBN(ID_BENHNHAN, NGAY) {
    try {
        const request = new sql.Request();
        request.input('ID_BENHNHAN', sql.Char, ID_BENHNHAN);
        request.input('NGAY', sql.Date, NGAY);
        return await request.execute('SP_XEM_LICH_HEN_BN');
    }
    catch (error) {
        console.log(error);
    }
}

async function returnLichHenIDNS(ID_NHASI, NGAY) {
    try {
        const request = new sql.Request();
        request.input('ID_NHASI', sql.Char, ID_NHASI);
        request.input('NGAY', sql.Date, NGAY);
        return await request.execute('SP_XEM_LICH_HEN_NS');
    }
    catch (error) {
        console.log(error);
    }
}

async function returnLichHenIDPK(ID_PHONGKHAM, NGAY) {
    try {
        const request = new sql.Request();
        request.input('ID_PHONGKHAM', sql.Char, ID_PHONGKHAM);
        request.input('NGAY', sql.Date, NGAY);
        return await request.execute('SP_XEM_LICH_HEN_PK');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports={returnLichHenIDBN, returnLichHenIDNS, returnLichHenIDPK};