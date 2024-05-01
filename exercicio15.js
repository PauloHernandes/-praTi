const prompt = require("prompt-sync")();

let number;
let weight;
let sumNum = 0;
let sumWeight = 0;
while(number!=0){
     number = parseFloat(prompt("Digite um número decimal: "));
     if(number == 0){
        console.log(`A media ponderada dos valores digitados é ${(sumNum/sumWeight).toFixed(2)}`);
        break;
     }
     weight = parseFloat(prompt("Digite o peso do número: "));
     sumNum += number * weight;
     sumWeight += weight;
}

