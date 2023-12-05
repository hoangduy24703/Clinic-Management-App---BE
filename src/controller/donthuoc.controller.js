const database = require('../model/donthuoc.model')


async function getAllDonThuoc(req,res){
    let result = await database.returnAllDonThuoc()
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
            listDonThuoc: result.recordset
        }
    })
}
module.exports={getAllDonThuoc}