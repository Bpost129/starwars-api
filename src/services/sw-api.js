const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return res.json()
}

export async function getAllFilms() {
  const res = await fetch(`${baseUrl}/films`)
  return res.json()
}

export async function getFilm(filmId) {
  const res = await fetch(`${baseUrl}/films/${filmId}`)
  return res.json()
}