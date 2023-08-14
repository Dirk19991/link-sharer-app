import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
  id: Number,
  github: String,
  facebook: String,
  linkedin: String,
  twitter: String,
  youtube: String,
  codewars: String,
  stackoverflow: String,
  name: String,
  surname: String,
  email: String,
  image: String,
});

const ProfileModel = mongoose.model(
  'ProfileModel',
  profileSchema,
  'userProfiles',
);

export default ProfileModel;
