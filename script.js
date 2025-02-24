// dichiarazione variabili
let age
let kilometer
let disocount = 0
let price

// assegnazioni dei valori dell utente 

age = prompt ("Ciao inserisci la tua età")
kilometer = prompt ("Ora dimmi i kilometri che vorrai percorrere")


// conversione da stringa a numeri  
age = parseInt(age)
kilometer = parseInt(kilometer)

// controlli 

if (isNaN(age) || isNaN(kilometer)){
    console.log ( "età o kilometri non validi per favore inserire un numero valido")

    // controlli eta per lo sconto 
} else {
    if (age <= 18){
        disocount = 20
    }
    else if (age >= 60) {
        disocount = 40
    }
    // calcolo sconto 

    disocount = (0.21 * disocount)/100

    price = (kilometer * 0.21 ) - disocount
    price = price.toFixed(2)

    // dichiarazione prezzo totale 
   console.log (`il totale del tuo viaggio  ${ price} euro`) 
}

