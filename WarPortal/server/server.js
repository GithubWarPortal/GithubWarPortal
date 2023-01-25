import express from "express";
import CardValidator from "./routes/cardValidator.js";
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000;


const app = express();

app.use(cors())


app.get(`/CardValidator`, async (req, res) => {
const userId = req.body.userId
const characterId = req.body.characterId
    try {
      await prisma.usersCards.findFirstOrThrow({
        where: usersCardsId,
        contains: { userId: {}, characterId: {}},
      });
    
    } catch (error) {
      console.error(error);
    }
  })

app.listen(port, () => console.log(`Server is running on port ${port}`));
