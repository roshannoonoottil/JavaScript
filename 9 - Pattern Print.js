// const prompt = require('prompt-sync')();
var i
for(i=1;i<=5;i++){
    pattern="";
    for(j=1;j<=5;j++){
        if(j<=i){
            pattern+=j;
        } 
    }
    console.log(pattern); 
}