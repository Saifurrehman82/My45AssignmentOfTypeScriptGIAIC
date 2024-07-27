"use strict";
// Calculator in TypeScript Using Terminal Input
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var num1 = parseInt(prompt("Enter Your First Number:"));
var num2 = parseInt(prompt("Enter Your Second Number:"));
var operator = (prompt("Enter Operator (+,-,*,/):"));
if (operator = "+") {
    console.log("The Answer of ".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(num1 + num2));
}
if (operator = "-") {
    console.log("The Answer of ".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(num1 - num2));
}
if (operator = "*") {
    console.log("The Answer of ".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(num1 * num2));
}
if (operator = "/") {
    console.log("The Answer of ".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(num1 / num2));
}
else {
    console.log("Please Select correct operator");
}
