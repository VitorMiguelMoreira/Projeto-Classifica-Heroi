nome = prompt("Digite o nome do herói: ")
let xp = parseInt(
    prompt("Digite a quantidade de xp: ")
)

if(xp <= 1000){
    nivel = "Ferro";
}   else if(1000 < xp && xp <= 2000){
    nivel = "Bronze"
}   else if(2000 < xp && xp <= 5000){
    nivel = "Prata"
}   else if(5000 < xp && xp <= 7000){
    nivel = "Ouro"
}   else if(7000 < xp && xp <= 8000){
    nivel = "Platina"
}   else if(8000 < xp && xp <= 9000){
    nivel = "Ascendente"
}   else if(9000 < xp && xp <= 10000){
    nivel = "Imortal"
}   else{
    nivel = "Radiante"
}

alert("O herói " + nome + " está no nível " + nivel)