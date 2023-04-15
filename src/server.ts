import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import registerValidate from "./middleware/registerValidate.js";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => res.send("oscar aqui OK HEALTH"));
app.post("/sign-up", registerValidate, (req, res) => res.sendStatus(200));

const PORT = 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
