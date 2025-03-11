import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

// const pgp = require('pg-promise')
// const db = pgp(process.env.DATABASE_URL)

// db.one('Select $1 AS value', 123)
//   .then((data)=> {
//     console.log('Data:', data.value)
//   })
//   .catch((error) => {
//     console.log('Error:', error)
//   })
