const sql = require ('mssql');
const request = new sql.Request()


function checkId(id){
    if (id == null) return false
    return true
}

async function getListBDTbyID(req,res){
    let id = req.params.id

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
    let dateA = req.dateA
    let dateB = req.dateB
    if (dateA > dateB){
        let temp = dateA
        dateA = dateB
        dateB = temp
    }
    if (dateA == null || dateB == null){
        return res.json({
            isSuccess: false,
            message: 'request Failure',
            status: res.statusCode,
            data: ''
        })
    }

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
    let id = req.params.id

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
    let id = req.params.id
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

async function addKeHoach(req,res){



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
    getBDT,
    getKeHoach,
    getBDT,
    addBDT,
    addKeHoach,
}