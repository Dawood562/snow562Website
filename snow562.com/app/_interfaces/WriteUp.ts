import { Author } from './Author';

export interface WriteUp {
  id: string;
  title: string;
  date: string;
  author: Author;
  previewimageurl: string;
  mainimageurl: string;
  mainimagecaption: string;
  shortdescription: string;
  pagecontent: string[];
}