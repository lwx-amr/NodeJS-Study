// reading file using fs module
var fs =  require('fs');
fs.readFile('./data.json', 'utf-8',(err, data) => {
    console.log(data);
    //console.log(data.name); // Not accessible because it just String not object
    // Solution
    var data  =  JSON.parse(data);
    console.log(data.name);

});

// Access Json file with require
var data = require('./data.json');
console.log(data.name);

// Reading directories
fs.readdir('/home/amr/Public',(err, data) => {
    console.log(data);
});

// Writing files
var details = {
    name : 'Amr Hussien',
    age  : '21Y',
    faculty: 'fci'
}
fs.writeFile('newData.json',JSON.stringify(details), (err) => {
    console.log('Writing Done', err);
});