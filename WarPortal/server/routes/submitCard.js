import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const submissionRouter = express.Router();
submissionRouter.post("/", async (req, res) => {
  //TODO: take in form data and assign it to variables
  const moveOne = req.body.moveOne;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  const moveOneDescription = req.body.moveOneDescription;
  const moveTwo = req.body.moveTwo;
  const moveTwoDescription = req.body.moveTwoDescription;
  const moveThree = req.body.moveThree;
  const moveThreeDescription = req.body.moveThreeDescription;
  const moveFour = req.body.moveFour;
  const moveFourDescription = req.body.moveFourDescription;
  const gmail = req.body.gmail;
  //TODO: store them in the database
});
