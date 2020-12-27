import { ObjectId } from 'mongodb'
import { Planet, Database } from '../../lib/types'

export const planets = (
  _root: undefined,
  _args: {},
  { db }: { db: Database }
) => db.planets.find({}).toArray()
