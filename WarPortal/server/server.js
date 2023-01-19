import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/CardValidator", async (req, res) => {
  const { userId } = req.body;
  const { characterId } = req.params;

  const owned = await prisma.usersCards.findFirstOrThrow({
    select: {
      usersCardsId,
      where: {
        id: Int(userId),
        characterId: Int(characterId)

      },
    },
  });

  res.json(owned);
});
