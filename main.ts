//Calculator Mini Project
//user output for use prompt
var prompt = require("prompt-sync")();
//prompt as a string value so use parseInt
let n1 = parseInt(prompt("please enter first number: "));//first number
let n2 = parseInt(prompt("please enter second number: "));//second number
let operator = prompt("please enter your operator:+,-,/,*");//opertor +,-,/,*
//if else if condition 
if (operator == "+") {
    console.log(`${n1} ${operator} ${n2} = ${n1+n2}`);
}else if (operator == "-") {
    console.log(`${n1} ${operator} ${n2} = ${n1-n2}`);
}else if (operator == "*") {
    console.log(`${n1} ${operator} ${n2} = ${n1*n2}`);
}else if(operator == "/") {
    console.log(`${n1} ${operator} ${n2} = ${n1/n2}`);
} else {
    console.log("slelect the correct operator");
}
export {};