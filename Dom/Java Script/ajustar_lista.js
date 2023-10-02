function ajustarAltura() {
    const lista = document.querySelector('.lista');
    const alturaDisponivel = window.innerHeight;
    const alturaMaximaLista = Math.floor(alturaDisponivel * 0.5);
    lista.styles.maxHeigt = alturaMaximaLista + 'px';
}

window.addEventListener('load', ajustarAlturaLista);
window.addEventListener('resize', ajustarAlturaLista);
