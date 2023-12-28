const sql = require ('mssql');
const model = require('../model/dieutri.model');
const { generateID } = require('../generateID');

function checkId(id){
    if (id == null) return false
    return true
}
async function getListBDTbyID(req,res){
    let id = req.params.id
    let request = new sql.Request()
    request.input('MABENHNHAN', sql.Char, id);
    
    let result = await request.execute('LAYBUOIDT_BN')
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
            listBDT: result.recordsets[0]
        }
    })
}


async function getListBDTbyDate(req,res){
    let dateA = req.params.dateA
    let dateB = req.params.dateB
    console.log(dateA)
    console.log(dateB)
    if (dateA == null || dateB == null){
        return res.json({
            isSuccess: false,
            message: 'request Failure',
            status: res.statusCode,
            data: ''
        })
    }

    let request = new sql.Request()
    // request.stream = true;

    request.input('DATEA', sql.Char, dateA)
            .input('DATEB',sql.Char, dateB)
    let result = await request.execute('LAYBUOIDT_NGAY',[], {resultSet:true})
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

    // let result = await model.te(dateA,dateB)

    console.log(result)
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            listBDT: result.recordset
        }
    })
}

async function getKeHoach(req,res){
    let id = req.params.id
    let request = new sql.Request()
    // request.stream = true;
    // console.log(id)
    request.input('IDDIEUTRI', sql.Char,id )
    let result = await request.execute('XEMCHITIETKH')
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
            kehoach: result.recordsets[0],
            listBDT: result.recordsets[1],
        }
    })
}

async function getBDT(req,res) {
    let id = req.params.id
    let request = new sql.Request()
    request.input('IDBUOIDIEUTRI', sql.Char,id )
    let result = await request.execute('XEMCHITIETBDT')
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
    let tongquan = result.recordsets[0]
    let chitiet = result.recordsets[1]
    let chitietrang = result.recordsets[2]
    let rangdieutri;
    for (let ldt  in chitiet) {
        rangdieutri = []
        for (let x in chitietrang){
            if (chitietrang[x].MADIEUTRI == chitiet[ldt].MADIEUTRI){
                let temp = {
                    TENRANG: chitietrang[x].TENRANG,
                    MATDIEUTRI: chitietrang[x].MATDIEUTRI,
                }
                rangdieutri.push(temp)
            }
        }
        chitiet[ldt].RANGDIEUTRI = rangdieutri
    }
    //console.log(result.recordsets[0])
    //console.log(result.recordsets[1])
    return res.json({
        isSuccess: true,
        message: 'request Successfully',
        status: res.statusCode,
        data: {
            tongquan,
            chitiet
        }
    })
}

// {
//     tongquan: {
//         MABENHNHAN,
//         MOTA,
//         GHICHU,
//         NGAY,
//         KHAMCHINH,
//         TROKHAM,
//         KEHOACH
//     },
//     chitietdieutri: [
//         {
//             MADIEUTRI,
//             rangdt: [
//                 {
//                     TENRANG,
//                     MATDIEUTRI
//                 }
//             ]
//         }
//     ]
// }

