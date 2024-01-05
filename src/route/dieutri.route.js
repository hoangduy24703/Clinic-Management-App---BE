const controller = require('../controller/dieutri.controller')
const express = require('express')
const route = express.Router()

route.get('/dieutri/ListBDT/benhnhan/:id', controller.getListBDTbyID)
route.get('/dieutri/ListBDT/date/:dateA/:dateB', controller.getListBDTbyDate)
route.get('/dieutri/KeHoach/:id', controller.getKeHoach)
route.get('/dieutri/BDT/:id', controller.getBDT)
route.get('/dieutri/ListKH/benhnhan/:id', controller.getListKHbyID)

route.post('/dieutri/addBDT', controller.addBDT)
route.post('/dieutri/addKeHoach', controller.addKeHoach)
route.post('/dieutri/addChiTietDT', controller.addChitietDT)
route.post('/dieutri/deleteBDT', controller.deleteBDT)

module.exports = route