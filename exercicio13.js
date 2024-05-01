const prompt = require("prompt-sync")();

for (let i = 0; i < 5; i++) {
  const value = parseInt(prompt("Digite um número: "));

  if (value > 0) {
    for (let n = 1; n <= value; n++) {
      console.log(`${n} x ${value} = ${n * value}`);
    }
  } else {
    console.log("Número digitado não é válido");
  }
}