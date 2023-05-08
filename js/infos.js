'use strict'

import { getCharacters } from './api.js'

const buttonExit = document.getElementById('exit')

buttonExit.addEventListener('click', () => {
    window.location.href = '../pages/home.html'
})

const carregarPersonagens = await getCharacters()

const carregarCards = (character) => {

    const container = document.createElement('div')
    container.classList.add('card')

    const image = document.createElement('img')
    image.classList.add('card__image')
    image.src = `${character.image}`

    const nameCharacter = document.createElement('p')
    nameCharacter.classList.add('card__name')
    nameCharacter.textContent = character.name

    container.append(image, nameCharacter)

    return container

}

export const loadCards = () => {
    const container = document.getElementById('container-characters')
    const character = carregarPersonagens.map(carregarCards)

    container.replaceChildren(...character)
}

// loadCards()