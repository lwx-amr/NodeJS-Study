const readline = require('readline');
const {EventEmitter} = require('events');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done = f => process.exit() ) => {
    const myAnswers=[];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();
    const questionAnswered = answer =>{
        emitter.emit('answer', answer);
        myAnswers.push(answer);
        if(myAnswers.length < questions.length){
            rl.question(questions[myAnswers.length], questionAnswered);        
        }else{
            emitter.emit('complete', myAnswers);
            done(myAnswers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
    return emitter;    
};

