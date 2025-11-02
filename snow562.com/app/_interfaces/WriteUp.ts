import { Author } from './Author';

export interface WriteUp {
  id: string;
  title: string;
  date: string;
  author: Author;
  imageurl: string;
  shortdescription: string;
  pagecontent: string[];
}