const controller = require('../controller/nhanvien.controller');
const express = require('express');
const route = express.Router();

route.get('/dsnhanvien', controller.getDanhSachNhanVien);
route.post('/nhanvien/timkiem', controller.postNhanVienQuaTen);
route.get(`/nhanvien/chitietnhanvien/:id`, controller.getChiTietNhanVien);
route.post('/nhanvien/themnhanvien', controller.postThemNhanVien);
route.post('/nhanvien/xoanhanvien', controller.postXoaNhanVien);

module.exports = route;