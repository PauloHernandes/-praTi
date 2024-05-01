const prompt = require('prompt-sync')();

console.log("Identificador de tringulo");

const sideA = parseInt(prompt("Digite o valor que corresponde ao lado A: "));
const sideB = parseInt(prompt("Digite o valor que corresponde ao lado B:"));
const sideC = parseInt(prompt("Digite o valor que corresponde ao lado C: "));

if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){

    if(sideA == sideB && sideB == sideC){
        console.log("Valores fornecidos formam um triangulo equilátero.");
    }else if((sideA != sideB && sideB != sideC)){
        console.log("Valores fornecidos formam um triangulo escaleno.");
    }else{
        console.log("Valores fornecidos formam um triangulo isósceles.");
    }
}else{
    console.log("Valores fornecidos não formam um triangulo.");
}