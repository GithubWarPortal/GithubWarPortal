import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";


export default function CardValidatorAPI() {
const app = express();
app.use(express.json());


app.get("/CardValidator", async (req, res) => {
    const userCard = await prisma.usersCards.findFirstOrThrow({
      where: { userId, characterId },
    });
  
    res.json(userCard)});}