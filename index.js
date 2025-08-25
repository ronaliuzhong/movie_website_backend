// database code

import app from "./server.js";
// ran npm install mongodb to use MongoDB
import mongodb from "mongodb";
// DAO = Data Access Object. 
// common pattern for separating client interface from data access mechanisms
// import ReviewsDAO from "./dao/reviewsDAO.js";
// run npm install dotenv to use .env file
require('dotenv').config();

const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.mk6juln.mongodb.net/`
const MongoClient = mongodb.MongoClient;

const port = 8000;

run();

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    // starts the server
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})

