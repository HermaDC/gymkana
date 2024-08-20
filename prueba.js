let puntos = 0;

function sumarPuntos(cantidad) {
    puntos += cantidad;
    actualizarPuntuacionEnPantalla();
    guardarPuntos();
    }

function actualizarPuntuacionEnPantalla() {
    document.getElementById('puntuacion').innerText = `Puntos: ${puntos}`;
    }

function guardarPuntos() {
    localStorage.setItem('puntos', puntos);
    }

function cargarPuntos() {
    puntos = parseInt(localStorage.getItem('puntos')) || 0;
    actualizarPuntuacionEnPantalla();
    }

document.getElementById('btnCompletarPrueba').addEventListener('click', function() {
    sumarPuntos(10); // Añade 10 puntos cuando se completa la prueba
    });