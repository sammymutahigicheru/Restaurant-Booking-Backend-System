import { Pool } from 'pg'; //we use it to connect to db

//required for connection with .env file
import dotenv from 'dotenv';

//load dotenv
dotenv.config();

//config db
const databaseConfig = { connectionString: process.env.DATABASE_URL };

//create pool instance
const pool = new Pool(databaseConfig);

export default pool;