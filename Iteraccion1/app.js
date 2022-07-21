// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let body = document.querySelector('body');
let ul = document.createElement('ul');
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

countries.forEach( e => {
    let li = document.createElement('li');
    li.innerHTML += e;
    ul.appendChild( li );
});

body.appendChild( ul );


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let element = document.querySelector('.fn-remove-me');
body.removeChild( element );

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector('[data-function="printHere"]');
let ul2 = document.createElement('ul');

cars.forEach( e => {
    let li = document.createElement('li');
    li.innerHTML += e;
    console.log( li );
    ul2.appendChild( li );
})

div.appendChild( ul2 );

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];