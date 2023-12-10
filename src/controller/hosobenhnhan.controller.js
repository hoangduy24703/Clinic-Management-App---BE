const database = require('../model/hosobenhnhan.model')

async function getChiTietHoSoBenhNhan(req,res){
    let result = await database.returnChiTietHoSoBenhNhan()
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
        data: result
    })
}

async function postCapNhatHoSoBenhNhan(req, res) {
    let result = await database.returnCapNhatHoSoBenhNhan()
    .catch(
        err => {
            console.log(err);
        }
    )
}
module.exports={getChiTietHoSoBenhNhan}