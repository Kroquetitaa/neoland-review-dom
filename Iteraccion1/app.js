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

