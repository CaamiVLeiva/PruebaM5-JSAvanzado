import { Animal } from "./Animal.mjs";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        return 'Rugido 🦁';
    }
}

export { Leon };
