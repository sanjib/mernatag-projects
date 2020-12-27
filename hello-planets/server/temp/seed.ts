import { connectDatabase } from '../src/database'

export const planetsList = [
  {
    name: 'Mercury',
    description:
      'The smallest and fastest planet, it zips around the Sun in only 88 Earth days.',
  },
  {
    name: 'Venus',
    description:
      'Venus’ thick atmosphere makes it the hottest planet in our solar system.',
  },
  {
    name: 'Earth',
    description:
      'The only planet in our solar system with liquid water on the surface.',
  },
  {
    name: 'Mars',
    description: 'Mars was a wet and warm planet billions of years ago.',
  },
  {
    name: 'Jupiter',
    description:
      'The largest planet, its dark red spot is a storm larger than Earth.',
  },
  {
    name: 'Saturn',
    description:
      'Saturn has the brightest, most massive and most complex ring system of any planet.',
  },
  {
    name: 'Uranus',
    description: 'Uranus is tipped on its axis by almost 90-degrees.',
  },
  {
    name: 'Neptune',
    description:
      'Neptune was the first planet discovered through mathematical calculations, rather than observation.',
  },
]

const main = async () => {
  const db = await connectDatabase()

  console.log('Beginning seed...')
  planetsList.forEach(async planet => {
    await db.planets.insertOne(planet)
  })
  console.log('Seed complete!')
}

main()
