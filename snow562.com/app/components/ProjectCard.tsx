import Link from "next/link";
import styles from "../projects/projects.module.css";
import { CustomPill } from "./CustomPill";
import { ProjectStatus, STATUS_INFO } from '../_interfaces/ProjectStatus';

export function ProjectStatusLabel({ status }: { status: ProjectStatus }) {
  const { label, backgroundColour, emoji } = STATUS_INFO[status];
  return (
    <CustomPill label={label} icon={`<img src="${emoji}" alt="${label} logo"/>`} colour={backgroundColour} emoji = {true}/>
  );
}

export function ProjectCard({ id, name, imageURL, shortDescription, status }: {  id: string, name: string, imageURL: string, shortDescription: string, status?: ProjectStatus }) {
  return (
    <div className={styles.project}>
        <img className={styles.projectimage} src={imageURL} />
        <div className={styles.details}>
            <Link href={`/projects/${id}`} className={styles.name}>{name}</Link> { status && <ProjectStatusLabel status={status} /> }
        </div>
        <div className={styles.description}>{shortDescription}</div>
    </div>
  );
}