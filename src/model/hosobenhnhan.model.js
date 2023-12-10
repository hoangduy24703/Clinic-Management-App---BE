const sql = require ('mssql');
const request = new sql.Request()

async function returnChiTietHoSoBenhNhan(data) {
    try {
        request.input('IDNguoiDung', sql.Char, data.IDBENHNHAN);
        return await sql.execute('xemchitiethosobenhnhan');
    }
    catch (error) {
        console.log(error);
    }
}

async function returnCapNhatHoSoBenhNhan(data) {
    try {
        request.input('IDBENHNHAN', sql.Char, data.IDBENHNHAN);
        request.input('TENBN', sql.Char, data.TENBN);
        request.input('NAMSINH', sql.Date, data.DATE);
        request.input('GIOITINH', sql.NVarChar, data.GIOITINH);
        request.input('TUOI', sql.Int, data.TUOI);
        request.input('SDT', sql.Char, data.SDT);
        request.input('EMAIL', sql.VarChar, data.EMAIL);
        request.input('DIACHI', sql.NVarChar, data.DIACHI);
        request.input('MATKHAU', sql.VarChar, data.MATKHAU);
        request.input('BACSIMD', sql.Char, data.BACSIMD);
        request.input('TTTQ', sql.NVarChar, data.TTTQ);
        request.input('TTDU', sql.NVarChar, data.TTDU);
        request.input('THUOCCHONGCD',     sql.NVarChar, data.THUOCCHONGCD);
        request.input('DATHANHTOAN', sql.Float, data.DATHANHTOAN);
        return await request.execute(`capnhathosobenhnhan`);
    } catch (error) {
        console.log(error);
    }
}

async function returnDangNhap(data) {
    try {
        request.input('SDT', sql.Char, data.SDT);
        request.input('MATKHAU', sql.VarChar, data.MATKHAU);
        return await request.execute('dangnhap');
    }
    catch (err) {
        console.log(err);
    }
}

async function returnDangKy(data) {
    try {
        request.input('SDT', sql.Char, data.SDT);
        request.input('MATKHAU', sql.VarChar, data.MATKHAU);
        return await request.execute('dangky');
    }
    catch (err) {
        console.log(err)
    }
}

module.exports={returnChiTietHoSoBenhNhan, returnCapNhatHoSoBenhNhan, returnDangKy, returnDangNhap}