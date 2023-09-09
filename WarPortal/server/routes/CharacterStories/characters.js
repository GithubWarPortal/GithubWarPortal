import {PrismaClient} from "@prisma/client";
import express from 'express';

const characterInfoRouter = express.Router();
const prisma = new PrismaClient();

characterInfoRouter.get("/", async (req, res) =>{
 const characterInfo = await prisma.characters.findMany()
console.log(characterInfo);
res.send(characterInfo);
})
export default characterInfoRouter;