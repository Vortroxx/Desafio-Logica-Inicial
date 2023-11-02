function calcularNivel(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
console.log(calcularNivel(50, 20));
