const prompt = require('prompt-sync')();

const getWhiteVotes =   parseInt(prompt("Digite o número de votos brancos: "));
const getNullVotes = parseInt(prompt("Digite o número de votos nulos: "));
const getValidVotes = parseInt(prompt("Digite o número de votos válidos: "));
const totalVoters = getWhiteVotes + getNullVotes + getValidVotes;


const percentageWhiteVotes = (getWhiteVotes/totalVoters)*100;
const percentageNullVotes = (getNullVotes/totalVoters)*100;
const percentageValidVotes = (getValidVotes/totalVoters)*100;

if(getWhiteVotes >= 0 && getNullVotes >=0 && getWhiteVotes >= 0){
    console.log(`
    De acordo com os dados de entrada o percentual da votação é:
    Votos brancos: ${percentageWhiteVotes.toFixed(0)}
    Votos nulos: ${percentageNullVotes.toFixed(0)}
    Votos válidos: ${percentageValidVotes.toFixed(0)}`);
}else{
    console.log('Erro de calculo. Números negativos não são válidos.');
}

