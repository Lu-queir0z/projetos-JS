'use strict'

const botaoSequencia = document.getElementById('botao-sequencia')
const botaoImpar = document.getElementById('botao-impar')
const botaoPar = document.getElementById('botao-par')
const botao5 = document.getElementById('botao-5')

function gerarSequencia () {
    const quantidade = document.getElementById('quantidade')
    const resultado = document.getElementById('resultado')

    resultado.textContent = ''
    for (let contador=1;contador<=quantidade.value;contador++){
        resultado.textContent += " " + contador
    }
    
}

function gerarNumeroImpares () {
    const quantidade = document.getElementById('quantidade')
    const resultadoImpar = document.getElementById('resultado-impar')

    resultadoImpar.textContent = ''
    for (let contador=1;contador<=quantidade.value;contador += 2){
        resultadoImpar.textContent += " " + contador
    }
}

function gerarNumeroPares() {
    const quantidade = document.getElementById('quantidade')
    const resultadoPar = document.getElementById('resultado-par')

    resultadoPar.textContent = ''
    for (let contador=2;contador<=quantidade.value;contador += 2){
        resultadoPar.textContent += " " + contador
    }
}

function gerarNumeroMultiplo () {
    const quantidade = document.getElementById('quantidade')
    const resultado5 = document.getElementById('resultado-5')

    resultado5.textContent = ''
    for (let contador=5;contador<=quantidade.value;contador += 5){
        resultado5.textContent += " " + contador
    }
}

botaoSequencia.addEventListener('click', gerarSequencia)
botaoImpar.addEventListener('click', gerarNumeroImpares)
botaoPar.addEventListener('click', gerarNumeroPares)
botao5.addEventListener('click', gerarNumeroMultiplo)
