import { Platform } from '../../../features/addLink/model/types';

function assertUnreachable(x: never): never {
  console.log(x);
  throw new Error("Didn't expect to get here");
}

export const checkLink = (platform: Platform, value: string) => {
  switch (platform) {
    case 'Github':
      if (value.toLowerCase().includes('https://github.com')) {
        return true;
      } else return false;

    case 'Facebook':
      if (value.toLowerCase().includes('https://facebook.com')) {
        return true;
      } else return false;

    case 'Linkedin':
      if (value.toLowerCase().includes('https://linkedin.com')) {
        return true;
      } else return false;

    case 'Twitter':
      if (value.toLowerCase().includes('https://twitter.com')) {
        return true;
      } else return false;

    case 'Youtube':
      if (value.toLowerCase().includes('https://youtube.com')) {
        return true;
      } else return false;

    case 'Codewars':
      if (value.toLowerCase().includes('https://codewars.com')) {
        return true;
      } else return false;

    case 'Stackoverflow':
      if (value.toLowerCase().includes('https://stackoverflow.com')) {
        return true;
      } else return false;
    case null:
      return;
  }
  return assertUnreachable(platform);
};
