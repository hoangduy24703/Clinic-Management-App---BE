const express =require('express')
const app = express()
// const user = require('./model/user')
const port = 8080
const db = require('./database/database')
const cors = require('cors')

app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({
    extended: true, 
    limit: "50mb",
}));
app.use(express.json());

const donthuoc = require('./route/donthuoc.route')
const dieutri = require('./route/dieutri.route')
const hosobenhnhan = require('./route/hosobenhnhan.route')
// const nv= require('./route/nhanvien.route')
// app.use(nv)
app.use(donthuoc)
app.use(dieutri)
app.use(hosobenhnhan)

app.listen(port, ()=>console.log(`Example app listening at http://localhost:${port}`))