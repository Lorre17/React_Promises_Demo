// #region Setup
const API_URL = 'https://starwars.egghead.training/'
const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join('\n')
}
// #region End

fetch(API_URL + 'movies')
  .then(async response => {
    if (!response.ok) {
      return Promise.reject(
        new Error("Unsuccessful response")
      )
    }
    return response.json().then(films =>{
      output.innerText = getFilmTitles(films)
    })
  })
  .catch(error => {
    console.warn(error)
    output.innerText = ':('
  })
  .finally(() => {
    spinner.remove()
  })
