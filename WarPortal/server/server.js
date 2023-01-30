import express from "express";

import cors from "cors";

import { PrismaClient } from "@prisma/client";

const port = process.env.PORT || 5000;

const app = express();
express.json();

app.use(cors());

const prisma = new PrismaClient();
console.log("ah");


app.get("/CardValidator", async (req, res) => {
  const  userId = req.params.userId;
  const characterId  = req.params.characterId;
  try {
 await prisma.usersCards.findFirst({
      where: userId, characterId });
   if (!userId )
  res.send("Invalid User")
  if(!characterId)
  res.send("Invalid Character")
  else
  res.send("Valid Card!")
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
