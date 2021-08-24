// Agregaremos funciones y haremos el llamdo de una API para obtener datos y mostralos en pantalla

posts = null;
var contenedor = document.getElementById('h2')


fetch('https://www.etnassoft.com/api/v1/get/?id=589')
.then(data => data.json())
.then( data => {
    data = posts
})


function mostrarDatos(posts) {

    posts.map((post, i) => {
        let titulo = document.createElement('h2');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body

        contenedor.appendChild(titulo)

 })

}