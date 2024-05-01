const prompt = require('prompt-sync')();
console.log("Conversor de temperatura Celsius para Fahrenheit");
let celsiusTemperature = prompt("Digite uma temperatura em Celsius: ");
let fahrenheitTemperature = celsiusTemperature*(9/5) + 32;
console.log(`${celsiusTemperature}°C são igual à ${fahrenheitTemperature}°F`);
