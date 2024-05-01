const prompt = require('prompt-sync')();

console.log("Digite quatro números inteiros:");

let number1 = parseInt(prompt("Digite o primeiro número: "));
let number2 = parseInt(prompt("Digite o segundo número: "));
let number3 = parseInt(prompt("Digite o terceiro número: "));
let number4 = parseInt(prompt("Digite o quarto número: "));

number4 = number1 + number2 + number3;
number1 += 25;
number2 *= 3;
number3 = 0.12 * number3;

console.log(`A soma do primeiro inteiro com 25 é: ${number1}`);
console.log(`O triplo do segundo inteiro é: ${number2}`);
console.log(`12% do terceiro inteiro é: ${number3}`);
console.log(`A soma entre os três priemiros inteiros digitados é: ${number4}`);


