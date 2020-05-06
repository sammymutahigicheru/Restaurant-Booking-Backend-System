import { Pool } from 'pg'; //we use it to connect to db

//required for connection with .env file
import dotenv from 'dotenv';
import { getConfig } from '../../config';

//load dotenv
dotenv.config();
const { databaseUrl} = getConfig().db;

//config db
const databaseConfig = {
    connectionString: databaseUrl};

//create pool instance
const pool = new Pool(databaseConfig);

export default pool;