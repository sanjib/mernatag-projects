import { ObjectId } from 'mongodb'
import { Planet, Database } from '../../lib/types'

export const deletePlanet = async (
  _root: undefined,
  { id }: { id: string },
  { db }: { db: Database }
): Promise<Planet> => {
  const { value: planet } = await db.planets.findOneAndDelete({
    _id: new ObjectId(id),
  })
  if (!planet) throw new Error(`Planet not found, id: ${id}`)

  return planet
}
