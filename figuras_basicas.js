const btnCrearLinea = document.querySelector("#crearLinea")
const canvas = document.getElementById('canvas')
const btnCrearArco = document.getElementById('crearArco')
const btnLimpiar = document.getElementById('limpiar')
const btnCurvasCuad = document.getElementById('crearCurvasCuad')
const btnCurvasBen = document.getElementById('crearCurvasBezier')
//Que tipo de renderizado hara el canvas
const renderizeContext = canvas.getContext('2d')

btnCrearLinea.addEventListener('click',() => {
    //Inicializamos nuestro renderizado
    renderizeContext.beginPath()
    //Posicon del canvas a la que se movera el cursor al renderizar el canvas
    renderizeContext.moveTo(10,10)
    //En el eje x llegara a 180px, y en el eje 'y' llegara a 20px
    renderizeContext.lineTo(180,20)
    //Grozor de la linea
    renderizeContext.lineWidth = 5
    renderizeContext.strokeStyle = '#FF0000' //Color rojo
    renderizeContext.stroke() //dibujar el elemento al canvas
})

btnCrearArco.addEventListener('click',() => {
    /*Parametros para crear un circulo:
    1. Punto x,y del centro del circulo, es decir un punto del plano (x,y) que sera el centro del circulo
    3. Radio del circulo, es decir el tamano del circulo
    4. Angulo inicial del circulo
    5. Angulo final, si deseamos que sea un circulo completo seran 360 grados, pero si son arcos o figuras
    mas especificas sera los angulos deseados, sin embargo el parametro no entiende el numero entero como
    grados, por lo que tendremos que pasarlo como radianes o Math.PI *2 (en circulos)
    //Sacar Radianes: (Math.PI/180)*GRADOS = El parametro GRADOS son los grados deseados de manera natural
    //Por ejemplo deseamos 180 grados = (Math.PI/180)*180 = radianes para 180 grados
    6. Parametro booleano que preguntara si el arco se pintara en sentido de las manecillas o no
    */
   renderizeContext.beginPath()
   renderizeContext.arc(200,300,150,0,toRadians(360),true) //Cara
   renderizeContext.moveTo(160,260) //Simula el movimiento del lapicero o pintante separando del papel, si no se coloca, trazara un linea
   renderizeContext.arc(150,260,30,0,toRadians(360),true) //Ojo izquierdo
   renderizeContext.moveTo(180,260)
   renderizeContext.arc(320,260,30,0,toRadians(360),true) //Ojo derecho
   renderizeContext.moveTo(250,350)
   renderizeContext.arc(200,350,50,0,toRadians(180),false) //Sonrisa
   renderizeContext.lineWidth = 5
   renderizeContext.strokeStyle = '#00FF00' //Color verde
   renderizeContext.stroke()
})
btnLimpiar.addEventListener('click',() => {
    //Desde la posicion 0,0 hasta el tamano del canvas que lo limpie
    renderizeContext.clearRect(0,0,canvas.width,canvas.height)
})
btnCurvasCuad.addEventListener('click',() => {
    renderizeContext.beginPath()
    //Punto inicial de la curva
    renderizeContext.moveTo(100,100)

    /*Parametros de la siguiente funcion:
    1. Valor de 'x' (vector) del punto imaginario entre el punto inicial y final
    2. Valor de 'y' (vector) del punto imaginario entre el punto inicial y final
    3 y 4. Posicion (x,y) del punto final de la curva*/
    renderizeContext.quadraticCurveTo(180,20,200,200)
    renderizeContext.strokeStyle = '#0F0F00'
    renderizeContext.stroke()
})
btnCurvasBen.addEventListener('click',() => {
    renderizeContext.beginPath()
    //Punto inicial de la curva
    renderizeContext.moveTo(10,180)
    /*Parametros de la siguiente funcion:
    1. Valor de 'x' (vector) del primer punto imaginario entre el punto inicial y final
    2. Valor de 'y' (vector) del primer imaginario entre el punto inicial y final
    3 y 4. Posicion (x,y) del segundo punto imaginario para crear el segundo valle de la curva
    5 y 6. Posicion (x,y) del punto final de la curva*/
    renderizeContext.bezierCurveTo(80,20,200,150,420,60)
    renderizeContext.stroke()
})

//O si no podemos crear una funcion que nos facilite esta conversion
function toRadians(grados) {
    return (Math.PI/180)*grados
}