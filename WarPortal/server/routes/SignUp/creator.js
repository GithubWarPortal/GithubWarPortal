import express from "express";
import { PrismaClient } from "@prisma/client";

const createCreatorRouter = express.Router();
const prisma = new PrismaClient();

createCreatorRouter.post("/", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const userId = req.body.userId;
  console.log(firstName, lastName, email, password, userId);

  const exists = await prisma.Creator.findFirst({
 where: { OR: [{userId: userId}, {email: email}]

    
 }
  
  })
   console.log(exists)
  if (!exists) {
    const create = await prisma.Creator.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userId: userId,
    }); console.log(create);}
   
}
);

;

export default createCreatorRouter;
