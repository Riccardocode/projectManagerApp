var xlsx = require("xlsx");
var dataPathExcel = "database.xlsx";
var wb=xlsx.readFile(dataPathExcel);
var sheeName = wb.SheetNames[0];
var sheeValue = wb.Sheets[sheeName];
//console.log(sheeValue);

var excelData = xlsx.utils.sheet_to_json(sheeValue);
console.log(excelData);