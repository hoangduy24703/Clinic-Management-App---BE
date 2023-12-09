const sql = require ('mssql');
const request = new sql.Request()

async function getListBDTbyID(req,res){
    let result = await request.query('EXEC ')
    .catch(
        err=>{
            console.log(err)
            return res.json({
                isSuccess: false,
                message: 'request Failure',
                status: res.statusCode,
                data: ''
            })
        }
    )
    console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listBDT: result.recordset
        }
    })
}

async function getListBDTbyDate(req,res){
    let result = await request.query('EXEC ')
    .catch(
        err=>{
            console.log(err)
            return res.json({
                isSuccess: false,
                message: 'request Failure',
                status: res.statusCode,
                data: ''
            })
        }
    )
    console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listBDT: result.recordset
        }
    })
}

async function getKeHoach(req,res){
    let result = await request.query('EXEC ')
    .catch(
        err=>{
            console.log(err)
            return res.json({
                isSuccess: false,
                message: 'request Failure',
                status: res.statusCode,
                data: ''
            })
        }
    )
    console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listBDT: result.recordset
        }
    })
}

async function getBDT(req,res){
    let result = await request.query('EXEC ')
    .catch(
        err=>{
            console.log(err)
            return res.json({
                isSuccess: false,
                message: 'request Failure',
                status: res.statusCode,
                data: ''
            })
        }
    )
    console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listBDT: result.recordset
        }
    })
}

async function addBDT(req,res){
    let result = await request.query('EXEC ')
    .catch(
        err=>{
            console.log(err)
            return res.json({
                isSuccess: false,
                message: 'request Failure',
                status: res.statusCode,
                data: ''
            })
        }
    )
    console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listBDT: result.recordset
        }
    })
}


module.exports = {
    getListBDTbyID,
    getListBDTbyDate,
    getKeHoach,
    getBDT,
    addBDT
}