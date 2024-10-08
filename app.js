// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
     rojo = inputRojo.value
     verde = inputVerde.value
     azul = inputAzul.value
     color =`rgb(${rojo},${verde},${azul})`

    document.body.style.backgroundColor = color
    
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
    
    e.target.value;
    textoRojo.textContent=inputRojo.value

    actualizarColor();

});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
  // Actualiza el valor de la variable y el texto.
  e.target.value
  textoVerde.textContent = inputVerde.value
  // Llama a la función para actualizar el color de fondo.
  actualizarColor();
    


  
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
  // Actualiza el valor de la variable y el texto.
  e.target.value
  textoAzul.textContent = inputAzul.value
  // Llama a la función para actualizar el color de fondo.
  
    actualizarColor();
});