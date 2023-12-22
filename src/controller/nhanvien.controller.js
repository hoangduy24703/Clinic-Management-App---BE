const database = require('../model/nhanvien.model');

async function getDanhSachNhanVien(req, res) {
  try {
    let result = await database.returnDanhSachNhanVien();
    return res.json({
      isSuccess: true,
      message: 'GET successfully',
      status: res.statusCode,
      data: result.recordsets[0],
    });
  } catch (err) {
    console.error('Error in getDanhSachNhanVien:', err);
    return res.json({
      isSuccess: false,
      message: 'GET failed',
      status: res.statusCode,
      data: '',
    });
  }
}

module.exports = { getDanhSachNhanVien };