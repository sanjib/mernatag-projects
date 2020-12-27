require('dotenv').config()
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'
import { connectDatabase } from './database'
;(async function () {})()

const main = async () => {
  const db = await connectDatabase()
  const app = express()

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db },
  })
  apolloServer.applyMiddleware({ app, path: '/api' })

  app.get('/', (_req, res) => {
    res.send('<h1>Hello Planets 🌍🌑📡🛰🚀☄🌌</h1>')
  })
  app.listen(process.env.PORT, () => {
    console.log(`Server starting at http://localhost:${process.env.PORT}`)
  })
}

main()
