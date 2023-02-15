import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
export default function CardValidator() {
  const prisma = new PrismaClient();

  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get("/CardValidator", async (req, res) => {
    const userId = req.params.userId;
    const characterId = req.params.characterId;

    try {
      await prisma.usersCards.findFirst({
        select: usersCardsId,
        where: { userId, characterId },
      });
    } catch (error) {
      console.error(error);
    }
  });
}
