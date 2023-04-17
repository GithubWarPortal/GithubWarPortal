import express from "express";
import { PrismaClient } from "@prisma/client";

const createStoreRouter = express.Router();
const prisma = new PrismaClient();

createStoreRouter.post("/", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const storeName = req.body.storeName;
  const storeAddress = req.body.storeAddress;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  console.log(firstName, lastName, email, password);

  const exists = await prisma.StoreOwner.findFirst({
    where: { email: email },
  });
  console.log(exists);
  if (!exists) {
    const create = await prisma.StoreOwner.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        storeName: storeName,
        storeAddress: storeAddress,
        phone: phone,
        email: email,
        password: password,
      },
    });
    console.log(create);
  }
 
});

export default createStoreRouter;
