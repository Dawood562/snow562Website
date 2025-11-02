import Head from "next/head";
import type { Metadata } from "next";
import projectsData from "../data/projects.json";
import { ProjectCard } from "../components/ProjectCard";
import { STATUS_ORDER } from "../_interfaces/ProjectStatus";
import styles from "./projects.module.css";
import { Project } from '../_interfaces/Project';

export const metadata: Metadata = {
  title: "Dawood Ahmad | Projects",
  description: "Hiiiii",
};

export default function ProjectsPage() {
  const sortedProjects = (projectsData as Project[]).sort(
    (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
  );

  return (
    <>
        <Head>
            <link rel="stylesheet" href="https://assets.snow562.com/css/projects.css" />
        </Head>

        
        <div id="root">
        <div id="title">My Projects</div>
        <br />
        <div className={styles.projects}>

          {sortedProjects.map((project, i) => ( <ProjectCard key={i} project={project} />))}

        </div>
    </div>
    </>
  );
}