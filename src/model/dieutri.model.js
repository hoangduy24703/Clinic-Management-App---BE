
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

module.exports = {
    te,
}