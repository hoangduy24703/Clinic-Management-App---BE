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
    try {
        const { dataToUpdate } = req.body;
        let result = await database.returnCapNhatHoSoBenhNhan(dataToUpdate);
        
        return res.json({
            isSuccess: true,
            message: 'Data save successfully',
            status: res.statusCode,
            data: result
        })
    } catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Failed to save data',
            status: res.statusCode,
            data: ''
        })
    }
}

async function getDangNhap(req, res) {
    try {
        const { data } = req.body;
        let result = await database.returnDangNhap(data);

        return res.json({
            isSuccess: true,
            message: 'Login successfully',
            status: res.statusCode,
            data: result
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Failed to login',
            status: res.statusCode,
            data: ''
        })
    }
}

async function postDangKy(req, res) {
    try {
        const { data } = req.body;
        let result = await database.returnDangKy(data);

        return res.json({
            isSuccess: true,
            message: 'Register successfully',
            status: res.statusCode,
            data: result
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Failed to register',
            status: res.statusCode,
            data: ''
        })
    }
}
module.exports={getChiTietHoSoBenhNhan, postCapNhatHoSoBenhNhan, getDangNhap, postDangKy}