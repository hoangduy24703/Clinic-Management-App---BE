const controller = require('../controller/lichlamviec.controller')
const express = require('express')
const route = express.Router()

route.post('/lichlamviec/searchLLV', controller.postLichLamViec);
route.post('/lichlamviec/createLLV', controller.postThemLichLamViec);
route.post('/lichlamviec/deleteLLV', controller.postXoaLichLamViec);
route.post('/lichlamviec/updateLLV', controller.postCapNhatLichLamViec);


module.exports = route;