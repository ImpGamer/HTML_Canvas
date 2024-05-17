const btnFoto = document.getElementById('btnFoto')
const canvas = document.getElementById('canvas')
const renderizeContext = canvas.getContext('2d')
const video = document.getElementById('camara')

async function init() {
    let constraints = {
        audio: true,
        video: {
            width: 400,height: 300
        }
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        mostrar_en_elVideo(stream)

    }catch(error) {
        console.error('Ha ocurrido un error al acceder al hardware :( '+error.message)
    }
}
function mostrar_en_elVideo(stream) {
    window.stream = stream
    video.srcObject = stream
}

btnFoto.addEventListener('click',() => {
    renderizeContext.drawImage(video,0,0,canvas.width,canvas.height)
})
init()
