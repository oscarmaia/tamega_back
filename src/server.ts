import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRouter, usersRouter } from './routes/index.js';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => res.send('oscar aqui OK HEALTH'));
app.use('/users', usersRouter);
app.use('/auth', authRouter);
const PORT = 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
