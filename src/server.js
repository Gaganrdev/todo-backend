import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});