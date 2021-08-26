// Agregaremos funciones y haremos el llamdo de una API para obtener datos y mostralos en pantalla

function searchProduct() {

    const input = document.getElementById('filter').value.toUpperCase();
    const cardContainer = document.getElementById('list-cards');
    console.log(cardContainer);


    const cards = cardContainer.getElementsByClassName('card');
    console.log(cards)

    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".container-titleDate h4.title");
        console.log(title);

        if(title.innerText.toUpperCase.indexOf(input) > -1) {

            
        }
    }
}







const url = "https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed";


fetch(url)
.then(response => response.json())
.then(data => {

    // Llamado API book1

    let title1 = document.getElementById('title1');
    title1.innerHTML = `${data[0].title}`;

    let texto1 = document.getElementById('paragrapah1');
    texto1.innerHTML = `${data[0].content_short}`;

    let image1 = document.getElementById('image1');
    image1.innerHTML =  `<img width="100px" height="100px" src='${data[0].cover}'/>`;

    //Llamado API book2

    let title2 = document.getElementById('title2');
    title2.innerHTML =  `${data[1].title}`;

    let texto2 = document.getElementById('paragrapah2');
    texto2.innerHTML =  `${data[1].content_short}`;

    let image2 = document.getElementById('image2');
    image2.innerHTML =  `<img width="100px" height="100px" src='${data[1].cover}'/>`;
    

    // Llamado API book3

    let title3 = document.getElementById('title3');
    title3.innerHTML =  `${data[2].title}`;

    let texto3 = document.getElementById('paragrapah3');
    texto3.innerHTML =  `${data[2].content_short}`;

    let image3 = document.getElementById('image3');
    image3.innerHTML =  `<img width="100px" height="100px" src='${data[2].cover}'/>`;
    

    // Llamado API book4

    let title4 = document.getElementById('title4');
    title4.innerHTML =  `${data[3].title}`;

    let texto4 = document.getElementById('paragrapah4');
    texto4.innerHTML =  `${data[3].content_short}`;

    let image4 = document.getElementById('image4');
    image4.innerHTML =  `<img width="100px" height="100px" src='${data[3].cover}'/>`;
    

    console.log(data);
})

.catch(err=>console.log(err));