"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Calculator Mini Project
//user output for use prompt
var prompt = require("prompt-sync")();
//prompt as a string value so use parseInt
var n1 = parseInt(prompt("please enter first number: ")); //first number
var n2 = parseInt(prompt("please enter second number: ")); //second number
var operator = prompt("please enter your operator:+,-,/,*"); //opertor +,-,/,*
//if else if condition 
if (operator == "+") {
    console.log("".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else if (operator == "-") {
    console.log("".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 - n2));
}
else if (operator == "*") {
    console.log("".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 * n2));
}
else if (operator == "/") {
    console.log("".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    console.log("slelect the correct operator");
}
