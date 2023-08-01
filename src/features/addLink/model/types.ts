export type Platform =
  | 'Github'
  | 'Facebook'
  | 'Linkedin'
  | 'Twitter'
  | 'Youtube'
  | 'Codewars'
  | 'Stackoverflow'
  | null;

export interface Link {
  platform: Platform;
  link: {
    value: string | null;
    validated: 'idle' | 'true' | 'false';
  };
  id: number;
}

export interface LinksState {
  links: Link[];
}
