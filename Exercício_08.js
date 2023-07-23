const idade = 13;
const patologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65) {
    console.log("Acesso Negado");
} else if (patologia === true) {
    console.log("Acesso Negado");
} else if (idade >= 12 || idade < 18) {
    console.log("10 Reais");
} else if (idade >= 18 || idade <= 65) {
    console.log("20 Reais")
} else if (altura < 150) {
    console.log("Acesso Negado");
}

