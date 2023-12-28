const sql = require ('mssql');
const { generateID } = require('../generateID');

async function returnChiTietHoSoBenhNhan(IDBENHNHAN) {
    try {
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
        var IDBENHNHAN = await generateID('BN') 
        const request = new Request()
        request.input('IDBENHNHAN', sql.Char, IDBENHNHAN);
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

module.exports={returnChiTietHoSoBenhNhan, returnCapNhatHoSoBenhNhan, returnDangKy, returnDangNhap, returnDanhSachBenhNhan}