import Link from "next/link";
import styles from "../projects/projects.module.css";
import { CustomPill } from "./CustomPill";
import { ProjectStatus, STATUS_INFO } from '../_interfaces/ProjectStatus';
import { Project } from '../_interfaces/Project'

export function ProjectStatusLabel({ status }: { status: ProjectStatus }) {
  const { label, backgroundColour, emoji } = STATUS_INFO[status];
  return (
    <CustomPill label={label} icon={`<img src="${emoji}" alt="${label} logo"/>`} colour={backgroundColour} emoji = {true}/>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.project}>
        <img className={styles.projectimage} src={project.imageurl} />
        <div className={styles.details}>
            <Link href={`/projects/${project.id}`} className={styles.name}>{project.name}</Link> {ProjectStatusLabel(project) }
        </div>
        <div className={styles.description}>{project.shortdescription}</div>
    </div>
  );
}