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
        console.log(result.recordsets[0].length)
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

module.exports = {postLichHenIDBN, postLichHenIDNS, postLichHenIDPK, postLichHenDayToDay}