import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";



const app = express();
app.use(express.json());


app.get("/Validator", async (req, res) => {
    const userCard = await prisma.usersCards.findFirstOrThrow({
      where: { userId, characterId },
    });
  
    res.json(userCard)});