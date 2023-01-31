import express from "express";

import cors from "cors";

import { PrismaClient } from "@prisma/client";

const port = process.env.PORT || 5000;

const app = express();
express.json();

app.use(cors());

const prisma = new PrismaClient();
console.log("ah");


app.post(`/CardValidator`, async (req, res) => {
  const userId = req.body.userId;
  const characterId = req.body.characterId;
  try {
    const userCard = await prisma.usersCards.findFirst({
      where: {userId, characterId}
    });
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
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
