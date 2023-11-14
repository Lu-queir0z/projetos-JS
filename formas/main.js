'use script'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')

function mudarCor() {
    forma1.classList.toggle('vermelho')
}
function mudarForma() {
    forma2.classList.toggle('circulo')
}
function girar() {
    forma3.classList.toggle('girar')
}
function mudarTamanho() {
    forma4.classList.toggle('almentar')
}
function mudarPosicao() {
    forma5.classList.toggle('mover')
}
function triangulo() {
    forma6.classList.toggle('triangulo')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', girar)
forma4.addEventListener('click', mudarTamanho)
forma5.addEventListener('click', mudarPosicao)
forma6.addEventListener('click', triangulo)