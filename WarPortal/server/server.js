import express from "express";
import "./routes/cardValidator"

const cors = require("cors");
require("dotenv").config({ path: "./env" });
const port = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors());

app.use(require("./routes/cardValidator"));



app.listen(port, () => console.log(`Server is running on port ${port}`));
