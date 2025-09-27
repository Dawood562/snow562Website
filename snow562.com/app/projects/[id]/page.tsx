import projectsJson from "../../data/projects.json";
export const projectsData = projectsJson;
import { ProjectStatusLabel, ProjectStatus } from "../../components/ProjectCard";
import styles from "../projects.module.css";
import { Framework, FrameworkPill } from "@/app/components/FrameworkPill";

interface Project {
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

export async function generateStaticParams() {
  return (projectsData as Project[]).map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params: { id } }: { params: { id: string } }) {
  /* Find the project with the matching ID */
  const project = (projectsData as Project[]).find((proj) => proj.id === id);

  if (!project) {
    return (
      <div id="root">
        <div id="title">This page shouldn't exist.</div>
        <div id="description">Let me know the URL you are at and how you got here!</div>
      </div>
    );
  }

  return (
    <div id="root">
      <img className={styles.projectimage} src={project.imageurl} />
      <div id="title" style={{paddingBottom: "0", marginBottom: "0"}}>{project.name}</div>
      <ProjectStatusLabel status={project.status} />
      <div style = {{display: "inline-flex", paddingTop: "2em", gap: "1em"}}>{project.techstack.map((framework, i) => ( <FrameworkPill key={i} framework={framework} />))} </div>
      <br />
      <div id="description" style={{maxWidth: "70%"}}>{project.shortdescription}</div>
      <div>View Repo: {project.links.github}, View live: {project.links.hostlocation}</div>
    </div>
  );
}
