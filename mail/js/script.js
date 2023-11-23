/* Creare una costante e definire delle email casuali; */
const emails = ["jason50@gmail.com", "david90@gmail.com", "simo90@gmail.com", "adam12@gmail.com"];

/* Permettere all'utente di inserire l'email, creando un prompt; */
let email_utente = prompt("Inserisci la tua e-mail");

let validation = false;

/* Creare un ciclo "for" per le email, e stampare; */
for(let i = 0; i < emails.length; i++){

    if(email_utente == emails[i]){
        validation = true;
    }
}

if(validation){
    alert("Ben tornato!");
}
else{
    alert("Spiacenti, email non esistente");
}
