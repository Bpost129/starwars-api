import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getAllStarships } from "../../services/sw-api"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      // console.log(starshipData)
      setStarshipList(starshipData.results)
    }

    fetchStarshipList()
  }, [])

  if (!starshipList.length) return (<h1>Loading Starships...</h1>)

  return (
    <main>
      <h1>Star Wars Starships</h1>
      {starshipList.map(ship => 
        <Link to={`/starships/${ship.url.substring(32)}`} key={ship.url.substring(32)}>
          <button>{ship.name}</button>
        </Link>
      )}
    </main>
  )
}

export default StarshipList