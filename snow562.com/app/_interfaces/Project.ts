import { ProjectStatus } from './ProjectStatus';
import { Framework } from './Framework';

export interface Project {
  id: string;
  name: string;
  imageurl: string;
  status: ProjectStatus;
  shortdescription: string;
  techstack: Framework[];
  links: {
    github: string;
    hostlocation: string;
  };
  pagecontent: string[];
}