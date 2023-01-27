var xlsx = require("xlsx");
var dataPathExcel = "database.xlsx";
var wb;
var sheeName;
var sheeValue;
var excelData;
const path = require('path');
const file = path.join(__dirname, 'data.xlsx');
$(function(){
    $('#load-data').click(function(){
        
        wb=xlsx.readFile(dataPathExcel);
        sheeName = wb.SheetNames[0];
        sheeValue = wb.Sheets[sheeName];
        //console.log(sheeValue);

        excelData = xlsx.utils.sheet_to_json(sheeValue);
        console.log(excelData);
    });
});

$(function(){
    $('#loginText').click(function(){
        $('#loginModal').modal('show');
    });
});
