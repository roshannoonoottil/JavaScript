const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");

for(i=1;i<=10;i++){
    let mul=num*i;
    console.log(i +" x "+num+" = "+mul+"\n");
}