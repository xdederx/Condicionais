const ladoA = 0;
const ladoB = 0;
let nomeDaBucha = "";
let valorDaBucha = ladoA;
let resultado = "";

if (ladoA === ladoB && ladoA !== 0) {
    if (ladoA === 1) {
        nomeDaBucha = "Bucha Ás";
    } else if (ladoA === 2) {
        nomeDaBucha = "Bucha Duque";
    } else if (ladoA === 3) {
        nomeDaBucha = "Bucha Terno";
    } else if (ladoA === 4) {
        nomeDaBucha = "Bucha Quadra";
    } else if (ladoA === 5) {
        nomeDaBucha = "Bucha Quina";
    } else if (ladoA === 6) {
        nomeDaBucha = "Bucha Sena";
    } else if (ladoA === 0) {
        nomeDaBucha = "Bucha Branco";
    }

    nomeDaBucha = "Bucha Terno";
    resultado = `É uma bucha: ${nomeDaBucha}`;
} else {
    resultado = "Não é uma bucha";
}

console.log(resultado);