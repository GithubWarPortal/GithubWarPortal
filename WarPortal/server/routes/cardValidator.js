import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from 'cors'
export default function CardValidator() {
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())

app.get("/Validator", async (req, res) => {
    const userCard = await prisma.usersCards.findFirstOrThrow({
      where: { userId, characterId },
    });
   
  res.json("")
    console.log(userCard)});  
}
