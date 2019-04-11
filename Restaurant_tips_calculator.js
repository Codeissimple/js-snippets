 
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
       
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
          percentage = 0.15;
      } else {
          percentage = 0.1;
      }
      
      this.tips[i] = bill + percentage;
      this.totals[i] = bill + (bill * percentage);
     }
      
      //populate the corresponding arrays
     
    }
  };


var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.totals = [];
    
    for (var i = 0; i < this.bills.length; i++){
      //determing tipping percentage based on the tipping rulles
      var percentage;
      var bill = this.bills[i];
       
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
          percentage = 0.1;
      } else {
          percentage = 0.25;
      }
      
      this.tips[i] = bill + percentage;
      this.totals[i] = bill + (bill * percentage);
     }
      
      //populate the corresponding arrays
     
    }
  };
  

function calcAverage(tips) {
  var sum = 0;
  for(var i =0; i < tips.length; i++){
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
  
  
john.calcTips();
mark.calcTips();

console.log(john, mark); 

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if(john.average > mark.average) {
  console.log(john.fullName + "'s family gives more tips with an average of $" + john.average);
} else if(john.average < mark.average) {
  console.log(mark.fullName + "'s family gives more tips with an average of $" + mark.average);
} else {
  console.log("Both families give equal amount of tips with an average of $" + john.average);
}

