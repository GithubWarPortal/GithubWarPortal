import express from "express";
import { PrismaClient } from "@prisma/client";
const addCharacterRouter = express.Router();
const prisma = new PrismaClient();

addCharacterRouter.post("/", async (req, res) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const characterDescription = req.body.description;
   await prisma.characters.create({
    data: {
      name: name,
      imageUrl: imageUrl,
      characterDescription: characterDescription,
    },
  });
 
});

export default addCharacterRouter;
