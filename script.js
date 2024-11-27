const maos = ['pedra', 'papel', 'tesoura','pedra','tesoura', 'papel', 'tesoura', 'pedra', 'papel', 'tesoura', 'papel', 'pedra', 'papel', 'tesoura', 'pedra', 'papel', 'pedra', 'tesoura']
const p = document.querySelector('section p')
const tesoura = document.getElementById('tesoura')
const papel = document.getElementById('papel')
const pedra = document.getElementById('pedra')
const linha = document.getElementById('linha')
const imgBot = document.getElementById('imgBot')
const vocePontos = document.getElementById('voce')
const botPontos = document.getElementById('bot')
let voce = 1
let bot = 1

pedra.addEventListener('click', function (ev) {
    ev.preventDefault()
    const numberFloat = Math.random()
    const primario = numberFloat * 9
    const numeroRedondo = Math.trunc(primario)
    maos.reverse()

    if(maos[numeroRedondo] === 'pedra') {
        p.innerText = 'empate'
        p.setAttribute('class', 'empate')
        linha.style.borderTop = '5px solid #0000ff'
        imgBot.src = 'img/stone.png'
    }
    else {
        if(maos[numeroRedondo] === 'papel') {
            p.innerText = 'perdeu'
            p.setAttribute('class', 'perdeu')
            linha.style.borderTop = '5px solid red'
            imgBot.src = 'img/paper.png'
            botPontos.innerText = bot 
            bot++
        }
        else {
            if(maos[numeroRedondo] === 'tesoura') {
                p.innerText = 'ganhou'
                p.setAttribute('class', 'ganhou')
                linha.style.borderTop = '5px solid #00ff0d'
                imgBot.src = 'img/scissor.png'
                vocePontos.innerText = voce
                voce++
            }
        }
    }
})

papel.addEventListener('click', function (ev) {
    ev.preventDefault()
    const numberFloat = Math.random()
    const primario = numberFloat * 9
    const numeroRedondo = Math.trunc(primario)
    maos.reverse()

    
    if(maos[numeroRedondo] === 'tesoura') {
        p.innerText = 'perdeu'
        p.setAttribute('class', 'perdeu')
        linha.style.borderTop = '5px solid red'
        imgBot.src = 'img/scissor.png'
        botPontos.innerText = bot
        bot++
    } else {
        if(maos[numeroRedondo] === 'papel') {
            p.innerText = 'empate'
            p.setAttribute('class', 'empate')
            linha.style.borderTop = '5px solid #0000ff'
            imgBot.src = 'img/paper.png'
        }
        else {
            if(maos[numeroRedondo] === 'pedra') {
                p.innerText = 'ganhou'
                p.setAttribute('class', 'ganhou')
                linha.style.borderTop = '5px solid #00ff0d'
                imgBot.src = 'img/stone.png'
                vocePontos.innerText = voce
                voce++
            }
        }
    }
})

tesoura.addEventListener('click', function (ev) {
    ev.preventDefault()
    const numberFloat = Math.random()
    const primario = numberFloat * 9
    const numeroRedondo = Math.trunc(primario)
    maos.reverse()

    
    if(maos[numeroRedondo] === 'tesoura') {
        p.innerText = 'empate'
        p.setAttribute('class', 'empate')
        linha.style.borderTop = '5px solid #0000ff'
        imgBot.src = 'img/scissor.png'
    }
    else {
        if(maos[numeroRedondo] === 'papel') {
            p.innerText = 'ganhou'
            p.setAttribute('class', 'ganhou')
            linha.style.borderTop = '5px solid #00ff0d'
            imgBot.src = 'img/paper.png'
            vocePontos.innerText = voce
            voce++
        }
        else {
            if(maos[numeroRedondo] === 'pedra') {
                p.innerText = 'perdeu'
                p.setAttribute('class', 'perdeu')
                linha.style.borderTop = '5px solid red'
                imgBot.src = 'img/stone.png'
                botPontos.innerText = bot
                bot++
            }
        }
    }
})
