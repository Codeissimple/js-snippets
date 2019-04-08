/*
var cafeBill = 48;
var bistroBill = 124;
var restaurantBill = 268;

var tipsSpend = []
var itemizedSpending = [];


function calculateBudget()
*/


/*
function calculateBudget() {
var bills = [48, 124, 268];
var tipsSpend = [];
var itemizedSpending = [];
  for (i<0, i = this.bills.length, i++) {
    if (i < 50) {
    this.bills.[i] = i * 2 /100;
    console.log([i]);
  } else if (i >= 50 || i < 200){
    this.bills.[i] = i * 1.5 /100;
  } else if (i > 200) {
    this.bills.[i] = i * 1 /100;
  }
};
*/

var cafeBill = 48;
var bistroBill = 124;
var restaurantBill = 268;

var bill = 48;


var itemizedSpending = [];


function calculateBudget(bill) {

  switch(true) {
    case bill < 50:
      tip = bill * 0.2;
      console.log("The tip amount for this bill is equal to " + tip);
      break;
    case bill >=50 || bill < 200:
      tip = bill * 0.15;
      console.log("The tip amount for this bill is equal to " + tip);
      break;
    case bill >=200:
      tip = bill * 0.1;
      console.log("The tip amount for this bill is equal to " + tip);
      break;
  }
}

calculateBudget(300);

