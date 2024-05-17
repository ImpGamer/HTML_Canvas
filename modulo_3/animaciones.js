const canvas = document.getElementById('canvas')
const renderizeContext = canvas.getContext('2d')
const btnColisiones = document.getElementById('colision')
const btnAnimacion = document.getElementById('addAnimation')

let puntoInicial = {
    x: 20,
    y: 50
}

btnAnimacion.addEventListener('click',() => {
    const imagenSol = new Image()
    imagenSol.src = './sol.png'
    const imagenLuna = new Image()
    imagenLuna.src = './luna.png'
    const imagenTierra = new Image()
    imagenTierra.src = './tierra.png'
    function dibujarSistemaSolar() {
        renderizeContext.clearRect(0,0,canvas.width,canvas.height)
        renderizeContext.fillStyle = 'rgba(0,0,0,.4)'
        renderizeContext.globalCompositeOperation = 'destination-over'
        renderizeContext.strokeStyle = 'rgba(0,133,255,.4)'
        renderizeContext.save() //Guarda los valores establecidos al canvas
        renderizeContext.translate(150,150)

        let time = new Date()
        renderizeContext.rotate(((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds())
        renderizeContext.translate(105,0)
        renderizeContext.fillRect(0,-12,50,24)
        renderizeContext.drawImage(imagenTierra,-12,-12)

        //Luna
        renderizeContext.save()
        renderizeContext.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds())
        renderizeContext.translate(0,28.5)
        renderizeContext.drawImage(imagenLuna,-3.5,-3.5)
        renderizeContext.restore() //Inicial (tierra)
        renderizeContext.restore() //limpieza luna

        renderizeContext.beginPath()
        renderizeContext.arc(150,150,105,0,Math.PI*2,false)
        renderizeContext.stroke()

        renderizeContext.drawImage(imagenSol,0,0,300,300)
        window.requestAnimationFrame(dibujarSistemaSolar)
    }

    //Se le pasa como parametro una funcion que ejecutara cada frame para la animacion
    window.requestAnimationFrame(dibujarSistemaSolar)

})

btnColisiones.addEventListener('click', () => {
    renderizeContext.fillStyle = 'red' //Cambio de color
    /*
    1 y 2 parametro: Sera el punto (esquina superior izquierda) donde comenzara a dibujar el cuadrado
    3 y 4 parametro: Punto final donde terminara de dibujar el cuadrado (esquina inferior derecha)*/
    renderizeContext.fillRect(puntoInicial.x,puntoInicial.y, 100, 100)

    renderizeContext.fillStyle = 'green'
    renderizeContext.fillRect(200, 50, 100, 100)

    //Objeto window, que agarrara el evento del teclado
    window.addEventListener('keyup', event => {
        let valorTecla = event.key;
        renderizeContext.fillStyle = 'red'
        switch(valorTecla) {
            case 'w':
                limpiarCanvas()
                renderizeContext.fillRect(puntoInicial.x,puntoInicial.y -= 10,100,100)
                break;
            case 's':
                limpiarCanvas()
                renderizeContext.fillRect(puntoInicial.x,puntoInicial.y += 10,100,100)
                break;
            case 'a':
                limpiarCanvas()
                renderizeContext.fillRect(puntoInicial.x -= 10,puntoInicial.y,100,100)
                break;
            case 'd':
                limpiarCanvas()
                renderizeContext.fillRect(puntoInicial.x += 10,puntoInicial.y, 100, 100)
                break;
        }
        if(hayColision(puntoInicial.x)) {
            console.log("Esta colisionando")
        }
        renderizeContext.fillStyle = 'green'
        renderizeContext.fillRect(200, 50, 100, 100)

    })
})

window.requestAnimationFrame()

function limpiarCanvas() {
    renderizeContext.clearRect(0,0,canvas.width,canvas.height)
}
function hayColision(posicionX) {
    return posicionX+100 >= 200;
}