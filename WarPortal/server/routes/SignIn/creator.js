import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const creatorSignInRouter = express.Router();

creatorSignInRouter.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const auth = await prisma.Creator.findFirst({
      where: { email, password },
    });
    console.log(auth);
    console.log("Ran Prisma query");

    if (!auth) {
      return res.status(404).send(["Invalid"]);
    }

    return res.status(200).send(["Valid!"]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error: Unable to validate");
  }
});
export default creatorSignInRouter;
