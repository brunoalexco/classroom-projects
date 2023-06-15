'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const pokemonForm = document.forms['pokemonForm'];
    const pokemonTBody = document.getElementById('pokemonTBody');
    let rowCounter = pokemonTBody.getElementsByTagName('tr'); 
    console.log(rowCounter);


    pokemonForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = pokemonForm['name'].value;
        const type = pokemonForm['type'].value;
        const image = pokemonForm['image'].value;

        pokemonTBody.innerHTML += `
        <tr>
        <td>${++rowCounter}</td>
        <td>${name}</td>
        <td><span class="badge text-bg-danger">${type}</span></td>
        <td>
          <img src="${image}" alt="${name}" width="32"
            height="32" />
        </td>
      </tr>
    `
    pokemonForm.reset();
    });
    const readPokemons = () => {
        
    };
});

