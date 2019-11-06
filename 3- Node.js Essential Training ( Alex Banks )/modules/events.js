const events = require('events');

const emitter =  new events.EventEmitter();

emitter.on('custom-event', (message, user) => {
    console.log(`${user}: ${message}`);
});

process.stdin.on("data", data => {
    var input  =  data.toString().trim();
    if(input === "exit"){
        emitter.emit('custom-event','Goodbye!', "Process");
        process.exit();
    }
    emitter.emit('custom-event', input, "Terminal");
});

