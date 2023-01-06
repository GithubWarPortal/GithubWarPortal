import express from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get('/Validator', async (req, res) => {
    const owned = await prisma.UsersCards.findUniqueOrThrow({
      where: { userId: 1, characterId: 5 },
     
    });
  
    res.json(owned);
    console.log(owned)
  }); 
