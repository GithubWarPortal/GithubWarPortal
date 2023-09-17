import {PrismaClient} from "@prisma/client";
import express from 'express';

const creatureInfoRouter = express.Router();
const prisma = new PrismaClient();

creatureInfoRouter.get("/", async (req, res) =>{
 const creatureInfo = await prisma.creatures.findMany()
console.log(creatureInfo);
res.send(creatureInfo);
})
export default creatureInfoRouter;