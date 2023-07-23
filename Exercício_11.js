const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos > 60) {
    console.log("Você não deve nada")
} else {
    const valorparcela = (rendaMensalEmCentavos / 100) * 18 / 100;
    console.log('O valor de parcela desse mês é R$ ${valorparcela} Reais');
}