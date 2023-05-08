'use strict'

const routes = {
    // '/': '/pages/home.html',
    '/characters': '/pages/characters.html',
    '/episode': '/pages/episode.html',
}

const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('main_content').innerHTML = html

}

window.route = route