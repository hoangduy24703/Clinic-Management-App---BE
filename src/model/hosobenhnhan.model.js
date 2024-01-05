const sql = require ('mssql');

async function returnChiTietHoSoBenhNhan(IDBENHNHAN) {
    try {
        console.log(IDBENHNHAN);
        const request = new sql.Request();
        request.input('IDBENHNHAN', sql.Char, IDBENHNHAN);
        return await request.execute('xemchitiethosobenhnhan');
    }
    catch (error) {
        console.log(error);
    }
}

async function returnCapNhatHoSoBenhNhan(data) {
    try {
        const request = new sql.Request();
        request.input('IDBENHNHAN', sql.Char, data.IDBENHNHAN);
        request.input('TENBN', sql.Char, data.TENBN);
        request.input('IDPHONGKHAM', sql.Char, data.IDPHONGKHAM);
        request.input('NAMSINH', sql.Char, data.NAMSINH);
        request.input('GIOITINH', sql.NVarChar, data.GIOITINH);
        request.input('SDT', sql.Char, data.SDT);
        request.input('EMAIL', sql.VarChar, data.EMAIL);
        request.input('DIACHI', sql.NVarChar, data.DIACHI);
        request.input('MATKHAU', sql.VarChar, data.MATKHAU);
        request.input('BACSIMD', sql.Char, data.BACSIMD);
        request.input('TTTQ', sql.NVarChar, data.TTTQ);
        request.input('TTDU', sql.NVarChar, data.TTDU);
        request.input('THUOCCHONGCD', sql.NVarChar, data.THUOCCHONGCD);
        return await request.execute(`capnhathosobenhnhan`);
    } catch (error) {
        console.log(error);
    }
}

async function returnDangNhap(SDT, MATKHAU) {
    try {
        const request = new sql.Request()
        request.input('SDT', sql.Char, SDT);
        request.input('MATKHAU', sql.VarChar, MATKHAU);
        return await request.execute('dangnhap');
    }
    catch (err) {
        console.log(err);
    }
}

async function returnDangKy(data) {
    try {
        const request = new Request();
        request.input('SDT', sql.Char, data.SDT);
        request.input('MATKHAU', sql.VarChar, data.MATKHAU);
        return await request.execute('dangky');
    }
    catch (err) {
        console.log(err)
    }
}

async function returnDanhSachBenhNhan(TENBN) {
    try {
        const request = new sql.Request();
        request.input("TEN", sql.NVarChar, TENBN);
        return await request.execute('timhosobenhnhanquaten');
    }
    catch(err) {

    }
}

async function returnThemBenhNhan(IDBENHNHAN, TENBN, IDPHONGKHAM, NAMSINH, GIOITINH, SDT, EMAIL, DIACHI, MATKHAU, BACSIMD, TTTQ, TTDU, THUOCCHONGCD) {
    const request = new sql.Request();
    console.log(IDBENHNHAN, TENBN, IDPHONGKHAM, NAMSINH, GIOITINH, SDT, EMAIL, DIACHI, MATKHAU, BACSIMD, TTTQ, TTDU, THUOCCHONGCD);
    request.input('IDBENHNHAN', sql.Char, IDBENHNHAN)
            .input('TENBN', sql.NVarChar, TENBN)
            .input('IDPHONGKHAM', sql.Char, IDPHONGKHAM)
            .input('NAMSINH', sql.Char, NAMSINH)
            .input('GIOITINH', sql.NVarChar, GIOITINH)
            .input('SDT', sql.Char, SDT)
            .input('EMAIL', sql.VarChar, EMAIL)
            .input('DIACHI', sql.NVarChar, DIACHI)
            .input('MATKHAU', sql.VarChar, MATKHAU)
            .input('BACSIMD', sql.Char, BACSIMD)
            .input('TTTQ', sql.NVarChar, TTTQ)
            .input('TTDU', sql.NVarChar, TTDU)
            .input('THUOCCHONGCD', sql.NVarChar, THUOCCHONGCD)
    return await request.execute('themhosobenhnhan');
}

module.exports={returnChiTietHoSoBenhNhan, returnCapNhatHoSoBenhNhan, returnDangKy, returnDangNhap, returnDanhSachBenhNhan, returnThemBenhNhan}