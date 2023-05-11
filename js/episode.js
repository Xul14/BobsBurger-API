'use strict'

// import './router.js'
import { getEpisode } from "./api.js"

const episodes = await getEpisode()

const cardEpisodes = (episode) => {
  
    const containerCard = document.createElement('div')
    containerCard.classList.add('cardEpisode')

    const cardInfos = document.createElement('div')
    cardInfos.classList.add('infos-episode')

    const nameEp = document.createElement('img')
    nameEp.classList.add('name-episode')
    nameEp.textContent = episode.name

    const seasonLi = document.createElement('li')
    seasonLi.classList.add('li-season')

    const season = document.createElement('p')
    season.classList.add('season')
    season.textContent = 'Season'

    const seasonInfo = document.createElement('p')
    seasonInfo.classList.add('info-season')
    seasonInfo.textContent = episode.season

    const epsisodeLi = document.createElement('li')
    epsisodeLi.classList.add('li-episode')

    const episodesP = document.createElement('p')
    episodesP.classList.add('episode')
    episodesP.textContent = 'Episode'

    const episodeInfo = document.createElement('p')
    episodeInfo.classList.add('info-episode')
    episodeInfo.textContent = episode.episode

    const viewsLi = document.createElement('li')
    viewsLi.classList.add('li-views')

    const views = document.createElement('p')
    views.classList.add('views')
    views.textContent = 'Views'

    const viewsInfo = document.createElement('p')
    viewsInfo.classList.add('info-views')
    viewsInfo.textContent = episode.totalViewers

    const lancamentoLi = document.createElement('li')
    lancamentoLi.classList.add('li-lancamento')

    const lancamento = document.createElement('p')
    lancamento.classList.add('lancamento')
    lancamento.textContent = 'Air date'

    const lancamentoInfo = document.createElement('p')
    lancamentoInfo.classList.add('info-lancamento')
    lancamentoInfo.textContent = episode.airDate

    containerCard.appendChild(cardInfos)
    cardInfos.append(nameEp, seasonLi, epsisodeLi, viewsLi, lancamentoLi)
    seasonLi.append(season, seasonInfo)
    epsisodeLi.append(episodesP, episodeInfo)
    viewsLi.append(views, viewsInfo)
    lancamentoLi.append(lancamento, lancamentoInfo)
console.log(containerCard);
    return containerCard
}

export const loadEpisodes = () => {
    const card = document.getElementById('cardEpisode')
    const eps = episodes.map(cardEpisodes)
    
    card.replaceChildren(...eps)
}

loadEpisodes()
