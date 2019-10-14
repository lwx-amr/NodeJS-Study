console.log('Stuff Module is Listening');

var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `The sum of the 2 number ${a+b}`
};

var pi = 3.142;

// module.exports.counter = counter;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  pi: pi,
  adder: adder
};
