//to drink or not to drink?

var firstName = "John";
var age = 19;

//ternary statement
age < 20 ? console.log("Version 1 - " + firstName + " won't drink beer today")
: console.log("Version 1 - " + firstName + " can drink beer!");

//shorter version
var drink = age >= 20 ? firstName + " can drink Beer" : firstName + " will drink Juice";
console.log("Version 2 -", (drink));
 
//if/else statement solution   

if (age < 20) {
  console.log("Version 3 - " + firstName + " should drink Juice, too young to drink beer");
} else {
  console.log("Version 3 - " +firstName + "is old enough to drink beer")
}

// Switch solution 2 - booleans. 
switch (true){
  case age < 20:
    console.log("version 5 - " + firstName + " drinking juice");
    break;
  case age >= 20: 
    console.log("version 5 - " + firstName + " drinking Beer");
}

console.log("*** end of snippet ***"); 
