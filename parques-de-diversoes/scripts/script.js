let t = 0

function tamanhoMudado() {
    const largura = window.document.body.clientWidth
    const menu = window.document.getElementById('container-btn')
    if(largura > 770) {
        menu.style.display = 'flex'
        menu.style.flexDirection = 'row'
        console.log(menu.style.flexDirection)
    } else {
        menu.style.display = 'none'
    }
}

function abilitarMenu() {
    const menu = window.document.getElementById('container-btn')
    if(t == 0) {
        menu.style.display = 'none'
    }
    if(menu.style.display == 'none') {
        menu.style.display = 'flex'
        menu.style.flexDirection = 'column'
    } else {
        menu.style.display = 'none'
    }
    t = 1
}

function mudarPag(btn, pag) {
    const btns = window.document.getElementsByClassName('btn-pag')
    for(let c = 0; c < btns.length; c++) {
        btns[c].removeAttribute('id')
    }
    btns[btn].setAttribute('id', 'escolhido')

    const pags = window.document.getElementsByClassName('pags')
    for(let c = 0; c < pags.length; c++) {
        pags[c].style.display = 'none'
    }
    pags[pag].style.display = 'inherit'
}

function tela() {
    const largura = window.document.body.clientWidth
    const parag = window.document.getElementsByClassName('p-pag')
    for(let c = 0; c < parag.length; c++) {
        parag[c].style.width = (largura + 'px')
    }
    setTimeout(() => {
        tela()
    }, 1)
}

mudarPag(0, 0)
