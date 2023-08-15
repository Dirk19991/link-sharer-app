import { Link, Platform } from 'features/addLink/model/types';
import { IdResponse } from 'features/getId/model/types';

export function formatCurrentID(currentID: IdResponse) {
  const providers = [
    'github',
    'facebook',
    'twitter',
    'linkedin',
    'youtube',
    'stackoverflow',
    'codewars',
  ];
  const entries = Object.entries(currentID);

  let id = 1;

  const result: Link[] = [];
  entries.forEach(entry => {
    if (providers.includes(entry[0]) && entry[1] !== null) {
      result.push({
        id: id,
        link: {
          value: entry[1],
          validated: 'true',
        },
        platform: (entry[0][0].toUpperCase() + entry[0].slice(1)) as Platform,
      });
      id++;
    }
  });
  return result;
}
