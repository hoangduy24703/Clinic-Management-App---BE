const database = require('../model/nhanvien.model');
const { generateID } = require('../generateID');

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
    return res.json({
      isSuccess: false,
      message: 'GET failed',
      status: res.statusCode,
      data: '',
    });
  }
}

async function postNhanVienQuaTen(req, res) {
  try {
    let { TENNV } = req.body
    const result = await database.returnNhanVienQuaTen(TENNV);
    return res.json({
      isSuccess: true,
      message: 'POST successfully',
      status: res.statusCode,
      data: result.recordsets[0],
    });
  }
  catch (e) {
    return res.json({
      isSuccess: false,
      message: 'POST failed',
      status: res.statusCode,
      data: '',
    });
  }
}

async function getChiTietNhanVien(req, res) {
  try {
    let id = req.params.id;
    const result = await database.returnChiTietNhanVien(id); 
    return res.json({
      isSuccess: true,
      message: 'GET successfully',
      status: res.statusCode,
      data: result.recordsets[0],
    });
  }
  catch(err) {
    return res.json({
      isSuccess: false,
      message: 'GET failed',
      status: res.statusCode,
      data: '',
    });
  }
}

async function postThemNhanVien(req, res) {
  try {
    let IDNHANVIEN = await generateID('NV');
    let { TENNV, NAMSINH, GIOITINH, SDT, MATKHAU, LOAINV, IDPHONGKHAM } = req.body;
    const result = await database.returnThemNhanVien(IDNHANVIEN, TENNV, NAMSINH, GIOITINH, SDT, MATKHAU, LOAINV, IDPHONGKHAM);
    return res.json({
      isSuccess: true,
      message: 'GET successfully',
      status: res.statusCode,
      data: result.recordsets[0],
    });
  }
  catch(err) {
    return res.json({
      isSuccess: false,
      message: 'POST failed',
      status: res.statusCode,
      data: '',
    });
  }
}

async function postXoaNhanVien(req, res) {
  try {
    let { IDNHANVIEN } = req.body;
    const result = await database.returnXoaNhanVien(IDNHANVIEN);
    return res.json({
      isSuccess: true,
      message: 'POST successfully',
      status: res.statusCode,
      data: result.recordsets[0],
    });
  }
  catch(err) {
    return res.json({
      isSuccess: false,
      message: 'POST failed',
      status: res.statusCode,
      data: '',
    });
  }
}

module.exports = { getDanhSachNhanVien, postNhanVienQuaTen, getChiTietNhanVien, postThemNhanVien, postXoaNhanVien };