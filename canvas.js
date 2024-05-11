const btnCrearLinea = document.querySelector("#crearLinea")
const canvas = document.getElementById('canvas')
const btnCrearArco = document.getElementById('crearArco')
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
   renderizeContext.arc(canvas.width /2,canvas.height/2,50,0,toRadians(180),true)
   renderizeContext.lineWidth = 5
   renderizeContext.strokeStyle = '#00FF00' //Color verde
   renderizeContext.stroke()
})

//O si no podemos crear una funcion que nos facilite esta conversion
function toRadians(grados) {
    return (Math.PI/180)*grados
}