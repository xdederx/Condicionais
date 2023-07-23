const AlturaEmCm = 197;

if (AlturaEmCm < 180) {
    console.log("Reprovado");
} else if (AlturaEmCm <= 185) {
    console.log("Líbero");
} else if (AlturaEmCm <= 195) {
    console.log("Ponteiro");
} else if (AlturaEmCm <= 205) {
    console.log("Oposto");
} else {
    console.log("Central");
}