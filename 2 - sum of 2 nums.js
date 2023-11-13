const prompt = require('prompt-sync')();
let num1 =parseInt(prompt("Enter first number: "));
let num2 =parseFloat(prompt("Enter second number: "));
let sum =parseFloat(Sum(num1,num2));
console.log("Sum: "+sum);
 
function Sum(num1,num2){
    let sum=num1+num2;
    return sum;
}