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



app.listen(port, ()=>console.log(`Example app listening at htttp://localhost:${port}`))