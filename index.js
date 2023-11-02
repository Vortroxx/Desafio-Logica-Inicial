let nickname = " Vortrox "

if (nickname < 1000) {
    nivel = "Ferro";
} else if (nickname <= 2000) {
    nivel = "Bronze";
} else if (nickname <= 5000) {
    nivel = "Prata";
} else if (nickname <= 7000) {
    nivel = "Ouro";
} else if (nickname <= 8000) {
    nivel = "Platina";
} else if (nickname <= 9000) {
    nivel = "Ascendente";
} else if (nickname <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nickname + " está no nível de " + nivel);

