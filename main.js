import { films } from './films.js'

const movie = document.querySelector('.movie')

films.forEach((film) => {
let titleElement = document.createElement("h1")
let crawlElement = document.createElement("p")

titleElement.textContent = films.title
crawlElement.textContent = films.opening_crawl

movie.appendChild(titleElement)
movie.appendChild(crawlElement)

})

// let titleElement = document.querySelector('.title')
// let crawlElement = document.querySelector('.crawl')

// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl