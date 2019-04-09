 
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
          console.log(tips);
