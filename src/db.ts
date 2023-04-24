// import dotenv from 'dotenv';

// dotenv.config();
// const {
//   env: {DB_CONNECTION_STRING='', DB_NAME='person', DB_COLLECTION='employee'}
// } = process
// const uri = "<connection string uri>";
// const client = new MongoClient(DB_CONNECTION_STRING);
// async function run() {
//   try {
//     const database = client.db(DB_NAME);
//     const movies = database.collection(DB_COLLECTION);
//     // Query for a movie that has the title 'Back to the Future'
    
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);