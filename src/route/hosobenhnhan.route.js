const controller = require('../controller/hosobenhnhan.controller')
const express = require('express')
const route = express.Router()

route.get('/hosobenhnhan/:id', controller.getChiTietHoSoBenhNhan);
route.post('/dangnhap', controller.getDangNhap);

route.post('/hosobenhnhan/capnhat', controller.postCapNhatHoSoBenhNhan);
route.post('/hosobenhnhan/timkiem', controller.postDanhSachBenhNhan);
route.post('/dangky', controller.postDangKy);

module.exports = route;