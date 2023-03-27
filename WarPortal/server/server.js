import express from "express";
import cors from "cors";
import cardValidatorRouter from "./routes/cardValidator.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/CardValidator", cardValidatorRouter);
//TODO: Add routes for form
//app.use("/submit", formRouter);
app.listen(port, () => console.log(`Server is running on port ${port}`));