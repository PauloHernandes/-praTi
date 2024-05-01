const prompt = require('prompt-sync')();

const value1 = parseInt( prompt("Digite primeiro número: "));
let value2 = parseInt(prompt("Digite segundo número: "));
while(value1 === value2){
    console.log("Os dois valores não podem ser iguais!");
    value2 = parseInt(prompt("Digite novamente segundo número: "));
}
if(value1>value2){
    console.log(`${value2}, ${value1}`);
}else{
    console.log(`${value1}, ${value2}`);
}