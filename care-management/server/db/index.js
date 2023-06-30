// load our .env file
require("dotenv").config();
// require Client object from pg node module

const { Client } = require("pg");

const client = {
  query: async (str, values) => {
    const dbClient = new Client(process.env.DATABASE_URL);
    // connect to our database
    await dbClient.connect();
    // execute our query
    const result = await dbClient.query(str, values);
    // end the connection
    await dbClient.end();
    // return the result
    return result;
  },
};
module.exports = client;
