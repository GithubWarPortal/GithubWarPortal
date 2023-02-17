import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const cardValidatorRouter = express.Router();

cardValidatorRouter.post("/", async (req, res) => {
  console.log("API is called");

  const userId = req.body.userId;
  const characterId = req.body.characterId;

  console.log(req.body);
  console.log("Received data from frontend");

  try {
    const userCard = await prisma.usersCards.findFirst({
      where: { userId, characterId },
    });
    console.log(userCard);
    console.log("Ran Prisma query");

    if (!userCard) {
      return res.status(404).send(["Invalid"]);
    }
    if (!userId) {
      return res.status(400).send(["Invalid"]);
    }

    return res.status(200).send(["Valid!"]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error: Unable to validate card");
  }
});

export default cardValidatorRouter;