'use strict'

import './router.js'
import { getCharacters } from './api.js'

const carregarPersonagens = await getCharacters()

const carregarCards = (character) => {

    // const containerCard = document.createElement('div')
    // containerCard.classList.add('container-characters')

    const container = document.createElement('div')
    container.classList.add('card')

    const image = document.createElement('img')
    image.classList.add('card__image')
    image.src = `${character.image}`

    const nameCharacter = document.createElement('p')
    nameCharacter.classList.add('card__name')
    nameCharacter.textContent = character.name

    // containerCard.appendChild(container)
    container.append(image, nameCharacter)

    return container

}

const loadCards = () => {
    const container = document.getElementById('main_content')
    const character = carregarPersonagens.map(carregarCards)
console.log(container);
console.log(carregarPersonagens.map(carregarCards));
    container.replaceChildren(...character)
}

loadCards()