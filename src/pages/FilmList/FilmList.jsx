import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getAllFilms } from "../../services/sw-api"


const FilmList = () => {
  const [films, setFilms] = useState([])


  useEffect(() => {
    const fetchFilmList = async () => {
      const filmData = await getAllFilms()
      // console.log(filmData.results)
      const sortedFilms = filmData.results.sort((a, b) => 
        a.episode_id - b.episode_id
      )
      setFilms(sortedFilms)
      // setFilms(filmData.results)
    }

    fetchFilmList()
  }, [])

  if (!films.length) return (<h1>Loading Films...</h1>)

  return (
    <main>
      <h1>Star Wars Films</h1>
      <div>
        {films.map(film => 
          <Link to={`/films/${film.url.substring(28)}`} key={film.url.substring(28)}>
            <button>{film.title}</button>
          </Link>
        )}
      </div>
    </main>
  )
}

export default FilmList