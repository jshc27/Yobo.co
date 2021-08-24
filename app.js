// Agregaremos funciones y haremos el llamdo de una API para obtener datos y mostralos en pantalla

const url = "https://www.etnassoft.com/api/v1/get/?id=589";

fetch(url)
.then(response => response.json())
.then(data => {

    let title = document.getElementById('title');
    title.innerHTML = 
    `${data[0].title}`;

    let texto = document.getElementById('paragrapah1');
    texto.innerHTML =  `${data[0].content_short}`;

    let cover = document.getElementById('image');
    cover.innerHTML = `${data[0].cover}`;


    console.log(data);
})

.catch(err=>console.log(err))