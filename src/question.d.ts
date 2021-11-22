export type Question = {
  id: string;
  title: string;
  group: string;
  description: string;
  list?: {
    title: string;
    description: string;
  }[];
  links?: string[];
};
