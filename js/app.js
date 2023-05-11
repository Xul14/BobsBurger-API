'use strict'

import './router.js'
import { getCharacters } from './api.js'

const carregarPersonagens = await getCharacters()

const carregarCards = (character) => {

    const container = document.createElement('a')
    container.classList.add('card')
    container.setAttribute('href', '../pages/infos.html')
    container.addEventListener('click', () => {
        localStorage.setItem('characterId', character.id)
        localStorage.setItem('characterImg', character.image)
        localStorage.setItem('characterName', character.name)
        localStorage.setItem('characterGender', character.gender)
        localStorage.setItem('characterOccupation', character.occupation)
        localStorage.setItem('characterEpisode', character.firstEpisode)
    })

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