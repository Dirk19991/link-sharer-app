import { Platform } from '../../../features/addLink/model/types';

function assertUnreachable(x: never): never {
  console.log(x);
  throw new Error("Didn't expect to get here");
}

export const checkLink = (platform: Platform, value: string) => {
  switch (platform) {
    case 'Github':
      if (value.toLowerCase().includes('github.com')) {
        return true;
      } else return false;

    case 'Facebook':
      if (value.toLowerCase().includes('facebook.com')) {
        return true;
      } else return false;

    case 'Linkedin':
      if (value.toLowerCase().includes('linkedin.com')) {
        return true;
      } else return false;

    case 'Twitter':
      if (value.toLowerCase().includes('twitter.com')) {
        return true;
      } else return false;

    case 'Youtube':
      if (value.toLowerCase().includes('youtube.com')) {
        return true;
      } else return false;

    case 'Codewars':
      if (value.toLowerCase().includes('codewars.com')) {
        return true;
      } else return false;

    case 'Stackoverflow':
      if (value.toLowerCase().includes('stackoverflow.com')) {
        return true;
      } else return false;
    case null:
      return;
  }
  return assertUnreachable(platform);
};
