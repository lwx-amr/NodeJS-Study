const fs = require('fs');
const md = `
    #This is a new file

    we are using fs.witeFile

    * fs.readdir
    * fs.readFile
    * fs.writeFile
    * 
`;

// Listing directory elements
/*fs.readdir('./assets', (err, files)=>{
    if(err)
        throw err;
    console.log(`Completed \n`);
    console.log(files);
});
console.log("Start reading directory elements");


// Reading binary type
fs.readFile('./assets/alex.jpg', (err, img)=>{
    if(err){
        console.log(`An error has occured: ${err.message} `);
        process.exit();
    }
    console.log("File contents read");
    console.log(img);
});

// Writing files
fs.writeFile('./assets/notes.md', md.trim(), (err) => {
    if(err)
        throw err;

    console.log('File Saved!');
});

// Creating direcotry
const dirName = 'storage-files';
if(fs.existsSync(dirName)){
    console.log('Already there!');
        
}else{
    fs.mkdir(dirName, err=>{
        if(err)
            throw err;
        console.log('Direcotry created!');
    });
}

// Appedn data to fileif()
const colorData = require('./assets/colors.json');

colorData.colorList.forEach(element => {
   fs.appendFile('./storage-files/colors.md', `${element.color}: ${element.hex} \n`, err => {
       if(err)
            throw err;
        console.log('Data moved!');
   }); 
});

// Rename and delete files
fs.rename('./storage-files/colors.md', './storage-files/colorsData.md', err => {
    if(err)
        throw err;
    console.log('File Renamed!');
});

setTimeout(()=>{
    fs.unlinkSync('./assets/alex.jpg');
},4000);
*/

// Rename and delete dirs is the same , the only change is rmdir instead of unlink