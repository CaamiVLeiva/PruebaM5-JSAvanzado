import { Aguila } from "./clases/Aguila.mjs";
import { Leon } from "./clases/Leon.mjs";
import { Lobo } from "./clases/Lobo.mjs";
import { Oso } from "./clases/Oso.mjs";
import { Serpiente } from "./clases/Serpiente.mjs";
import { iife as funcionAutoejecutable } from "./modulo/iife.mjs";

const instanciadorAnimales = { Aguila, Leon, Lobo, Oso, Serpiente };

document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const nombreHTML = document.getElementById("animal");
    const edadHTML = document.getElementById("edad");
    const comentariosHTML = document.getElementById("comentarios");
    const { imagen, sonido } = await funcionAutoejecutable.obtenerDataJson(
        nombreHTML.value
    );

    if (!nombreHTML.value || !edadHTML.value || !comentariosHTML.value) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Creamos instancia de un animal
    let animal = new instanciadorAnimales[nombreHTML.value](
        nombreHTML.value,
        edadHTML.value,
        imagen,
        comentariosHTML.value,
        sonido
    );

    // Agregamos animal a lista de animales
    funcionAutoejecutable.addAnimal(animal);

    // Mostramos en contenedor de animales
    funcionAutoejecutable.cardsAnimal(
        funcionAutoejecutable.animalsArray,
        "Animales"
    );

    // Limpiar formulario
    funcionAutoejecutable.limpiar();
});

document.getElementById("animal").addEventListener("change", async (event) => {
    // event.target.value -> animal seleccionado
    const { imagen, sonido } = await funcionAutoejecutable.obtenerDataJson(
        event.target.value
    );
    const nombreAnimal = event.target.value;

    // imagen -> 'Aullido.jpg'
    const preview = document.getElementById("preview"); // Seleccionamos contenedor imagen
    preview.innerHTML = ""; // Limpiamos el contenedor
    const img = document.createElement("img"); // Creamos elemento "en el aire"
    img.src = `assets/imgs/${imagen}`; // Definimos atributo src de la imagen
    img.className = "img-fluid rounded"; // Definimos clases de bootstrap
    img.alt = nombreAnimal; // Propiedad alt
    preview.appendChild(img); // Recién añadimos a la DOM
});
