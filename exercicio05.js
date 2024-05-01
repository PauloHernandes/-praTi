const prompt = require('prompt-sync')();

const firstNote = parseInt(prompt ("Digite a nota da prova do primeiro semestre: "));
const secondNote = parseInt(prompt ("Digite a nota da prova do segundo semestre semestre: "));
const average = (firstNote + secondNote) / 2;

if(average >=6){
    console.log(`Sua média é: ${average}.
    PARABÉNS! Você foi aprovado,`);
}else{
    console.log(`Sua média é: ${average}.
    Você foi REPROVADO! Estude mais`);
}
