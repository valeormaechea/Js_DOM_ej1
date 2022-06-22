let numeroAleatorio = 0;
let alerta = document.getElementById("alertAdivinanza");

function iniciarJuego() {
  alerta.className = "d-none";
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(`Inicio juego. ${numeroAleatorio}`);
}

function consultarNumero() {
  // Buscar el valor del input
  let numeroIngresado = parseInt(document.getElementById("inputNro").value);
  alerta.className = "d-none";
  console.log(numeroAleatorio);
  console.log(numeroIngresado);
  if (numeroIngresado === numeroAleatorio) {
    console.log("Ganaste!");
    alerta.className = "alert alert-success";
    alerta.innerHTML = "Adivinaste!";
  } else if (numeroIngresado > numeroAleatorio) {
    console.log("El numero magico es menor al ingresado.");
    alerta.className = "alert alert-danger";
    alerta.innerHTML = "El numero magico es menor al ingresado.";
  } else {
    console.log("El numero magico es mayor al ingresado.");
    alerta.className = "alert alert-warning";
    alerta.innerHTML = "El numero magico es mayor al ingresado.";
  }
}
