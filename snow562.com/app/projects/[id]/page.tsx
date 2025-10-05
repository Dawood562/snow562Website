import projectsJson from "../../data/projects.json";
export const projectsData = projectsJson;
import { ProjectStatusLabel, ProjectStatus } from "../../components/ProjectCard";
import styles from "../projects.module.css";
import { Framework, FrameworkPill } from "@/app/components/FrameworkPill";
import Link from "next/link";
import { CustomPill } from "@/app/components/CustomPill";

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
    <>
      <div style={{top: "1em", left: "1em", fontSize: "0.8em", paddingLeft: "5em", paddingTop: "1em"}}><Link href="/projects" >Projects</Link> &gt; <Link href={`/projects/${project.id}`}>{project.name}</Link></div>
      <div id="root">
        <img className={styles.projectimage} src={project.imageurl} />
        <div id="title" style={{padding: "0", margin: "0"}}>{project.name}</div>
        <div> <ProjectStatusLabel status={project.status} /> </div>
        <div style = {{display: "flex", flexWrap: "wrap", padding: "2em", gap: "1em", justifyContent: "center"}}>{project.techstack.map((framework, i) => ( <FrameworkPill key={i} framework={framework} /> ))} </div>
        <br />
        <div id="description" style={{maxWidth: "70%"}}>{project.shortdescription}</div>
        <div style={{display: "flex", gap:"1em"}}>{project.links.github != "" ? <Link href={project.links.github} target="_blank"><CustomPill label="View Repo" icon="<img src='https://assets.snow562.com/images/logos/github dark.webp' />" colour="#C7C7C7" emoji = {false} /></Link>: ""}
          {project.links.hostlocation != "" ? <Link href={project.links.hostlocation} target="_blank"><CustomPill label="View Live" icon="<img src='https://assets.snow562.com/images/emoji/viewlive.png' />" colour="#7223c1" emoji = {false}/></Link>: ""}
        </div>
      </div>
    </>
  );
}
