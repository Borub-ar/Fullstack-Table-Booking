import http from 'http';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './app.js';

dotenv.config({ path: './src/.env' });

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL!;

const server = http.createServer(app);

mongoose.connection.once('open', () => console.log('Mongoose connected successfully'));
mongoose.connection.on('error', err => console.error(`Mongoose connection error: ${err}`));

const startServer = async () => {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
