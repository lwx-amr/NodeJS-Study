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

app.get('/messages/:user',(req, res, err)=>{
    var user =  req.params.user;
    DbMessage.find({name: user},(err, messages)=>{
        res.send(messages); 
    });
})

// Post Method
app.post('/messages', async (req, res, err) => {

    try{
        var message = new DbMessage(req.body);

        // Same code but using promises
        var savedMessage = await message.save();
        
        console.log('Saved!!');
        
        var censored = await DbMessage.findOne({message: 'badword'});
    
        if(censored){
            await DbMessage.remove({_id: censored.id});
        }else{
            io.emit('message',req.body);
        }
        res.sendStatus(200);
    } catch(err){
        res.sendStatus(500);
        return console.error(err);
    } finally{
        // Will get executed after try or catch
        //Examples
        // logger.log('message post called')
        // connecttion.close();
        console.log('message post called')
    }

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