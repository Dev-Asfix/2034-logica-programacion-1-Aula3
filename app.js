// Inicializan la variables
let numero = 0;
let numeroSecreto = Math.floor(Math.random()*10+1); //Floor redondea , random da valor del 0 < 1 , cuantos numeros y el +1
//let palabraVeces = "vez";
let intentos = 1;
let maximoIntentos = 3;

//Para ver en la consola 
console.log(numeroSecreto);
// Bucle while que continúa hasta que 'numero' sea igual a 'numeroSecreto'
while(numero != numeroSecreto){
    numero = parseInt(prompt("Dame el numero : "));

    console.log(typeof(numero));
    if(numero == numeroSecreto){
        alert(`Ganaste el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "Veces"}`); //El codigo es como una plantilla , dentro podemos ejecutar codigo
    } else {
        if(numeroSecreto > numero){
            alert("El numero secreto es Mayor")
        }else {
            alert("El nnumero secreto es Menor")
        }
         // Cambia 'palabraVeces' a "veces" después del primer intento
        //palabraVeces = "veces";
        // Incrementa el contador de intentos en 1
        //intentos = intentos +1;
        //intentos +=1;
        intentos ++;
        if(intentos > maximoIntentos){
            alert(`Alcanzaste el numero ${maximoIntentos} ,maximos de intentos`);
            break;
        }
    }

}