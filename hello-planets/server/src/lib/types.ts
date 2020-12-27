import { Collection, ObjectId } from 'mongodb'

export interface Planet {
  _id: ObjectId
  name: string
  description: string
}

export interface Database {
  planets: Collection
}
