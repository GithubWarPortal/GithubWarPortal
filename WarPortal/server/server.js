import express from "express";

import cors from "cors";

import { PrismaClient } from "@prisma/client";

const port = process.env.PORT || 5000;

const app = express();
express.json();

app.use(cors());

const prisma = new PrismaClient();
console.log("ah");

app.get(`/CardValidator`, async (req, res) => {
  const userId = req.body.userId;
  const characterId = req.body.characterId;

  try {
    await prisma.usersCards.findFirstOrThrow({
      where: { userId: userId, characterId: characterId },
    });
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
