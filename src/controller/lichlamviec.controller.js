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

module.exports = {postLichLamViec}