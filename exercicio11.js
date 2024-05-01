const prompt = require('prompt-sync')();

let value;
do{
    value = prompt("Digite um número inteiro: ");
    if(value >= 0){
        console.log(value%2 == 0 ?`O valor ${value} é um número par` : `O valor ${value} é um número impar`);
    }
}while(value>=0);