// Requring modules
var express = require('express');
var bodyPareser = require('body-parser');
var mongoose = require('mongoose');

// Creating our express server
var app = express();

// Creating our http server
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Database part
var dbUlr = 'mongodb+srv://amrister:mngbfhty64@todo-xp4ta.mongodb.net/test?retryWrites=true&w=majority';
var DbMessage = mongoose.model('message',{
    name: String,
    message: String
});

// Middlewares
app.use(express.static(__dirname));
app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended: false}));

// Get Method
app.get('/messages', (req, res, err) => {
    DbMessage.find({},(err, messages)=>{
        res.send(messages); 
    });
});

// Post Method
app.post('/messages', (req, res, err) => {
    var message = new DbMessage(req.body);
    message.save((err) => {
         if(err)
            res.sendStatus(500);

        io.emit('message',req.body);
        res.sendStatus(200);       
    });
});

// Socket connection event 
io.on('connection', (socket) => {
    console.log('New user logged in');
});

// Connect Database
mongoose.connect(dbUlr, {useNewUrlParser: true, useUnifiedTopology: true} ,(err) => {
    console.log('Mongo db connection, Error: ', err);
});

// Run our server
var server = http.listen(3000, () => {    
    console.log('Server is running on port: ', server.address().port);
}); 