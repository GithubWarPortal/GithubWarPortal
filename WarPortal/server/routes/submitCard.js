import express from "express";
import { PrismaClient } from "@prisma/client";

//creates prisma client
const prisma = new PrismaClient();

//creates submission router
const submissionRouter = express.Router();

//Backend API
submissionRouter.post("/", async (req, res) => {
  //assigns variables to user input from the frontend
  const cardName = req.body.cardName;
  const moveOne = req.body.moveOne;
  const moveOneDescription = req.body.moveOneDescription;
  const moveTwo = req.body.moveTwo;
  const moveTwoDescription = req.body.moveTwoDescription;
  const moveThree = req.body.moveThree;
  const moveThreeDescription = req.body.moveThreeDescription;
  const moveFour = req.body.moveFour;
  const moveFourDescription = req.body.moveFourDescription;
  const gmail = req.body.gmail;

  //run a prisma query to store the data in the database
  const submission = await prisma.approval.create({
    data: {
      cardName: cardName,
      moveOne: moveOne,
      moveOneDescription: moveOneDescription,
      moveTwo: moveTwo,
      moveTwoDescription: moveTwoDescription,
      moveThree: moveThree,
      moveThreeDescription: moveThreeDescription,
      moveFour: moveFour,
      moveFourDescription: moveFourDescription,
      gmail: gmail,
    },
  });
  console.log(submission);
 
});
export default submissionRouter;
