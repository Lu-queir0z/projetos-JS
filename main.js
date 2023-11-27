'use strict'

const botaoExibir = document.getElementById('exibir')
const botaoVendas100 = document.getElementById('vendas100')
const botaoBonus = document.getElementById('bonus')

const numeros = [80 , 50 , 23 , 7, 100 , 254 , 30, 500 ,1500]

function criarCard (data) {
    const conteiner = document.getElementById('data-conteiner')
    const card = document.createElement('div')
    card.textContent = data
    conteiner.appendChild(card)
}

function limparConteiner() {
    const conteiner = document.getElementById('data-conteiner')
    conteiner.textContent = ' '
}

function exibir() {
    limparConteiner()
    numeros.forEach(criarCard)
} 

function vendas100() {
    limparConteiner()
    const numeros100 = numeros.filter( numeros => numeros > 100 )
    numeros100.forEach(criarCard)
} 

function vendasBonus() {
    limparConteiner()
    const numerosBonus = numeros.map (numeros => numeros + 10)
    numerosBonus.forEach(criarCard)
} 

botaoExibir.addEventListener('click', exibir)
botaoVendas100.addEventListener('click', vendas100)
botaoBonus.addEventListener('click', vendasBonus)