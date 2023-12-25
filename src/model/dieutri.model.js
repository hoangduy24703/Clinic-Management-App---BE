const sql = require ('mssql');

function te(dateA,dateB) {
    let request = new sql.Request()
    request.stream = true;

    request.input('DATEA', sql.Date, dateA)
            .input('DATEB',sql.Date, dateB)
    let result =  request.execute
    let rowsToProcess = [];
    request.on('row', row => {
    rowsToProcess.push(row);
    if (rowsToProcess.length >= 15) {
        request.pause();
        processRows();
    }
    });
        request.on('done', () => {
        processRows();
    });

    function processRows() {
    // process rows
        rowsToProcess = [];
        request.resume();
    }
}

async function returnAddChiTietDT(madieutri, idbuoidieutri)
{
    let request = new sql.Request()

    request.input('MADIEUTRI',sql.Char,madieutri)
    .input('IDBUOIDIEUTRI',sql.Char, idbuoidieutri)

    let isSuccess = await request.execute(`THEMCHITIETDT`)
    if (isSuccess.returnValue != 1)
    {
        
        return true
    }

    return false
}
async function returnRangDT(madieutri, iddieutri, tenrang, matdieutri)
{
    let request = new sql.Request()

    request.input('MADIEUTRI', madieutri)
            .input('IDBUOIDIEUTRI', iddieutri)
            .input('TENRANG',sql.NChar, tenrang)
            .input('MATDIEUTRI', matdieutri)

    let isSuccess = await request.execute(`THEMRANGDT`)
    if (isSuccess.returnValue != 1)
    {
        
        return true
    }

    return false
}
module.exports = {
    te,
    returnAddChiTietDT
}