import Link from "next/link";

export enum ProjectStatus {
  IDEA = "IDEA",
  INDEV = "INDEV",
  COMPLETE = "COMPLETE",
  ARCHIVED = "ARCHIVED",
}

// Custom sort order
export const STATUS_ORDER: Record<ProjectStatus, number> = {
  [ProjectStatus.COMPLETE]: 0,
  [ProjectStatus.INDEV]: 1,
  [ProjectStatus.ARCHIVED]: 2,
  [ProjectStatus.IDEA]: 3,
};

const STATUS_INFO: Record<ProjectStatus, { label: string; backgroundColour: string; emoji: string }> = {
  [ProjectStatus.COMPLETE]: {
    label: "Complete",
    backgroundColour: "#10a700",
    emoji: "https://assets.snow562.com/images/emoji/complete.png",
  },
  [ProjectStatus.INDEV]: {
    label: "In Development",
    backgroundColour: "#fca000",
    emoji: "https://assets.snow562.com/images/emoji/indev.png",
  },
  [ProjectStatus.ARCHIVED]: {
    label: "Archived",
    backgroundColour: "#00bad6",
    emoji: "https://assets.snow562.com/images/emoji/archived.png",
  },
  [ProjectStatus.IDEA]: {
    label: "Idea",
    backgroundColour: "#ac4bff",
    emoji: "https://assets.snow562.com/images/emoji/idea.png",
  }
};


interface Project {
  id: string;
  name: string;
  imageurl: string;
  shortdescription: string;
  status: ProjectStatus;
}

export function ProjectStatusLabel({ status }: { status: ProjectStatus }) {
  const { label, backgroundColour, emoji } = STATUS_INFO[status];
  return (
    <div className="status" style={{backgroundColor: backgroundColour}}>
      <div className="status-emoji"><img src={emoji} /></div> {label}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project">
        <img className="project-image" src={project.imageurl} />
        <div className="details">
            <Link href={`/projects/${project.id}`} className="name">{project.name}</Link> {ProjectStatusLabel(project) }
        </div>
        <div className="description">{project.shortdescription}</div>
    </div>
  );
}