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
  active: boolean;
  platform?: Platform;
  link?: string | null;
  id: number;
}

export interface LinksState {
  links: [Link, Link, Link, Link, Link];
  activeLinks: 0 | 1 | 2 | 3 | 4 | 5;
}
