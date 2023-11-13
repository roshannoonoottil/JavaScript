const prompt= require('prompt-sync')();
let P=parseInt(prompt("Enter a principal Amount: "));
let R=parseFloat(prompt("Enter Rate of interest: "));
let n=parseFloat(prompt("Enter number of years: "));
let SI=parseFloat(SimpleInterest(P,R,n));
console.log("Simple Interest: "+SI);

function SimpleInterest(P,R,n){
    let SI =((P*R*n)/100);
    return SI;
}