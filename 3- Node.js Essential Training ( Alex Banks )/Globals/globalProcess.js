// Global process
console.log(process.pid);
console.log(process.versions.node);


const [,,fname,sname] = process.argv; //node globalProcess amr hussien
console.log(`Your name is ${fname} ${sname}`);

// Exmaple to get parameters 
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};
//node globalProcess -- greeting "Hey There!" --user "Amr Hussien"
const greeting = grab("--greeting"); 
const user = grab("--user");

console.log(`${greeting} ${user}`);
