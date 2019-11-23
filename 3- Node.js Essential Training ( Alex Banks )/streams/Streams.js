const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'utf-8');
const writeStream = fs.createWriteStream('./assets/newStreamFile.md', 'utf-8');


/*var textFile = "";
readStream.on('data', data => {
    console.log(`I read ${data.length} charcter of text`);
    textFile +=data;
});


readStream.once('data', data => {
    console.log(`Start: I read ${data.length} charcter of text`);
});

readStream.on('end', () => {
    console.log(`End: I read ${textFile.length} charcter of text`);
});*/

readStream.pipe(writeStream);



