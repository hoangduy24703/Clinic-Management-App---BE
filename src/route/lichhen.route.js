const controller = require('../controller/lichhen.controller')
const express = require('express')
const route = express.Router()

route.post('/lichhen/searchLHBN', controller.postLichHenIDBN);
route.post('/lichhen/searchLHNS', controller.postLichHenIDNS);
route.post('/lichhen/searchLHPK', controller.postLichHenIDPK);

module.exports = route;