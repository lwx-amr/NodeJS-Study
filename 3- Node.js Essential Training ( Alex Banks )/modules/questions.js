const collectAnswers = require('./lib/collectAnswers');

const questions = [
    "What is your name? ",
    "What would you rather be doing? ",
    "What is your your favourite programming language? "
]


const emitter = collectAnswers(questions);

emitter.on('answer', (answer) => {
    console.log(`Question answered: ${answer}`);
});

emitter.on('complete', (answers) => {
    console.log('Thanks for your time!');
    console.log(answers);
});

emitter.on('complete', () => {
   process.exit(); 
});