async function addBDT(req,res){
    let { MABENHNHAN,
        MOTA,
        GHICHU,
        NGAY,
        KHAMCHINH,
        TROKHAM,
        KEHOACH} = req.body.tongquan
    
    let buoidieutri = req.body.chitietdieutri

    let request = new sql.Request()
    var IDBUOIDIEUTRI = await generateID ('BDT')
    
    console.log( IDBUOIDIEUTRI, MABENHNHAN, MOTA, GHICHU, NGAY, KHAMCHINH, TROKHAM, KEHOACH)
    request.input('MABENHNHAN', MABENHNHAN)
    .input('IDBUOIDIEUTRI', IDBUOIDIEUTRI)
    .input('MOTA',sql.NVarChar, MOTA)
    .input('GHICHU', sql.NVarChar, GHICHU)
    .input('NGAY', sql.Date, NGAY)
    .input('KHAMCHINH', KHAMCHINH)
    .input('TROKHAM', TROKHAM)
    .input('KEHOACH', KEHOACH)

    let result = await request.execute('THEMBUOIDT')
    .catch(
        err=>{
            console.log(err)
        }
    )
    // console.log(buoidieutri)
    let isSuccess = true
    if (result.returnValue ==0)
    {
        for (let chitiet in buoidieutri)
        {
            // let request2 = new sql.Request()
            // request2.parameters.
            // console.log(buoidieutri[chitiet])
            // request2.input('MADIEUTRI',sql.Char,buoidieutri[chitiet].MADIEUTRI)
            // request2.input('IDBUOIDIEUTRI',sql.Char, buoidieutri[chitiet].IDBUOIDIEUTRI)
            // request2.parameters.console
            // console.log(buoidieutri[chitiet].MADIEUTRI,buoidieutri[chitiet].IDBUOIDIEUTRI)
            let temp = await model.returnAddChiTietDT(buoidieutri[chitiet].MADIEUTRI, IDBUOIDIEUTRI)
            .catch(
                err=>{
                    console.log(err)
                }
            )
            
            // console.log("xong chi tiet")
            if (temp == true)
            {
            //     let request3 = new sql.Request()
                let rangdt = buoidieutri[chitiet].rangdt
                for (let chitietrang in rangdt)
                {
                    let temp2 = await model.returnRangDT(buoidieutri[chitiet].MADIEUTRI,
                                                                IDBUOIDIEUTRI,
                                                                rangdt[chitietrang].TENRANG,
                                                                rangdt[chitietrang].MATDIEUTRI)
            //         request3.input('MADIEUTRI', rangdt[chitietrang].MADIEUTRI)
            //         .input('IDBUOIDIEUTRI', rangdt[chitietrang].IDBUOIDIEUTRI)
            //         .input('TENRANG',sql.NChar, rangdt[chitiet].TENRANG)
            //         .input('MATDIEUTRI', rangdt[chitiet].MATDIEUTRI)
            //         let temp2 = await request3.execute('THEMRANGDT')
                    // console.log("xong rang")
                    // console.log(temp2)
                    if (temp2 == false)
                    {
                        isSuccess = false
                        break
                    }
                }
    
            }
            else 
            {
                isSuccess = false
                break
            }

        }
    }
    else isSuccess = false
    if (isSuccess == false)
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
            isSuccess: isSuccess
        }
    })
}

async function addKeHoach(req,res){
    let { 
        MOTAKHDT,
        TRANGTHAI,
        GHICHUKHDT,
        BENHNHAN,
        BSPHUTRACH} = req.body
    
    let request = new sql.Request()
    var IDDIEUTRI = await generateID('KH')
    request.input('IDBUOIDIEUTRI', sql.Char,id )
    .input('IDDIEUTRI',sql.Char, IDDIEUTRI)
    .input('MOTAKHDT', sql.NVarChar, MOTAKHDT)
    .input('TRANGTHAI', sql.NChar, TRANGTHAI)
    .input('GHICHUKHDT', sql.NVarChar, GHICHUKHDT)
    .input('TONGGIA', sql.Float, TONGGIA)
    .input('BENHNHAN', sql.Char, BENHNHAN)
    .input('BSPHUTRACH', sql.Char, BSPHUTRACH)
    let result = await request.execute('THEMKEHOACH')
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
        data: ''
    })

}

async function getListKHbyID(req,res){
    let id = req.params.id
    let request = new sql.Request()
    request.input('MABENHNHAN', sql.Char, id);
    
    let result = await request.execute('LAYKEHOACHDT_BN')
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
            listBDT: result.recordsets[0]
        }
    })
}

module.exports = {
    getListBDTbyID,
    getListBDTbyDate,
    getBDT,
    getKeHoach,
    getBDT,
    addBDT,
    addKeHoach,
    getListKHbyID,
}