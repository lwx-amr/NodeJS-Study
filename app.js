// ------------------------ Every thing is reference ---------------------------
var amr = {
  favFood: 'Sanya Batats',
  favTeam: 'Zamalek'
};
var person  = amr;
console.log(person.favFood);
person.favFood = 'Renga';
console.log(person.favFood);
console.log(amr.favFood);

// ------------------------- This ----------------------------
var amr = {
    printFirstName: function(){
      console.log('My name is Amr');
    }
};