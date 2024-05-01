let count = 0;
let first = 101;

//Enquanto eu nao verificar os proximos 50 numeros
while(count<50){
    //Divisor inicial
    let divider = 2;
    // Verifica se o numero é primo
    let primeNum = true;

    while (primeNum == true && divider < first) {
        if(first % divider===0){
            primeNum = false;
        }
        divider++;
    }
    if(primeNum == true){
        console.log(first);
        count++
    }
    first++;
}