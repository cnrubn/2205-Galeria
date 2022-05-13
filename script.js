const btnModos = document.querySelector('#modos');

btnModos.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    btnModos.classList.toggle('activo');
});