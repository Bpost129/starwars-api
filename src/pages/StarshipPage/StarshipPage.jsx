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
  
  return (
    <>
      <h1>Starship Details</h1>
      <h3>Name: {starship.name}</h3>
      <h3>Model: {starship.model}</h3>
      <Link to={`/starships`}>Return</Link>
    </>
  )
}

export default StarshipPage