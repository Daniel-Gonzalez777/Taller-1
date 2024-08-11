let jugador = prompt("Ingrese su nombre:");
let puntajeJugador = 0
let puntajePC = 0
let ganador = false
let ronda = 1

while (!ganador) {
    let cartaJugador = Math.floor(Math.random() * 10) + 1
    puntajeJugador += cartaJugador
    alert (`En la ronda ${ronda}, ${jugador} sacó: ${cartaJugador}`)
    
    let continuar = prompt(`${jugador}, ¿deseas coger otra carta? (SI/NO):`)

    if (continuar !== "SI") {
        ganador = true
    }

    let cartaPC = Math.floor(Math.random() * 10) + 1
    puntajePC += cartaPC
    alert (`En la ronda ${ronda}, la PC sacó: ${cartaPC}`)
    
    ronda++;

    if (puntajeJugador === 21) {
        alert (`${jugador} ha ganado con exactamente 21 puntos!`)
        ganador = true
    } else if (puntajePC === 21) {
        alert ("La PC ha ganado con exactamente 21 puntos!");
        ganador = true
    } else if (puntajeJugador > 21 && puntajePC <= 21) {
        alert ("La PC ha ganado porque el jugador superó 21 puntos.")
        ganador = true
    } else if (puntajePC > 21 && puntajeJugador <= 21) {
        alert (`${jugador} ha ganado porque la PC superó 21 puntos.`)
        ganador = true
    } else if (puntajeJugador > 21 && puntajePC > 21) {
        alert ("Ningún jugador ganó porque ambos superaron 21 puntos.")
        ganador = true
    }
}

alert (`El puntaje final de ${jugador} es: ${puntajeJugador}`)
alert (`El puntaje final de la PC es: ${puntajePC}`)

if (puntajeJugador > puntajePC && puntajeJugador <= 21) {
    alert (`${jugador} ha ganado con más puntos.`)
} else if (puntajePC > puntajeJugador && puntajePC <= 21) {
    alert ("La PC ha ganado con más puntos.")
} else if (puntajeJugador === puntajePC) {
    alert ("Es un empate.")
} else {
    alert ("Ningún jugador ganó.")
}
