// Calculate and compare BMI of Mark and John 

//basic solution

var massMark = 68;
var heightMark = 183;
var massJohn = 70;
var heightJohn = 160;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var higherBmi = bmiMark > bmiJohn;
console.log("is Mark's BMI higher, than John's?"  + " " + higherBmi);


// if/else statement solution


var massMark = 68;
var heightMark = 183;
var massJohn = 70;
var heightJohn = 160;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher, than John's");
} else {
  console.log("Mark's BMI is lower, than John's");
}

// Object/Method solution



var john = {
  firstname: "John",
  weight: 68,
  height: 1.83,
  calcBmi: function(){
    this.bmi = this.weight / (this.height ^ 2);
    return this.bmi;
  }
}
 
var mark = {
  firstName: "Mark",
  weight: 78,
  height: 1.69,
  calcBmi: function(){
    this.bmi = this.weight / (this.height ^ 2);
    return this.bmi;
  }
}

if (john.calcBmi() > mark.calcBmi()) {
  console.log("John's BMI is higher, than Mark's at " + john.bmi);
} else if(john.bmi < mark.bmi) {
    console.log("Mark's BMI is higher, than John's at " + mark.bmi);
} else if (john.bmi === mark.bmi){
    console.log("John's and Mark's BMI are equal at  " + john.bmi);
}
