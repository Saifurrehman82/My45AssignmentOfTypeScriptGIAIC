// Question 24: Operators Conditional Testing.
// Declaring Variables.
var orange = "orange";
var upperCaseOrange = "ORANGE";
var ten = 10;
var twenty = 20;
var fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
//Equality Check
console.log("\n Is Orange equal to Orange ?");
console.log(orange == "orange");
//Not Equality Check 
console.log("\n Is Orange not equal to Orange ?");
console.log(orange != "orange");
// Converting Uppercase into Lowercase.
console.log("\n Is Orange equal to Orange after converting UpperCase ?");
console.log(upperCaseOrange.toLowerCase() == "orange");
//
console.log("\n Is Orange not equal to Orange after converting in LowerCase ?");
console.log(upperCaseOrange.toLowerCase() != "orange");
// Numerical Tests (Equals to)
console.log("\n Is Ten equal to 20 ?");
console.log(ten == twenty);
//Is not Equals to.
console.log("\n Is ten not equal to twenty ?");
console.log(ten != twenty);
//Greater then
console.log("Is ten greater then 0 ?");
console.log(ten > 0);
//Less then
console.log("Is twenty is Less Then Ten?");
console.log(twenty < 10);
// Greater Then Equal to
console.log("Is Ten greater then or Equals to 5");
console.log(ten >= 5);
// Less then Equals To.
console.log("Is Twenty Less then or Equals to 10");
console.log(twenty <= 10);
// Testing Using "And" and "or" Operators.
console.log("\n Twenty is not equals to 10 and 20 is greater then 10");
console.log(twenty != 10 && twenty > 10);
//Using and Operators
console.log("\n Twenty is not equals to 10 and 20 is greater then 10");
console.log(twenty != 10 && twenty < 10);
//Using || (or) (One is True and One is False)
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
//Using || (or) (Both False)
console.log("\n 20 is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test Wether an item is in Array or not.
console.log("\n Is Orange is in my Fruits Array or not");
console.log(fruits.includes("Orange"));
//Test Wether an item is in Array or not.
console.log("\n Orange is not in my Fruits Array or not");
console.log(fruits.includes("Orange"));
