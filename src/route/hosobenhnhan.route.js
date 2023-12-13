const controller = require('../controller/hosobenhnhan.controller')
const express = require('express')
const route = express.Router()

route.get('/hosobenhnhan/:id', controller.getChiTietHoSoBenhNhan);
route.post('/hosobenhnhan/timkiem', controller.postDanhSachHoSoBenhNhan);
route.post('/hosobenhnhan/:id', controller.postCapNhatHoSoBenhNhan);
route.get('/dangnhap', controller.getDangNhap);
route.post('/dangky', controller.postDangKy);
route.get('/nhanvien', controller.getDanhSachNhanVien);
route.get('/nhanvien/:id', controller.getChiTietNhanVien);

module.exports = route;