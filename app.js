// Inicializan la variables
let numero = 0;
let numeroSecreto = 5;
let palabraVeces = "vez";
let intentos = 1;

// Bucle while que continúa hasta que 'numero' sea igual a 'numeroSecreto'
while(numero != numeroSecreto){
    numero = prompt("Dame el numero : ");
    console.log(numero);
    if(numero == numeroSecreto){
        alert(`Ganaste el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}`);5
    } else {
        if(numeroSecreto > numero){
            alert("El numero secreto es Mayor")
        }else {
            alert("El nnumero secreto es Menor")
        }
         // Cambia 'palabraVeces' a "veces" después del primer intento
        palabraVeces = "veces";
        // Incrementa el contador de intentos en 1
        intentos = intentos +1;
    }

}