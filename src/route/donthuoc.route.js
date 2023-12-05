const controller = require('../controller/donthuoc.controller')
const express = require('express')
const route = express.Router()

route.get('/donthuoc/getALLDonThuoc', controller.getAllDonThuoc)

module.exports = route