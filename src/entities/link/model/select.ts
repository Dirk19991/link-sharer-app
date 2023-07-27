import { StylesConfig } from 'react-select';

export interface WebsiteOption {
  readonly value: string;
  readonly label: string;
  readonly icon: string;
}

export const options = [
  { value: 'Github', label: 'Github', icon: './websites/github.svg' },
  { value: 'Facebook', label: 'Facebook', icon: './websites/facebook.svg' },
  { value: 'Linkedin', label: 'LinkedIn', icon: './websites/linkedin.svg' },
  { value: 'Twitter', label: 'Twitter', icon: './websites/twitter.svg' },
  { value: 'Youtube', label: 'Youtube', icon: './websites/youtube.svg' },
  { value: 'Codewars', label: 'Codewars', icon: './websites/codewars.svg' },
  {
    value: 'Stackoverflow',
    label: 'Stack Overflow',
    icon: './websites/stackOverflow.svg',
  },
];

export const dot = (icon: string) => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    content: '""',
    display: 'block',
    background: `url(${icon}) no-repeat`,
    width: '18px',
    height: '18px',
    marginRight: '10px',
  },
});

export const colourStyles: StylesConfig<WebsiteOption> = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '10px',
  }),
  option: (styles, { data }) => {
    const icon = data.icon;
    return {
      ...styles,

      ...dot(icon),
    };
  },

  container: styles => ({ ...styles, borderRadius: '10px' }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.icon),
  }),
};
