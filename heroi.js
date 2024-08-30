const prompt = require("prompt-sync")();

let nomeHeroi;
let qtdXP;
let lv = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let x;

while(x !== 0){
    nomeHeroi = prompt("Digite o nome do seu Herói: ");

qtdXP = prompt("Qual a quantidade de XP que você possui?: ");
xp = qtdXP;

if(xp < 1000){
    console.log("Farm mais porque voce está no nivel inicial ainda: " + lv[0]);
}

else if(xp > 1000 && xp < 2001){
    console.log("Você está evoluindo conseguiu chegar no nivel: " + lv[1]);
}

else if(xp > 2000 && xp < 5001){
    console.log("Muito bem você está progedindo muito conseguiu chegar no nivel: " + lv[2]);
}

else if(xp > 5000 && xp < 7001){
    console.log("Muito bem cavaleiro você conseguiu chegar no nivel: " + lv[3]);
}

else if(xp > 7000 && xp < 8001){
    console.log("Incrivel, Cavaleiro conseguiu chegar no nivel proximo da Nobreza: " + lv[4]);
}

else if(xp > 8000 && xp < 9001){
    console.log("Parabéns você está no 3º nivel mais alto da aventura: " + lv[5]);
}

else if(xp > 9000 && xp < 10001){
    console.log("Parabéns você está no 2º nivel mais alto da aventura: " + lv[6]);
}

else {
    console.log("Impressionante você maximou o seu herói e está no level: " + lv[7]);
}

console.log("O Herói de nome: " + nomeHeroi + " " + "está no nível de" + " " + xp);
x = prompt("Voce quer encerrar o looping? Se sim Digite 0, Se não digite 1: ");
if (x == 0){
    break;
}

}