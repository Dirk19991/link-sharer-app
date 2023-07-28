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
  link: string | null;
  id: number;
}

export interface LinksState {
  links: Link[];
}
