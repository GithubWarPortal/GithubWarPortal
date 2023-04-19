import express from "express";
import { PrismaClient } from "@prisma/client";
const getSubmissionsRouter = express.Router();
const prisma = new PrismaClient();

getSubmissionsRouter.get("/", async (req, res) => {
    const  submissions = await prisma.approval.findMany({
        where: {approved: false}
    })
    
 
    console.log(submissions)
    
    
})
export default getSubmissionsRouter;