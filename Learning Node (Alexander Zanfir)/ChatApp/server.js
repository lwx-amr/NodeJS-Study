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
var dbUlr = 'mongodb+srv://amrister:mngbfhty64@todo-xp4ta.mongodb.net/ChatApp?retryWrites=true&w=majority';
var DbMessage = mongoose.model('messages',{
    name: String,
    message: String
});
mongoose.Promise = Promise;

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

    // This is called callback hell or nested callback and it isn't clean code
   /* message.save((err) => {
         if(err)
            res.sendStatus(500);
        DbMessage.findOne({message: 'badword'},(err, censored) => {
            if(censored){
                console.log(censored);
                DbMessage.deleteOne({_id: censored.id}, (err) => {
                    console.log('Removed censored, Error: ', err);
                })
            }
        });
        io.emit('message',req.body);
        res.sendStatus(200);       
    }); */

    // Same code but using promises
    message.save()
    .then(()=>{
        console.log('Saved!!');
        return DbMessage.findOne({message: 'badword'});
    })
    .then( censored =>{
        if(censored){
            console.log(censored);
            return DbMessage.remove({_id: censored.id});
        }
        io.emit('message',req.body);
        res.sendStatus(200);   
    })
    .catch((err)=>{
        res.sendStatus(500);
        return console.error(err);
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