import express from "express";
import cors from "cors";

//Import routes
import cardValidatorRouter from "./routes/cardValidator.js";
import storeSubmissionRouter from "./routes/CardCreator/storeSubmission.js";
import creatorSubmissionRouter from "./routes/CardCreator/creatorSubmission.js";


const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

//Router for card validator 
app.use("/CardValidator", cardValidatorRouter);

//Router for card submissions
app.use("/StoreSubmission", storeSubmissionRouter);
app.use("/CreatorSubmission", creatorSubmissionRouter);


app.listen(port, () => console.log(`Server is running on port ${port}`));