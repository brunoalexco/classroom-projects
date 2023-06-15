'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header');
    document.querySelector('.nav');

    document.addEventListener('scroll', () => {
        header.classList.toggle('header--scroll', window.scrollY > 0);
    });
});