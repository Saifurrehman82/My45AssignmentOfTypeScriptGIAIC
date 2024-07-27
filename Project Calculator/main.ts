// Calculator in TypeScript Using Terminal Input

var prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Enter Your First Number:"));
let num2 = parseInt(prompt("Enter Your Second Number:"));

let operator = (prompt("Enter Operator (+,-,*,/):"));

if (operator = "+"){
console.log(`The Answer of ${num1} ${operator} ${num2} = ${num1+num2}`);
}

if (operator = "-"){
console.log(`The Answer of ${num1} ${operator} ${num2} = ${num1-num2}`);
}

if (operator = "*"){
console.log(`The Answer of ${num1} ${operator} ${num2} = ${num1*num2}`);
}
        
if (operator = "/"){
console.log(`The Answer of ${num1} ${operator} ${num2} = ${num1/num2}`);
} else {
    console.log("Please Select correct operator");
}
export {};