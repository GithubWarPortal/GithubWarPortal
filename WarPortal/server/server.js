import express from "express";
import cors from "cors";

//Import routes
import cardValidatorRouter from "./routes/cardValidator.js";
import storeSubmissionRouter from "./routes/CardCreator/storeSubmission.js";
import creatorSubmissionRouter from "./routes/CardCreator/creatorSubmission.js";
import creatorSignInRouter from "./routes/SignIn/creator.js";
import storeSignInRouter from "./routes/SignIn/store.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

//Router for card validator 
app.use("/CardValidator", cardValidatorRouter);

//Router for card submissions
app.use("/StoreSubmission", storeSubmissionRouter);
app.use("/CreatorSubmission", creatorSubmissionRouter);
app.use("/CreatorSignIn", creatorSignInRouter);
app.use("/StoreSignIn", storeSignInRouter);


app.listen(port, () => console.log(`Server is running on port ${port}`));