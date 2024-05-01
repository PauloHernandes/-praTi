const prompt = require('prompt-sync')();

let productOriginCode = parseInt(prompt("Digite codigo de origem do produto: "));
if(productOriginCode == 1){
    productOriginCode = "Sul"
}else if(productOriginCode == 2){
    productOriginCode = "Norte";
}else if(productOriginCode == 3){
    productOriginCode = "Leste";
}else if(productOriginCode == 4 ){
    productOriginCode = "Oeste";
}else if(productOriginCode == 5 || productOriginCode == 6 ||productOriginCode >= 25 && productOriginCode <= 50){
    productOriginCode = "Nordeste";
}else if(productOriginCode == 7 || productOriginCode == 8 || productOriginCode ==9){
    productOriginCode = "Sudeste";
}else if(productOriginCode >= 10 && productOriginCode <= 20){
    productOriginCode = "Centro-Oeste";
}else{
    productOriginCode = "Produto importado";
}
console.log(productOriginCode);