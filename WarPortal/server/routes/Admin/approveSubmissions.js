import express from "express";
import { PrismaClient } from "@prisma/client";

const approveSubmissionRouter = express.Router();
const prisma = new PrismaClient();

approveSubmissionRouter.post("/", async (req, res) => {
  try {
    const id = await req.body.id;
    // Await the update operation
    await prisma.approval.update({
      where: { id: id },
      data: {
        approved: true,
      },
    });
    // Send a response to the client
    res.status(200).json({ message: "Approval status updated" });
  } catch (error) {
    console.log(error);
    // Send an error response to the client
    res.status(500).json({ error: "Internal server error" });
  }
});

export default approveSubmissionRouter;
