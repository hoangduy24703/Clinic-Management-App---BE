const sql = require ('mssql');
// const request = new sql.Request()

async function returnAllDonThuoc()   //DA LAM
{
    // request.input('IDDIEUTRI', '1')
    // .input('TONGGIA',1000)
    // const listDonThuoc = await request.execute(`xemkehoachdieutri`);
    // // const listDonThuoc = await request.query `select * from dbo.xembang()`
    // // console.log(listDonThuoc.recordsets)
    // // console.log("-------------------")
    // return listDonThuoc
    const request = new sql.Request()
    const listDonThuoc = await request.execute(`SP_XEMDANHSACHTHUOC`)
    return listDonThuoc
}

async function returnDonThuoc(idbenhnhan)       //da lam
{
    const request = new sql.Request()
 
    request.input('IDBENHNHAN', idbenhnhan)
    console.log("dddddd")
    const listDonThuoc = await request.execute(`SP_XEMDANHSACHDONTHUOCBN`)
    console.log(listDonThuoc)
    return listDonThuoc
}

async function returnChiTietDonThuoc(id)     //DA LAM
{
    const request = new sql.Request()
    request.input('IDDONTHUOC', id)
    
    const chitietdonthuoc = await request.execute(`SP_XEMCHITIETDONTHUOC`)
    return chitietdonthuoc
}

// async function returnDonThuocNgay(date)                //
// {
//     const request = new sql.Request()

//     request.input('NGAY', date)
//     const listDonThuoc = await request.execute(`SP_XEMDANHSACHTHUOCNGAY`)
//     return listDonThuoc
// }

async function returnAddLoaiThuoc(idthuoc, tenthuoc, thanhphan, donvitinh, giathuoc) //da checlk
{
    const request = new sql.Request()
    request.input('IDTHUOC', idthuoc)
    .input('TENTHUOC', tenthuoc)
    .input('THANHPHAN', thanhphan)
    .input('DONVITINH',sql.NChar, donvitinh)
    .input('GIATHUOC', giathuoc)

    const isSuccess = await request.execute(`SP_THEM1LOAITHUOC`)
    // console.log(isSuccess.returnValue)
    if (isSuccess.returnValue != 1 && isSuccess.returnValue != 2)
    {
        
        return true
    }
    
    return false
}

async function returnUpdateLoaiThuoc(idthuoc, tenthuoc, thanhphan, donvitinh, giathuoc)   //da check
{
    const request = new sql.Request()
    request.input('IDTHUOC', idthuoc)
    .input('TENTHUOC', tenthuoc)
    .input('THANHPHAN', thanhphan)
    .input('DONVITINH', donvitinh)
    .input('GIATHUOC', giathuoc)

    const isSuccess = await request.execute(`SP_CAPNHAT1LOAITHUOC`)
    if (isSuccess.returnValue != 1 && isSuccess.returnValue != 2)
    {
        
        return true
    }

    return false
}

async function returnAddDonThuoc(iddonthuoc, ngaycap, idbuoidieutri)   //
{
    const request = new sql.Request()
    request.input('IDDONTHUOC', iddonthuoc)
    .input('NGAYCAP', ngaycap)
    .input('IDBUOIDIEUTRI', idbuoidieutri)

    const isSuccess = await request.execute(`SP_THEMDONTHUOC`)
    if (isSuccess.returnValue != 1 && isSuccess.returnValue != 2)
    {
        
        return true
    }

    return false
}

async function returnAddChiTietDonThuoc(idthuoc, iddonthuoc, soluong)   //da check
{
    const request = new sql.Request()
    request.input('IDTHUOC', idthuoc)
    .input('IDDONTHUOC', iddonthuoc)
    .input('SOLUONG', soluong)

    const isSuccess = await request.execute(`SP_THEMCHITIETDONTHUOC`)
    console.log(isSuccess)
    if (isSuccess.returnValue != 1 && isSuccess.returnValue != 2)
    {
        
        return true
    }

    return false
}

async function returnDeleteDonThuoc(id)
{
    const request = new Request()
    request.input('IDDONTHUOC', id)

    const isSuccess = await request.execute(`SP_XOADONTHUOC`)
    if (isSuccess.returnValue != 1 && isSuccess.returnValue != 2)
    {
        
        return true
    }
    console.log(isSuccess.returnValue)
    return false
}

async function returnLoaiThuoc(tenthuoc)
{
    const request = new Request()
    request.input('tenthuoc',sql.NChar, tenthuoc)

    const result = await request.execute(`SP_TIM1LOAITHUOC`)
    return result
}

module.exports={returnAllDonThuoc,
    returnChiTietDonThuoc,
    returnDonThuoc,
    returnAddLoaiThuoc,
    returnUpdateLoaiThuoc,
    returnAddDonThuoc,
    returnAddChiTietDonThuoc,
    returnDeleteDonThuoc,
    returnLoaiThuoc
}