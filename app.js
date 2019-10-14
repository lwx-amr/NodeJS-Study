// ------------------------- The Global Object --------------------------------

// Common between node and normal JS ( Window object )
console.log('Log is Common in window and here');
setTimeout(function() {
  console.log('3 seconds passed');
},3000);
var time = 0;
var timer = setInterval(function(){
  time+=2;
  console.log(time+ ' Seconds passed');
  if(time>5)
    clearInterval(timer);
},2000);

// Only in Node
console.log(__dirname);
console.log(__filename);


// --------------------------- Function  -----------------------------------

// Normal function
function sayHi(){
  console.log('Hey there!!');
}
sayHi();

// Function Expression
var sayBye = function(){ // Also called Anonymous Function
  console.log('Bye!!');
};
sayBye();

// Pass function to another
function callFun(fun){
  fun();
}
callFun(sayBye);


// --------------------------- Modules -------------------------------------

// Require Modules
var stuff = require('./modules/stuff');
console.log(stuff.counter('amr', 'nada', 'asel')); // Managable beacuse of adding exports statement for this method inside the module
console.log(stuff.adder(5,7));
console.log(stuff.adder(5,stuff.pi));

// Require built in module
var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssg) {
  console.log(mssg);
});
myEmitter.emit('someEvent','Some Event is emitted');

var util  = require('util'); // Module used to inheritance handling
var Person  = function(name){
  this.name = name;
}
util.inherits(Person, events.EventEmitter);
var james = new Person('James');
var mary = new Person('Mary');
var sam = new Person('Sam');
var people = [james,mary,sam];
people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name +' said: ' + mssg );
  })
})
james.emit('speak','Hey Bro!!');



// ---------------------------------- Files and Directories -----------------------------------

// Read and Write Files
const fs = require('fs');
// var readedFile = fs.readFileSync('file.txt', 'utf8'); // Run will stuck here till finish reading (Sync)
// var writeNewFile = fs.writeFileSync('newFile.txt', readedFile + 'Wow i\'m new');
fs.readFile('file.txt','utf8',function(err,data){ // Async Method
  console.log('Async method speaks: ' + data);
  fs.writeFile('newFile.txt', data + 'Wow i\'m new', function(){});
})
// fs.unlinkSync('newFile.txt'); // to Delete
// fs.mkdir('newDir',function(){
//   fs.readFile('file.txt','utf8',function(err,data){
//     fs.writeFile('./newDir/newFile.txt', data,  function(){});
//   });
// });
fs.unlink('./newDir/newFile.txt',function(){
  fs.rmdirSync('newDir');
}) ;
