const database = require('../model/hosobenhnhan.model')

async function getChiTietHoSoBenhNhan(req,res){
    let result = await database.returnChiTietHoSoBenhNhan(req.params.id)
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
        let result = await database.returnCapNhatHoSoBenhNhan(req.body);
        
        return res.json({
            isSuccess: true,
            message: 'Data save successfully',
            status: res.statusCode,
            data: result.recordsets[0]
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

async function postDanhSachHoSoBenhNhan(req, res) {
    try {
        // console.log("94", req.body.TENBN);
        let result = await database.returnDanhSachHoSoBenhNhan(req.body.TENBN);
        console.log(result);
        return res.json({
            isSuccess: true,
            message: 'Get list of patients successfully',
            status: res.statusCode,
            data: result.recordsets[0]
        })
    }
    catch(err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Failed to GET',
            status: res.statusCode,
            data: ''
        })
    }
}

async function getDanhSachNhanVien(req, res) {
    try {
        let result = await database.returnDanhSachNhanVien();
        return res.json({
            isSuccess: true,
            message: 'GET successfully',
            status: res.statusCode,
            data: result.recordsets[0]
        })
    }
    catch(err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Failed to GET',
            status: res.statusCode,
            data: ''
        })
    }
}

async function getChiTietNhanVien(req, res) {
    try {
        console.log(req.params.id);
        let result = await database.returnChiTietNhanVien(req.params.id);
        return res.json({
            isSuccess: true,
            message: 'GET successfully',
            status: res.statusCode,
            data: result.recordsets[0]
        })
    }
    catch(err) {
        return res.json({
            isSuccess: false,
            message: 'Failed to GET',
            status: res.statusCode,
            data: ''
        })
    }
}
module.exports={getChiTietHoSoBenhNhan, postCapNhatHoSoBenhNhan, getDangNhap, postDangKy, postDanhSachHoSoBenhNhan, getDanhSachNhanVien, getChiTietNhanVien}