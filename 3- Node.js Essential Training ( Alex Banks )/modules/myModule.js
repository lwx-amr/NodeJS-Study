var count = 1;

const inc = () => count++;
const dec = () => count--;
const getCount = () => {return count;};


module.exports = {
    inc, 
    dec,
    getCount
};