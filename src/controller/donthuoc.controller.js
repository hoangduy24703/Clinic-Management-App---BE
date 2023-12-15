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

async function getDonThuoc(req,res){       //da check
    // console.log ("cos chay")
    let idbenhnhan = req.params.id
    // console.log(idbenhnhan)
    let result = await database.returnDonThuoc(idbenhnhan)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listDonThuoc: result.recordset
        }
    })
}

async function getChiTietDonThuoc(req,res){          //da check
    let id = req.params.id

    let result = await database.returnChiTietDonThuoc(id)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            chitietdonthuoc: result.recordset
        }
    })
}

async function getDonThuocNgay(req,res){
    let dateA = req.params.date

    let result = await database.returnDonThuocNgay(dateA)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listDonThuoc: result.recordset
        }
    })
}

async function addLoaiThuoc(req,res){
    // let id = req.params.id
    let {idthuoc, tenthuoc, thanhphan, donvitinh, giathuoc}=req.body
    let result = await database.returnAddLoaiThuoc(idthuoc, tenthuoc, thanhphan, donvitinh, giathuoc)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            isSuccess: result
        }
    })
}

async function updateLoaiThuoc(req,res){
    // let id = req.params.id
    let {idthuoc, tenthuoc, thanhphan, donvitinh, giathuoc} = req.body
    let result = await database.returnUpdateLoaiThuoc(idthuoc, tenthuoc, thanhphan, donvitinh, giathuoc)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            isSuccess: result
        }
    })
}
async function addDonThuoc(req,res){
    // let id = req.params.id
    let {iddonthuoc, ngaycap, idbuoidieutri} = req.body.donthuoc 
    let chitietdonthuoc = req.body.chitietdonthuoc
    let result = await database.returnAddDonThuoc(iddonthuoc, ngaycap, idbuoidieutri)
    .catch(
        err=>{
            console.log(err)
        }
    )
    // console.log(result)
    

    if (result == true)
    {
        for (let chitiet in chitietdonthuoc)
        {

            let temp = await database.returnAddChiTietDonThuoc(chitiet.idthuoc, iddonthuoc, chitiet.soluong)
            .catch(
                err=>{
                    console.log(err)
                }
            )
            if (temp ==false)
            {
                break
            }
        }
    }
    if (temp==false)
    {
        return res.json({
            isSuccess: false,
            message: 'request Failure',
            status: res.statusCode,
            data: ''
        })
     
    }
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            isSuccess: temp
        }
    })
}

async function deleteDonThuoc(req,res){
    let id = req.params.id

    let result = await database.returnDeleteDonThuoc(id)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            
        }
    })
}

async function addChiTietDonThuoc(req,res){
    // let id = req.params.id

    let result = await database.returnAddChiTietDonThuoc()
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listDonThuoc: result.recordset
        }
    })
}

async function getLoaiThuoc(req,res)
{
    let tenthuoc = req.params.tenthuoc

    let result = await database.returnLoaiThuoc(tenthuoc)
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
    // console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listDonThuoc: result.recordset
        }
    })
}
module.exports={getAllDonThuoc, 
    getDonThuoc, 
    addLoaiThuoc, 
    updateLoaiThuoc,
    getChiTietDonThuoc,
    
    addDonThuoc,
    deleteDonThuoc,
    addChiTietDonThuoc,
    getLoaiThuoc,
    getDonThuocNgay
}