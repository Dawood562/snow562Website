import Link from "next/link";
import styles from "../projects/projects.module.css";
import RelativeTime from '@/app/components/RelativeTime';

export function WriteUpCard({ id, name, imageURL, shortDescription, date }: {  id: string, name: string, imageURL: string, shortDescription: string, date: string }) {
  var from = RelativeTime.from(new Date(date));
  return (
    <div className={styles.project}>
        <img className={styles.projectimage} src={imageURL} />
        <div className={styles.details}>
            <Link href={`/writeups/${id}`} className={styles.name}>{name}</Link>
        </div>
        {from}
        <div className={styles.description}>{shortDescription}</div>
    </div>
  );
}