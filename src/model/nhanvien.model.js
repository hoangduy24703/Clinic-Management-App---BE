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

module.exports = {returnDanhSachNhanVien};