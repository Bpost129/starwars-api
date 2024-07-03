import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getAllStarships } from "../../services/sw-api"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  const [shipType, setShipType] = useState(0)

  const fetchStarshipList = async () => {
    const starshipData = await getAllStarships()
    setStarshipList(starshipData.results)
  }

  function handleFighter() {
    if (shipType === 0 || shipType === 2) {
      setShipType(1)

      // fetchStarshipList()
      const filterList = starshipList.filter(ship => 
        ship.starship_class === 'Starfighter'
      )

      setStarshipList(filterList)   
    } else {
      setShipType(0)

      fetchStarshipList()
    }
  }

  function handleBattle() {
    if (shipType === 0 || shipType === 1) {
      setShipType(2)
      
      // fetchStarshipList()
      const filteredList = starshipList.filter(ship => 
        ship.starship_class === 'Deep Space Mobile Battlestation'
      )
      
      setStarshipList(filteredList)
    } else {
      setShipType(0)
  
      fetchStarshipList()
    }
  }

  useEffect(() => {
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return (<h1>Loading Starships...</h1>)

  return (
    <main>
      <h1>Star Wars Starships</h1>
      <div>
        <button className="category" onClick={() => handleFighter()}>Starfighter</button>
        <button className="category" onClick={() => handleBattle()}>Battlestation</button>
      </div>
      {starshipList.map(ship => 
        <Link to={`/starships/${ship.url.substring(32)}`} key={ship.url.substring(32)}>
          <button>{ship.name}</button>
        </Link>
        
      )}
    </main>
  )
}

export default StarshipList