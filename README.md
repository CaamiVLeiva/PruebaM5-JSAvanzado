# Animales en Investigación

Este proyecto es una aplicación web para registrar y mostrar información sobre animales en investigación. Utiliza Bootstrap 4 para el diseño y JavaScript modular para manejar la lógica de la aplicación. 

## Características

- **Registro de Animales:** Permite ingresar y registrar información sobre animales, incluyendo nombre, edad estimada y comentarios.
- **Visualización:** Muestra los animales registrados en tarjetas con imágenes y sonidos correspondientes.
- **Interactividad:** Utiliza JavaScript para manejar eventos y actualizar dinámicamente la interfaz de usuario.

## Tecnologías Utilizadas

- **HTML/CSS:** Estructura y diseño de la aplicación.
- **Bootstrap 4:** Estilización y diseño responsivo.
- **JavaScript:** Lógica de la aplicación, incluyendo módulos ES6 y IIFE.
- **Fetch API:** Para obtener datos de un archivo JSON.
- **Audio:** Para reproducir sonidos asociados a los animales.


## Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/CaamiVLeiva/PruebaM5-JSAvanzado.git
    ```

3. **Abre el archivo `index.html` en un navegador web para ver la aplicación en funcionamiento.**

## Estructura del Proyecto

- `index.html`: Archivo principal que contiene la estructura de la página.
- `assets/css/estilos.css`: Estilos personalizados para la aplicación.
- `assets/js/index.js`: Archivo principal de JavaScript que maneja la lógica de la aplicación.
- `assets/clases/*.mjs`: Clases de JavaScript que representan los diferentes tipos de animales.
- `assets/modulo/iife.mjs`: Módulo IIFE que maneja la lógica y el estado de la aplicación.
- `animales.json`: Archivo JSON que contiene los datos de los animales.

## Uso

1. **Registrar un Animal:**
    - Selecciona un animal del menú desplegable.
    - Elige un rango de edad.
    - Agrega comentarios.
    - Haz clic en "Agregar" para registrar el animal.

2. **Ver Animales Registrados:**
    - Los animales registrados se mostrarán en la sección correspondiente de la página.
