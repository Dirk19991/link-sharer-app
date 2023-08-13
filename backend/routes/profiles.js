import express from 'express';
import ProfileModel from '../models/profiles.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This works!');
});

router.post('/', async (req, res) => {
  let currentId = 0;
  await ProfileModel.findOne()
    .sort('-id')
    .then(res => {
      currentId = res.id;
    });
  const body = { ...req.body, id: currentId + 1 };
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
