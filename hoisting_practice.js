calcAge(1990);
//function declaration can be called before the function
function calcAge(year) {
  console.log(2019 - year);
}
/*function expression can only be called AFTER 
the function expression */
var retirement = function(year) {
  console.log(65 - (2019 - year));

}
retirement(1990);

/*Variable can be called before it's being declared,
 but than it returns undefined value */

console.log(age);
var age = 23; // global context

function foo() {
  var age = 65;
  console.log(age); //local context
}
foo(); //local context output
console.log(age); // global context output


