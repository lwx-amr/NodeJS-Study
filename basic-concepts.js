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
var Tami = {
    printFirstName: function(){
      console.log('My name is Amr');
      console.log(this === Tami);
    }
};
Tami.printFirstName();

// Default calling context is global
function imWorthless(){
  console.log('Hey, I\'m worthless');
  console.log(this === global);
}
imWorthless();

// ------------------------- Prototype ----------------------------
function User(){
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetedPlayer){
    this.life --;
    targetedPlayer.life ++;
    console.log(this.name + " gave 1 life to " + targetedPlayer.name);
  }
}

var sam = new User();
var saly = new User();
sam.name = "Sam";
saly.name = "Saly";

User.prototype.uppercut = function uppercut(targetedPlayer){
  targetedPlayer.life -=3;
  console.log(this.name + " uppercutted " + targetedPlayer.name);
}
User.prototype.magic = 60;

sam.uppercut(saly);
console.log(sam.life);
console.log(saly.life);

sam.giveLife(saly);
console.log(sam.life);
console.log(saly.life);

console.log(sam.magic);
console.log(saly.magic);
