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


async function returnThemLichLamViec(ID_NHANVIEN, NGAY, ID_CALAM) {
    try {
        const request = new sql.Request();
        // console.log(typeof NGAY)
        // NGAY = NGAY.substring(0,10)
        // console.log(NGAY)
        let date = new Date(NGAY)
        // console.log(date)
        let temp = date.setDate(date.getDate());
        temp = new Date(temp)
        // console.log(temp.toISOString())
        request.input('ID_NHANVIEN', sql.Char, ID_NHANVIEN );
        request.input('NGAY', sql.Date, temp);
        request.input('ID_CALAM', sql.Char, ID_CALAM )
        // console.log("co hcyaj")
        const isSuccess= await request.execute('SP_THEM_LICH_LAM_VIEC');
        console.log(isSuccess)
        return isSuccess.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}

async function returnXoaLichLamViec(ID_NHANVIEN, NGAY, ID_CALAM) {
    try {
        const request = new sql.Request();
        request.input('ID_NHANVIEN', sql.Char, ID_NHANVIEN );
        request.input('NGAY', sql.Date, NGAY);
        request.input('ID_CALAM', sql.Char, ID_CALAM )
        console.log(ID_NHANVIEN, NGAY, ID_CALAM);
        const isSuccess= await request.execute('SP_XOA_LICH_LAM_VIEC');
        console.log(isSuccess.returnValue)
        return isSuccess.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}

async function returnCapNhatLichLamViec(ID_NHANVIEN, NGAY, ID_CALAM, NGAY_NEW, ID_CALAM_NEW) {
    try {
        const request = new sql.Request();
        // console.log(typeof NGAY)
        // NGAY = NGAY.substring(0,10)
        // console.log(NGAY)
        let date = new Date(NGAY)
        // console.log(date)
        let temp = date.setDate(date.getDate());
        temp = new Date(temp)

        let date_new = new Date(NGAY_NEW)
        // console.log(date)
        let temp_new = date_new.setDate(date_new.getDate());
        temp_new = new Date(temp_new)
        // console.log(temp.toISOString())
        request.input('ID_NHANVIEN', sql.Char, ID_NHANVIEN );
        request.input('NGAY', sql.Date, temp);
        request.input('ID_CALAM', sql.Char, ID_CALAM )
        request.input('NGAY_NEW', sql.Date, temp_new);
        request.input('ID_CALAM_NEW', sql.Char, ID_CALAM_NEW )
        // console.log("co hcyaj")
        const isSuccess= await request.execute('SP_CAP_NHAT_LICH_LAM_VIEC');
        console.log(isSuccess)
        return isSuccess.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {returnLichLamViec, returnThemLichLamViec, returnXoaLichLamViec, returnCapNhatLichLamViec};
