import express from "express";

const app = express();
app.use(require("./routes/cardValidator"));
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
