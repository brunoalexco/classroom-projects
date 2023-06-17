document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    const pathline = document.querySelector('.pathline');

    pathline.addEventListener('mousemove', (event) => {
        const pathlineRect = pathline.getBoundingClientRect();
        const x = event.clientX - pathlineRect.left - circle.offsetWidth / 2;
        circle.style.transform = `translateX(${x}px)`;
    });
});
