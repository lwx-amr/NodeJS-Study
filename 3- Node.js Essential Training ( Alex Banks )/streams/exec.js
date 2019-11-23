const cp = require('child_process');

cp.exec('open https://www.linkedin.com/learning');

cp.exec('ls', (err, data, stderr) =>{
    if(err){
        console.log(stderr);
    }
    console.log(data);
});

cp.exec('node Streams', (err, data) =>{
    if(err){
        throw err;
    }
    console.log(data);
});