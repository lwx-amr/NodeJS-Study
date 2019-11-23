const timeout = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () =>{
    currentTime += waitInterval;
    const p = Math.floor((currentTime/timeout) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`wainting ... ${p}%`);
};

console.log(`You have now ${timeout/1000} seconds delay`);
const timerFinished = () => {
    clearInterval(interval);   
    console.log(`\nDone`);
}
const interval = setInterval(incTime,waitInterval);
setTimeout(timerFinished, timeout);

