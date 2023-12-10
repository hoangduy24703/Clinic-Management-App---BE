const controller = require('../controller/hosobenhnhan.controller')
const express = require('express')
const route = express.Router()

route.get('/hosobenhnhan/:id', controller.getChiTietHoSoBenhNhan);

module.exports = route