import express from "express";
import CardValidator from "./routes/cardValidator.js";
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000;


const app = express();

app.use(cors())



app.use(cors(CardValidator()));



app.listen(port, () => console.log(`Server is running on port ${port}`));
