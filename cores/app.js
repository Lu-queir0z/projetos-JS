'use script'

function limparCores () {
    titulo.classList.remove('amarelo')
    titulo.classList.remove('azul')
    titulo.classList.remove('vermelho')
}

function trocarCor () {
    const titulo = document.getElementById('titulo')

    const corEscolhida = prompt('digite azul , vermelho ou amarelo')

    if (corEscolhida == 'vermelho') {
        limparCores()
        titulo.classList.add('vermelho')
    }
    else if (corEscolhida == 'azul'){
        limparCores()
        titulo.classList.add('azul')
    }
    else if (corEscolhida ==  'amarelo'){
        limparCores()
        titulo.classList.add('amarelo')
    }
    else {
        limparCores()
    }
}
const botaoTrocarCor = document.getElementById('trocar-cor')

botaoTrocarCor.addEventListener('click', trocarCor)