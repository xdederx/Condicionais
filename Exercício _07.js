const aposentada = false;
const PortadoraDeDoença = true;
const TotalDeRendimento = 3000000

if (aposentada === true) {
    console.log("Isenta");
} else if (PortadoraDeDoença === true) {
    console.log("Isenta");
} else if (TotalDeRendimento < 2866970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else if (TotalDeRendimento > 2866970)
    console.log("Pega leão");
