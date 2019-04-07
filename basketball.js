
var teamMaryAverage = (97 + 123 + 105) / 3;
var teamJohnAverage = (89 + 120 + 103) / 3;
var teamMikeAverage = (116 + 94 + 123) / 3;

console.log("John's team score = " + teamJohnAverage + "\n" + "Mike's team score = " + teamMikeAverage + "\n" + "Mary's team score = " + teamMaryAverage);
console.log("");

// Solution 1 - basic

console.log("Solution 1");

if (teamJohnAverage > teamMikeAverage) {
  console.log("John's Team winning with " + teamJohnAverage + " points!")
} else if (teamJohnAverage === teamMikeAverage) {
  console.log("It was a tie!")
} else {
  console.log("Mike's team winning with " + teamMikeAverage + " points!")
}

console.log("");

//Solution 2 - switch statements

console.log("Solution 2");

switch(true) {
  case teamJohnAverage > teamMikeAverage:
    console.log("John win!");
    break;
  case teamJohnAverage < teamMikeAverage:
    console.log("Mike Win!");
    break;
  case teamJohnAverage === teamMikeAverage:
    console.log("It's a tie!");
    break;
}

console.log("");

//Solution 3 - function.

console.log("Solution 3");

function teamWinner() {
  if (teamJohnAverage > teamMikeAverage) {
    console.log("John win!");
    } else if (teamJohnAverage < teamMikeAverage){
        console.log("Mike team wins!");
    } else {
        console.log("There's a draw!");
    }
}
teamWinner();

console.log("");

//Three teams play -function.


console.log("Three teams competition");

function champWinner() {
  if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
    console.log("John win!");
    } else if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage){
        console.log("Mike team wins!");
    } else if (teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage) {
        console.log("Mary team wins!");
    } else {
      console.log("There's a draw!")
    }
}
champWinner();


console.log("");
console.log("---End of Run---");
console.log("");
