const btnModos = document.querySelector('#modos');

btnModos.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    btnModos.classList.toggle('activo');

    // GUARDADO EN LOCALSTORAGE
    if(document.body.classList.contains('oscuro')){
        localStorage.setItem('tema-oscuro','true');
    } else {
        localStorage.setItem('tema-oscuro','false');
    }
});

// COMPROBAR Y OBTENER EL MODO ACTUAL
if(localStorage.getItem('tema-oscuro') === 'true') {
    document.body.classList.add('oscuro');
    btnModos.classList.add('activo');
} else {
    document.body.classList.remove('oscuro');
    btnModos.classList.remove('activo');
}