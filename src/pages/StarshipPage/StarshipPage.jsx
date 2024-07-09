import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { getStarship } from "../../services/sw-api"

const StarshipPage = () => {
  const [starship, setStarship] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarship = async () => {
      const starshipDetails = await getStarship(starshipId)
      setStarship(starshipDetails)
    }

    fetchStarship()
  }, [starshipId])

  if (!starship.length) return (<h1>Loading Starship...</h1>)
  
  return (
    <>
      <h1>Starship Details</h1>
      <div className="starship-details">
        <h3>Name: {starship.name}</h3>
        <h3>Model: {starship.model}</h3>
        <Link to={`/starships`}>Return</Link>
      </div>
    </>
  )
}

export default StarshipPage