import express from "express";
import { PrismaClient } from "@prisma/client";

const createCreatorRouter = express.Router();
const prisma = new PrismaClient();

createCreatorRouter.post("/", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  console.log(firstName, lastName, email, password);

  const exists = await prisma.Creator.findUnique({
    where: { email: email },
  });
  console.log(exists);
  if (!exists) {
    const create = await prisma.Creator.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
    console.log(create);
  }
});

export default createCreatorRouter;
