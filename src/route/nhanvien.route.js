const controller = require('../controller/nhanvien.controller');
const express = require('express');
const route = express.Router();

route.get('/dsnhanvien', controller.getDanhSachNhanVien);

module.exports = route;