'use strict'

const users = [
    {
        nome: 'Ana Coelho',
        id: '0123456789',
        email:'ana@gmail.com',
        celular: '11971657465',
        cidade: 'Osasco',
        image: './img/ana-coelho.jpg',
        status: true
    },
    {
        nome: 'Hugo Gomes',
        id: '0987654321',
        email:'hugo@gmail.com',
        celular: '1199855627491',
        cidade: 'Barueri',
        image: './img/hugo-gomes.jpg',
        status: false
    },
    {
        nome: 'Joana Pereira',
        id: '0789625236',
        email:'joana@gmail.com',
        celular: '11932986514',
        cidade: 'Jandira',
        image: './img/joana-pereira.jpg',
        status: true
    },
    {
        nome: 'Jose Chaves',
        id: '0253698481',
        email:'jose@gmail.com',
        celular: '11965329847',
        cidade: 'Carapicuiba',
        image: './img/jose-chaves.jpg',
        status: true
    },
    {
        nome: 'Mariana Silva',
        id: '0325974529',
        email:'mariana@gmail.com',
        celular: '11923598740',
        cidade: 'itapevi',
        image: './img/mariana-silva.jpg',
        status: false
    }
]

const botaoExibir = document.getElementById('exibir')

function criarCard(users) {
    const conteiner = document.getElementById('data-container')
    const card = document.createElement('div')
    let status = users.status ? '' : 'sombra'
    card.className = `card ${status}`
    card.innerHTML = `
        <img src="${users.image}" alt="Foto da ${users.nome}" class="card__photo">
        <h3 class="card__name">${users.nome}</h3>
        <p class="card__user-id">${users.id}</p>
    `
    conteiner.appendChild(card)
}

function limparContainer() {
    const container = document.getElementById('data-container')
    container.textContent = ''
}

function exibir() {
    limparContainer()
    users.forEach(criarCard)
}

botaoExibir.addEventListener('click', exibir)