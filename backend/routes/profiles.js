import express from 'express';
import ProfileModel from '../models/profiles.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This works!');
});

router.get('/profs/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const profile = await ProfileModel.findOne({ id: req.params.id });

    if (profile === null) {
      throw new Error('no profile');
    }
    res.send(profile);
  } catch (error) {
    return res.status(404).send({
      message: 'no such profile!',
    });
  }
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
