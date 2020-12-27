import { IResolvers } from 'apollo-server-express'
import { planets } from './planets'
import { deletePlanet } from './deletePlanet'
import { Planet } from '../../lib/types'

export const resolvers: IResolvers = {
  Query: {
    planets,
  },
  Mutation: {
    deletePlanet,
  },
  Planet: {
    id: (planet: Planet) => planet._id.toString(),
  },
}
