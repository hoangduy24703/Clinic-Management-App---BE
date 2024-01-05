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


async function returnLichHenDayToDay(NGAY_A, NGAY_B) {
    try {
        const request = new sql.Request();
        request.input('NGAY_A', sql.Date, NGAY_A);
        request.input('NGAY_B', sql.Date, NGAY_B);
        return await request.execute('SP_XEM_LICH_HEN_THEO_NGAY');
    }
    catch (error) {
        console.log(error);
    }
}

async function returnThemLichHen(NGAYHEN, THOIGIANHEN, TINHTRANG, PHONG, GHICHU, BACSI, BENHNHAN, TROKHAM) {
    try {
        const request = new sql.Request();
        console.log(NGAYHEN, THOIGIANHEN, TINHTRANG, PHONG, GHICHU, BACSI, BENHNHAN, TROKHAM);
        request.input('NGAYHEN', sql.Date, NGAYHEN);
        request.input('THOIGIANHEN', sql.Char, THOIGIANHEN);
        request.input('TINHTRANG', sql.NChar, TINHTRANG );
        request.input('PHONG', sql.Char, PHONG );
        request.input('GHICHU', sql.NVarChar, GHICHU );
        request.input('BACSI', sql.Char, BACSI );
        request.input('BENHNHAN', sql.Char, BENHNHAN )
        request.input('TROKHAM', sql.Char, TROKHAM )
        const isSuccess= await request.execute('SP_THEM_LICH_HEN');
        console.log(isSuccess)
        
        return isSuccess.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}

async function returnXoaLichHen(NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN) {
    try {
        const request = new sql.Request();
        console.log(NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN);
        request.input('NGAYHEN', sql.Date, NGAYHEN);
        request.input('THOIGIANHEN', sql.Char, THOIGIANHEN);
        request.input('BACSI', sql.Char, BACSI );
        request.input('BENHNHAN', sql.Char, BENHNHAN );
        const isSuccess= await request.execute('SP_XOA_LICH_HEN');
        console.log(isSuccess.returnValue)
        return isSuccess.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}

async function returnCapNhatLichHen(NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN, TINHTRANG_NEW ) {
    try {
        const request = new sql.Request();
        console.log(NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN, TINHTRANG_NEW );
        request.input('NGAYHEN', sql.Date, NGAYHEN);
        request.input('THOIGIANHEN', sql.Char, THOIGIANHEN);
        request.input('BACSI', sql.Char, BACSI );
        request.input('BENHNHAN', sql.Char, BENHNHAN )
        request.input('TINHTRANG', sql.NChar, TINHTRANG_NEW );
        const isSuccess= await request.execute('SP_CAP_NHAT_TT_LICH_HEN');
        console.log(isSuccess)
        
        return isSuccess.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}
module.exports={returnLichHenIDBN, returnLichHenIDNS, returnLichHenIDPK, returnLichHenDayToDay, returnThemLichHen, returnXoaLichHen, returnCapNhatLichHen};