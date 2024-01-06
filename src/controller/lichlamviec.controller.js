const database = require('../model/lichlamviec.model')

async function postLichLamViec(req,res){
    try {
        const { ID_NHASI, NGAY_A, NGAY_B } = req.body;
        let result = await database.returnLichLamViec( ID_NHASI, NGAY_A, NGAY_B );

        return res.json({
            isSuccess: true,
            message: 'Request Successfully',
            status: res.statusCode,
            data: result.recordsets[0]
        })

        
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: ''
        })
    }
}


async function postThemLichLamViec(req,res){
    try {
        const { ID_NHANVIEN, NGAY, ID_CALAM} = req.body;
        console.log(ID_NHANVIEN, NGAY, ID_CALAM);
        let result = await database.returnThemLichLamViec(ID_NHANVIEN, NGAY, ID_CALAM);
        if (result ==0){
            return res.json({
                isSuccess: true,
                message: 'Request Successfully',
                status: res.statusCode,
                data: result
            })
        }
        else 
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: result
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: ''
        })
    }
}

async function postXoaLichLamViec(req,res){
    try {
        const { ID_NHANVIEN, NGAY, ID_CALAM} = req.body;
        let result = await database.returnXoaLichLamViec(ID_NHANVIEN, NGAY, ID_CALAM);
        if (result ==0){
            return res.json({
                isSuccess: true,
                message: 'Request Successfully',
                status: res.statusCode,
                data: result
            })
        }
        else 
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: result
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: ''
        })
    }
}

async function postCapNhatLichLamViec(req,res){
    try {
        const { ID_NHANVIEN, NGAY, ID_CALAM, NGAY_NEW, ID_CALAM_NEW} = req.body;
        console.log(ID_NHANVIEN, NGAY, ID_CALAM, NGAY_NEW, ID_CALAM_NEW);
        let result = await database.returnCapNhatLichLamViec(ID_NHANVIEN, NGAY, ID_CALAM, NGAY_NEW, ID_CALAM_NEW);
        if (result ==0){
            return res.json({
                isSuccess: true,
                message: 'Request Successfully',
                status: res.statusCode,
                data: result
            })
        }
        else 
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: result
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            isSuccess: false,
            message: 'Request Failed',
            status: res.statusCode,
            data: ''
        })
    }
}


module.exports = {postLichLamViec, postThemLichLamViec, postXoaLichLamViec, postCapNhatLichLamViec}