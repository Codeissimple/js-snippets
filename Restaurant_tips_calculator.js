 
function tipCalculator(bill) {
  var percentage;
  if(bill < 50) {
    percentage = .2;
  } else if(bill >=50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}
console.log(tipCalculator());

var bills = [48, 124, 268]
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var final = [bills[0] + tips[0],
            bills[1] + tips[1],
            bills[2] + tips[2]];
console.log(tips, final);


// Solution 2


var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.totals = [];
    
    for (var i = 0; i < this.bills.length; i++){
      //determing tipping percentage based on the tipping rulles
      var percentage;
      var bill = this.bills[i];
       
      if (bill = 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
          percentage = 0.15;
      } else {
          percentage = 0.1;
      }
     }
      
      //populate the corresponding arrays
      this.tips[i] = bill + percentage;
      this.totals[i] = bill + (bill * percentage);
    }
  }

john.calcTips();
console.log(john);
