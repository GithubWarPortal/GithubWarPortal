//TODO: Add API for prisma to store submissions in the database
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const cardValidatorRouter = express.Router();
//const submission = prisma.

//