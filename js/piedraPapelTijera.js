let cartaEscogida = '';
let cartaRandomMaquina = '';
let puntosUsuario = 0;
let puntosMaquina = 0;
let cartasClickadas = 0;
var ventana = window.matchMedia("(max-width: 800px)")

/**
 * El usuario puslará un botón/carta y será la que se mostrará
 * @param {cartaUsuario} carta 
 */
function juego(carta) {
    let cartaUsuario = document.getElementById('usuario');
    cartaUsuario.src = 'imagenes/' + carta + '.svg';
    cartaEscogida = carta;

    let resultado = document.querySelector('.resultado');
    if (!ventana.matches) {
        resultado.innerHTML = 'ESCOGIENDO!';
    }
    const intervalo = setInterval(function () {
        cartaMaquina();
    }, 200);
    setTimeout(function () {
        clearInterval(intervalo);
        cartaMaquina();
        encontrarGanador(cartaEscogida, cartaRandomMaquina, resultado, ventana);
        document.getElementById('marcador');
        marcador.innerHTML = puntosUsuario + " - " + puntosMaquina;
    }
        , 1500);
}

/**
 * Escoge una carta random para la maquina
 */
function cartaMaquina() {
    let cartaRandom = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let maquina = document.getElementById('maquina');
    if (cartaRandom === 1) {
        maquina.src = 'imagenes/papel.svg';
        cartaRandomMaquina = 'papel';
    } else if (cartaRandom === 2) {
        maquina.src = 'imagenes/piedra.svg';
        cartaRandomMaquina = 'piedra';
    } else {
        maquina.src = 'imagenes/tijera.svg';
        cartaRandomMaquina = 'tijera';
    }
    // console.log(cartaRandom);
}

/**
 * Función para encontrar al ganador de cada ronda
 * @param {} cartaEscogida 
 * @param {*} cartaRandomMaquina 
 */
function encontrarGanador(cartaEscogida, cartaRandomMaquina, resultado, ventana) {
    if (ventana.matches) {
        resultado.innerHTML = '';
        if (cartaEscogida === 'papel') {
            if (cartaRandomMaquina === 'papel') {
                alert('HABEIS EMPATADO!');
            } else if (cartaRandomMaquina === 'piedra') {
                alert('HAS GANADO!');
                puntosUsuario += 1;
            } else if (cartaRandomMaquina === 'tijera') {
                alert('HAS PERDIDO!');
                puntosMaquina += 1;
            }
        } else if (cartaEscogida === 'piedra') {
            if (cartaRandomMaquina === 'piedra') {
                alert('HABEIS EMPATADO!');
            } else if (cartaRandomMaquina === 'papel') {
                alert('HAS PERDIDO!');
                puntosMaquina += 1;
            } else if (cartaRandomMaquina === 'tijera') {
                alert('HAS GANADO!');
                puntosUsuario += 1;
            }
        } else if (cartaEscogida === 'tijera') {
            if (cartaRandomMaquina === 'tijera') {
                alert('HABEIS EMPATADO!');
            } else if (cartaRandomMaquina === 'piedra') {
                alert('HAS PERDIDO!');
                puntosMaquina += 1;
            } else if (cartaRandomMaquina === 'papel') {
                alert('HAS GANADO!');
                puntosUsuario += 1;
            }
        }
    } else {
        if (cartaEscogida === 'papel') {
            if (cartaRandomMaquina === 'papel') {
                resultado.innerHTML = 'HABEIS EMPATADO!';
            } else if (cartaRandomMaquina === 'piedra') {
                resultado.innerHTML = 'HAS GANADO!';
                puntosUsuario += 1;
            } else if (cartaRandomMaquina === 'tijera') {
                resultado.innerHTML = 'HAS PEDIDO!';
                puntosMaquina += 1;
            }
        } else if (cartaEscogida === 'piedra') {
            if (cartaRandomMaquina === 'piedra') {
                resultado.innerHTML = 'HABEIS EMPATADO!';
            } else if (cartaRandomMaquina === 'papel') {
                resultado.innerHTML = 'HAS PEDIDO!';
                puntosMaquina += 1;
            } else if (cartaRandomMaquina === 'tijera') {
                resultado.innerHTML = 'HAS GANADO!';
                puntosUsuario += 1;
            }
        } else if (cartaEscogida === 'tijera') {
            if (cartaRandomMaquina === 'tijera') {
                resultado.innerHTML = 'HABEIS EMPATADO!';
            } else if (cartaRandomMaquina === 'piedra') {
                resultado.innerHTML = 'HAS PEDIDO!';
                puntosMaquina += 1;
            } else if (cartaRandomMaquina === 'papel') {
                resultado.innerHTML = 'HAS GANADO!';
                puntosUsuario += 1;
            }
        }
    }
}

