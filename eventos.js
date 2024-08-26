function saludar(event) {
    alert('Hola!');
    event.stopPropagation()
}

document.querySelector("div").addEventListener('click', function() {
    alert('Hola! Soy el div')
})