const prompt = require('prompt-sync')();

const apples = parseInt(prompt ("Digite o número de maçãs compradas: "));

if(apples >= 12){
    console.log(`Total da compra: R$${apples*0.25}`);
}else{
    console.log(`Total da compra: R$${apples*0.30}`);
}