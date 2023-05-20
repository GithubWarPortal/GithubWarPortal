import express from "express";
import { PrismaClient } from "@prisma/client";

const getApprovedRouter = express.Router();
const prisma = new PrismaClient();

getApprovedRouter.get("/", async (req, res) => {
  console.log("get api requested");
  const approved = await prisma.approval.findMany({
    where: { approved: true, created: false },
  })
  console.log(approved);
  res.send(approved);
})
export default getApprovedRouter;
