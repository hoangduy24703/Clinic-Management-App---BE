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
    let dateA = req.params.dateA
    let dateB = req.params.dateB
    console.log(dateA)
    console.log(dateB)
    if (dateA == null || dateB == null){
        return res.json({
            isSuccess: false,
            message: 'request Failure',
            status: res.statusCode,
            data: ''
        })
    }

    let request = new sql.Request()
    //request.stream = true;

    request.input('DATEA', sql.Date, dateA)
            .input('DATEB',sql.Date, dateB)
    let result = await request.execute('LAYBUOIDT_NGAY',[], {resultSet:true})
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

    // let result = await model.te(dateA,dateB)

    console.log(result)
    // resolve(result.recordset);
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
    let request = new sql.Request()
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