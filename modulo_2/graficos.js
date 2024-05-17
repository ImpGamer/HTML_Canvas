const btnGrillas = document.getElementById('crearGrillas')
const canvas = document.getElementById('canvas')
const renderizeContext = canvas.getContext('2d')
const btnImagen = document.getElementById('imagenCanvas')
const btnTexto = document.getElementById('addTexto')

btnGrillas.addEventListener('click',() => {
    renderizeContext.beginPath()
    renderizeContext.lineWidth = 2
    renderizeContext.strokeStyle = '#0000FF'

    for(let i=20;i<canvas.height;i +=20) {
        renderizeContext.moveTo(i,0)
        renderizeContext.lineTo(i,canvas.height)
        renderizeContext.moveTo(0,i)
        renderizeContext.lineTo(canvas.width,i)
        renderizeContext.stroke()
    }
})

// canvas.addEventListener('mousedown',event => {
//     let posicionRealCanvas = canvas.getBoundingClientRect() //Obtenemos la posicion x,y real del canvas
//     let x = event.clientX - posicionRealCanvas.left //ClienteX es la posicion que captura el evento (de toda la pantalla)
//     let y = event.clientY - posicionRealCanvas.top
//     console.log(x,y)
// })

btnImagen.addEventListener('click',() => {
    let imagen = new Image()
    imagen.src = "./ia.png"
    //Espera hasta que la imagen cargue
    imagen.onload = () => {
        /*
        1. Imagen que sera renderizada
        2. Posicion inicial donde se imprimira la imagen
        3. Tamano del canvas, para que la imagen lo abarque*/
        renderizeContext.drawImage(imagen,0,0,450,500)
        let imageWidth = imagen.width
        let imageHeight = imagen.height

        let imageData = renderizeContext.getImageData(0,0,imageWidth,imageHeight)
        let data = imageData.data

        //Efecto blanco y negro
        // for(let i=0;i<data.length;i+=4) {
        //     let promedioRGB = (data[i] + data[i+1] + data[i+2]) / 3
        //     data[i] = promedioRGB //Obtenemos el valor R (red)
        //     data[i+1] = promedioRGB //Valor G (green)
        //     data[i+2] = promedioRGB //Valor B (blue) de los pixeles y le reasignamos mas +120
        // }
        //Efecto inversion de colores
        for(let i=0;i<data.length;i+=4) {
            data[i] = 255- data[i]
            data[i+1] = 255-data[i+1]
            data[i+2] = 255-data[i+2]
        }
        //Una vez modificada la data de la imagen, debemos volver a dibujar con los nuevos valores esta imagen
        renderizeContext.putImageData(imageData,0,0)
    }
})
btnTexto.addEventListener('click',() => {
    renderizeContext.clearRect(0,0,450,500)
    /*1. Texto que se colocara
    2,3. Punto inicial donde se escribira*/
    renderizeContext.font = '20px Arial' //Tamano y fuente de la letra
    renderizeContext.fillText('Texto en Canvas',200,200)
})