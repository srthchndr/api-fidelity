import { MongoClient } from 'mongodb';
require('dotenv').config();

const {
    env: { DB_CONNECTION_STRING }
} = process;

const client = new MongoClient(DB_CONNECTION_STRING);

let db;
let collection;

export const connectToDatabase = async () => {
    console.log('ConnStr', DB_CONNECTION_STRING)
  try {
    await client.connect();
    db = client.db('person');
    collection = await db.collection('employees');
    console.log('connected to DB')

  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

export const getCollection = () => {
  return collection;
};