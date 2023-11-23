/* CREO LA VARIABILE PLAYER E GENERO UN NUMERO RANDOMICO DA 1-6*/
let player = Math.floor((Math.random() * 6) + 1);
console.log(player);

/* CREO LA VARIABILE COMPUTER E GENERO UN NUMERO RANDOMICO DA 1-6*/
let computer = Math.floor((Math.random() * 6) + 1);
console.log(computer);

/* CREO CONFRONTO TRA LE DUE VARIABILI */
if(player > computer){
    console.log("player è il vincitore");
}
else if(player < computer){
    console.log("computer è il vincitore");
}
else{
    console.log("parità");
}