'use strict';

import { memes } from "../utils/memes.js";

document.addEventListener('DOMContentLoaded', () => {
  const memeBrowser = document.getElementById('memeBrowser');
  const memeContainer = document.getElementById('memeContainer');

  memeBrowser.addEventListener('input', (e) => {
    if (e.target.value === '') {
      memeContainer.innerHTML = '<h2 class="memes__title">Ingrese el nombre de su meme</h2>';
      return;
    }

    memeContainer.innerHTML = '';

    const foundMemes = memes.filter(element => element.nombre.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));

    foundMemes.forEach(element => {
      const { nombre, imagen, enlace } = element;
      memeContainer.innerHTML += `
        <div class="memes__meme">
          <figure class="memes__meme-image-container">
            <img src="${imagen}" alt="${nombre}" class="memes__meme-image" />
          </figure>
          <h3 class="memes__meme-title">${nombre}</h3>
          <a href="${enlace}" class="memes__meme-button">Ver</a>
        </div>
      `;
    })
  });
});