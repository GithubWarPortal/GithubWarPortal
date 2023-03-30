import express from "express";
import cors from "cors";

//Import routes
import cardValidatorRouter from "./routes/cardValidator.js";
import submissionRouter from "./routes/submitCard.js";


const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

//Router for card validator 
app.use("/CardValidator", cardValidatorRouter);

//Router for card submissions
app.use("/submit", submissionRouter);


app.listen(port, () => console.log(`Server is running on port ${port}`));