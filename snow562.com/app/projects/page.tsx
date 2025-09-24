import Link from "next/link";
import Head from "next/head";
import type { Metadata } from "next";
import "./projects.css";
import projectsData from "../data/projects.json";
import { ProjectCard, ProjectStatus, STATUS_ORDER } from "../components/ProjectCard";

interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  imageurl: string;
}

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
        <div className="projects">

          {sortedProjects.map((project, i) => ( <ProjectCard key={i} project={project} />))}
          
        </div>
    </div>
    </>
  );
}