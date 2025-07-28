const contenido = document.getElementById("Leandro");
let nombre = "Calin";

contenido.innerHTML = `<h2>${nombre}</h2>`;

function ActualizarNombre()
{
    const input = document.getElementById("InputNombre");
    nombre = input.value;
    console.log("Nombre actualizado: ", nombre);
    contenido.innerHTML = `<h2>${nombre}</h2>`;
}