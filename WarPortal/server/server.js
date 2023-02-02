import express from "express";


import cors from "cors";

import { PrismaClient } from "@prisma/client";

const port = process.env.PORT || 5000;

const app = express();
express.json();

app.use(cors());
const prisma = new PrismaClient();
console.log("ah");

const recordRoutes = express.Router();


   

recordRoutes.route(`/CardValidator`, async (req, res) => {
console.log("API is called")
const userInput = {
  userId: req.body.userId,
  characterId: req.body.characterId
}
 
  console.log( userInput)

  try {
    const userCard = await prisma.usersCards.findFirstOrThrow({
      where: {userId, characterId}}
    )
  
      if (!userCard) {
         return res.status(404).send('Invalid character');
       }
       if (!userId) {
         return res.status(400).send('Invalid user');
       }
       return res.status(200).send('Valid card');
     } catch (error) {
       console.error(error);
       return res.status(500).send('Error: Unable to validate card');
     }
     }
   

  )
  app.listen(port, () => console.log(`Server is running on port ${port}`));

