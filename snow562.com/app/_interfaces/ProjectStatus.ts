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

export const STATUS_INFO: Record<ProjectStatus, { label: string; backgroundColour: string; emoji: string }> = {
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