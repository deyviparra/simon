const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 2
var secuencia
var num=2
var colores = {
    celeste,
    violeta,
    naranja,
    verde
}



function empezarJuego() {
    btnEmpezar.classList.add('hide')
    nuevoJuego()
}

function nuevoJuego() {
  
    secuencia = generarSecuencia()
    nuevoNivel(1)
    iluminarColor(num)

}

function nuevoNivel(nivel) {
    if(nivel<=ULTIMO_NIVEL){

        for(var i =0;i<=nivel;i++){

            setTimeout(() => {
                iluminarColor(secuencia[i])
            }, 1000); 
        }

    }else{
        ganoElJuego()
    }

}
function ganoElJuego() {
    swal('Hey', 'Felicitaciones, ganaste el juego!', 'success')
        .then(this.inicializar())
}
function perdioElJuego() {
    swal('Ouhh', 'Lo lamentamos, perdiste el juego!', 'error')
        .then(() => {
            this.eliminarEventoClic()
            this.inicializar()
        })
}
function generarSecuencia() {
    var secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))

}
debugger
function iluminarColor(color) {
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
}

function apagarColor(color) {
    colores[color].classList.remove('light')
}

function transformarNumeroAColor(numero) {
    switch (numero) {
        case 0:
            return 'celeste'
        case 1:
            return 'violeta'
        case 2:
            return 'naranja'
        case 3:
            return 'verde'
    }
}

function transformarColorANumero(color) {
    switch (color) {
        case 'celeste':
            return 0
        case 'violeta':
            return 1
        case 'naranja':
            return 2
        case 'verde':
            return 3
    }
}