import express from "express"
import cors from "cors";
import bodyParser from 'body-parser';
import { PrismaClient } from "@prisma/client";

const port = process.env.PORT || 5000;



const app = express();
express.json();

app.use(cors());app.use(bodyParser.json());
const prisma = new PrismaClient();
console.log("ah");


app.post(`/CardValidator`, async (req, res) => {
  console.log("API is called");

  const userId = req.body.userId;
  const characterId = req.body.characterId;

  console.log(req.body);
  console.log("Recieved data from frontend");

  //TODO: move api to routes folder
  try {
    const userCard = await prisma.usersCards.findFirst({
      where: { userId, characterId },
    });
    console.log(userCard);
    console.log("ran prisma query");
    if (!userCard) {
      return res.status(404).send(["Invalid Character"]);
    }
    if (!userId) {
      return res.status(400).send(["Invalid User"]);
    }
    return res.status(200).send(["Valid Card!"]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error: Unable to validate card");
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
