import { MongoClient } from 'mongodb'

const uri =
  'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

export const connectDatabase = async () => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  })
  const db = await (await client.connect()).db('planets')

  return {
    planets: db.collection('planets'),
  }
}
