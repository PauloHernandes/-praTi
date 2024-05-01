const prompt = require("prompt-sync")();

let number;
let count = 0;
let sum = 0;
while(number!=0){
     number = parseFloat(prompt("Digite um número decimal: "));
    if(number != 0){
        count++
    }
     sum += number;
}
console.log(sum);
console.log(count);
console.log(`A media dos valores digitados é ${sum/count}`);