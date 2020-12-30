import React from 'react'
import { useQuery, gql } from '@apollo/client'

const QUERY_PLANETS = gql`
  query GetPlanets {
    planets {
      id
      name
      description
    }
  }
`
interface Planet {
  id: string
  name: string
  description: string
}

function App() {
  const { data } = useQuery(QUERY_PLANETS)

  const planets = data?.planets
    ? data.planets.map((planet: Planet) => (
        <div key={planet.id}>
          {planet.name}: {planet.description}
        </div>
      ))
    : 'Loading...'

  return <div>{planets}</div>
}

export default App
