import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Planet {
    id: String!
    name: String!
    description: String!
  }
  type Query {
    planets: [Planet!]!
  }
  type Mutation {
    deletePlanet(id: String!): Planet!
  }
`
