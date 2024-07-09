import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { getFilm } from "../../services/sw-api"

const FilmPage = () => {
  const [film, setFilm] = useState({})
  const { filmId } = useParams()

  useEffect(() => {
    const fetchFilm = async () => {
      const filmData = await getFilm(filmId)
      // console.log(filmData)
      setFilm(filmData)
    }

    fetchFilm()
  }, [filmId])

  // if (!film.length) return (<h1>Loading Film...</h1>)

  return (
    <main>
      <h2>Episode {film.episode_id}</h2>
      <h1>{film.title}</h1>
      <Link to={`/films`}>Return</Link>
    </main>
  )
}

export default FilmPage