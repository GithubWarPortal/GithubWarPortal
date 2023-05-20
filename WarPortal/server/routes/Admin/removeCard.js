import express from 'express';
import { PrismaClient } from '@prisma/client';

const removeCardRouter = express.Router();

const prisma = new PrismaClient();

removeCardRouter.post("/", async (req, res) => {
    try {
      const id = req.body.id
const removedCard = await prisma.approval.update({
    where : { id: id},
    data: {
        created: true
    }
})
res.send()
console.log(removedCard);   
    } catch(err){
        console.log(err)
    }
   
})
export default removeCardRouter;;
