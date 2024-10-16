//variables

let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(
      `Me indicas un número por favor entre el 1 y ${numeroMaximoPosible} por favor:`
    )
  );
  console.log(typeof numeroUsuario);
  /* Este código realiza la comparación  */

  if (numeroUsuario == numeroSecreto) {
    //  Acertamos la verdadera condición
    alert(
      `acertaste el numero es:  ${numeroUsuario}``Lo hiciste en ${intentos} veces ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }

    // Incrementa el contador cuando no acierta
    //intentos = intentos + 1;
    // intentos +- 1;
    intentos++; // simplifica el codigo

    //palabraVeces = 'veces';

    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
    // La condición no se cumplio
    //alert("Lo siento no acertaste el número");
  }
}
