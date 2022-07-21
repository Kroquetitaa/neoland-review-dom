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


const countries2 = [
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

let div2 = document.createElement('div');
let ul3 = document.createElement('ul');

for (const values of countries2) {
        let h4 = document.createElement('h4');
        let img = document.createElement('img');
        let li = document.createElement('li');
        h4.innerHTML += values.title;
        img.src += values.imgUrl;
        li.appendChild(h4);
        li.appendChild(img);
        ul3.appendChild( li );
}
div2.appendChild( ul3 );
body.appendChild( div2 );

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

let button = document.createElement('button');
button.innerHTML = 'Boton Eliminar ult.Elemento';
body.appendChild( button);

button.addEventListener('click', () =>{
    ul3.removeChild(ul3.lastChild);
})