import styles from "../projects/projects.module.css";

export function getContrastColor(hex: string): string {
  hex = hex.replace(/^#/, "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // "In YIQ the Y component represents the luma information, and is the only component used by black-and-white television receivers.""
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#000000" : "#FFFFFF";
}

export function CustomPill({ label, icon, colour, emoji }: { label: string, icon: string, colour: string, emoji?: boolean }) {
    return (
        <div className={styles.status} style={{backgroundColor: colour, color: getContrastColor(colour)}}>
            <div className={emoji ? styles.statusemoji : styles.statuslogo} dangerouslySetInnerHTML={{ __html: icon }}></div> {label}
        </div>
    );
}