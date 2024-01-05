const sql = require('mssql');

async function returnDanhSachNhanVien() {
  try {
    const request = new sql.Request();
    return await request.execute('xemdanhsachnhanvien');
  }
  catch (err) {
    console.log(err);
    throw err;
  }
}

async function returnNhanVienQuaTen(TEN) {
  const request = new sql.Request();
  request.input('TEN', sql.NVarChar, TEN);
  return await request.execute('timkiemnhanvienbangten');
}

async function returnChiTietNhanVien(IDNHANVIEN) {
  const request = new sql.Request();
  request.input('IDNHANVIEN', sql.Char, IDNHANVIEN);
  return await request.execute('timkiemnhanvienbangid');
}

async function returnThemNhanVien(id, ten, namsinh, gioitinh, sdt, matkhau, loainv, idphongkham) {
  const request = new sql.Request();
  request.input('IDNHANVIEN',sql.Char, id)
        .input('TENNV',sql.NVarChar, ten)
        .input('NAMSINH',sql.Char, namsinh)
        .input('GIOITINH',sql.NVarChar, gioitinh)
        .input('SDT',sql.Char, sdt)
        .input('MATKHAU',sql.VarChar, matkhau)
        .input('LOAINV',sql.Char, loainv)
        .input('IDPHONGKHAM',sql.Char, idphongkham);
  return await request.execute('themnhanvien');
}

async function returnXoaNhanVien(id) {
  const request = new sql.Request();
  request.input('IDNHANVIEN', sql.Char, id);
  return await request.execute('xoanhanvien');
}
module.exports = {returnDanhSachNhanVien, returnNhanVienQuaTen, returnChiTietNhanVien, returnThemNhanVien, returnXoaNhanVien};