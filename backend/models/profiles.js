import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
  github: String,
  facebook: String,
  linkedin: String,
  twitter: String,
  youtube: String,
  codewars: String,
  stackoverflow: String,
});

const ProfileModel = mongoose.model(
  'ProfileModel',
  profileSchema,
  'userProfiles',
);

export default ProfileModel;
