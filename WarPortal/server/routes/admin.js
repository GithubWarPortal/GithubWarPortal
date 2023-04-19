import express from "express"
import { PrismaClient } from "@prisma/client"

const adminSignInRouter = express.Router();
const prisma = new PrismaClient();

adminSignInRouter.post("/", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    try {
        const auth = await prisma.Admin.findFirst({
          where: { username, password },
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
})
export default adminSignInRouter;