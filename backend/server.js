import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import './loadEnvironment.mjs';
import mongoose from 'mongoose';
import profileRoutes from './routes/profiles.js';

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/profiles', profileRoutes);

mongoose
  .connect(
    'mongodb+srv://dooommm:HnIyX3DRYiqvv76q@cluster0.p3con8f.mongodb.net/userData',
  )
  .then(() => app.listen(PORT, () => console.log('server running')));
// start the Express server
