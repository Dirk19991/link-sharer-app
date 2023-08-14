export interface IdResponse {
  id: number;
  github: string | null;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
  youtube: string | null;
  codewars: string | null;
  stackoverflow: string | null;
  name: string;
  surname: string;
  email: string;
  image: string;
}

export interface IdState {
  profile: IdResponse | null;
}
