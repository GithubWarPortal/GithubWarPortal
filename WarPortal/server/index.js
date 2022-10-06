import * as dotenv from 'dotenv' 
dotenv.config()
import { createConnection } from 'mysql2'
const connection = createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
connection.end()
