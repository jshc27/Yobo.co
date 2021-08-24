// Agregaremos funciones y haremos el llamdo de una API para obtener datos y mostralos en pantalla

const url = "https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed";

fetch(url)
.then(response => response.json())
.then(data => {

    // Llamado API book1

    let title1 = document.getElementById('title1');
    title1.innerHTML = `${data[0].title}`;

    let texto1 = document.getElementById('paragrapah1');
    texto1.innerHTML = `${data[0].content_short}`;

    let image1 = document.getElementById('image');
    image1.innerHTML =  `${data[0].cover}`;

    // Llamado API book2

    let title2 = document.getElementById('title2');
    title2.innerHTML =  `${data[1].title}`;
    

    console.log(data);
})

.catch(err=>console.log(err))