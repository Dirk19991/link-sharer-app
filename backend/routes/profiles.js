import express from 'express';
import ProfileModel from '../models/profiles.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This works!');
});

router.post('/', async (req, res) => {
  const body = req.body;
  console.log(body);
  const newProfile = new ProfileModel(body);
  try {
    await newProfile.save();
    res.status(201).json(newProfile);
    console.log('success');
  } catch (error) {
    res.status(409).json({ message: 'Error!' });
  }
});

export default router;
