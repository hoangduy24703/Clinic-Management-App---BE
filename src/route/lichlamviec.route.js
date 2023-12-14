const controller = require('../controller/lichlamviec.controller')
const express = require('express')
const route = express.Router()

route.post('/lichlamviec/searchLLV', controller.postLichLamViec);

module.exports = route;