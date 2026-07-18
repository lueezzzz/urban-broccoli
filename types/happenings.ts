export type Happening = {
  title: string;
  summary: string;
  emphasis?: string;
  meta?: string;
  image?: string;
  imageAlt?: string;
  tags?: readonly string[];
};
