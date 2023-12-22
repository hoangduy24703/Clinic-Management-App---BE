const database = require('../model/hosobenhnhan.model')

async function  getChiTietHoSoBenhNhan(req,res) {
    const IDBENHNHAN = req.params.id;
    let result = await database.returnChiTietHoSoBenhNhan(IDBENHNHAN)
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
        data: result.recordsets[0]
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
        const { SDT, MATKHAU } = req.body;
        let result = await database.returnDangNhap(SDT, MATKHAU);

        return res.json({
            isSuccess: true,
            message: 'Login successfully',
            status: res.statusCode,
            data: result.recordsets[0]
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
            data: result.recordsets[0]
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

async function postDanhSachBenhNhan(req, res) {
    try {
        const TENBN = req.body.TENBN;
        let result = await database.returnDanhSachBenhNhan(TENBN);

        return res.json({
            isSuccess: true,
            message: 'POST successfully',
            status: res.statusCode,
            data: result.recordsets[0]
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Failed to POST',
            status: res.statusCode,
            data: ''
        })
    }
}
module.exports={getChiTietHoSoBenhNhan, postCapNhatHoSoBenhNhan, getDangNhap, postDangKy, postDanhSachBenhNhan}