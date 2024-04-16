let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")

let btnEnviar = document.getElementById("btnEnviar")

let nombreV = "";
let apellidoV = "";

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();

    nombreV = nombre.value;
    apellidoV = apellido.value;

    console.log(`Nombre: ${nombreV}, apellido: ${apellidoV}`)
});