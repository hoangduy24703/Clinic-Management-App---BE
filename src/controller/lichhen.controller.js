const database = require('../model/lichhen.model')

async function postLichHenIDBN(req,res){
    try {
        const { ID_BENHNHAN, NGAY } = req.body;
        let result = await database.returnLichHenIDBN(ID_BENHNHAN, NGAY);

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

async function postLichHenIDNS(req,res){
    try {
        const { ID_NHASI, NGAY } = req.body;
        let result = await database.returnLichHenIDNS(ID_NHASI, NGAY);

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


async function postLichHenIDPK(req,res){
    try {
        const { ID_PHONGKHAM, NGAY } = req.body;
        let result = await database.returnLichHenIDPK(ID_PHONGKHAM, NGAY);

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

async function postLichHenDayToDay(req,res){
    try {
        const { NGAY_A, NGAY_B } = req.body;
        let result = await database.returnLichHenDayToDay(NGAY_A, NGAY_B);
        
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

async function postThemLichHen(req,res){
    try {
        const { NGAYHEN, THOIGIANHEN, TINHTRANG, PHONG, GHICHU, BACSI, BENHNHAN, TROKHAM } = req.body;
        console.log(NGAYHEN);
        let result = await database.returnThemLichHen(NGAYHEN, THOIGIANHEN, TINHTRANG, PHONG, GHICHU, BACSI, BENHNHAN, TROKHAM);
        console.log(result);
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

async function postXoaLichHen(req,res){
    try {
        const { NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN } = req.body;
        let result = await database.returnXoaLichHen(NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN);
        console.log(NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN);
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

async function postCapNhatLichHen(req,res){
    try {
        const { NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN, TINHTRANG_NEW } = req.body;

        let result = await database.returnCapNhatLichHen( NGAYHEN, THOIGIANHEN, BACSI, BENHNHAN, TINHTRANG_NEW);
        console.log(result);
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

module.exports = {postLichHenIDBN, postLichHenIDNS, postLichHenIDPK, postLichHenDayToDay, postThemLichHen, postXoaLichHen, postCapNhatLichHen}