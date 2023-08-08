import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import profileRoutes from './routes/profiles.js';
import 'dotenv/config';

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/profiles', profileRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: 'userData',
  })
  .then(() => app.listen(PORT, () => console.log('server running')));
// start the Express server
