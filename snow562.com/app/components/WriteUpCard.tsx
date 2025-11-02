import Link from "next/link";
import RelativeTime from '@/app/components/RelativeTime';
import styles from '../write-ups/writeups.module.css';
import { Author, STATUS_INFO } from '../_interfaces/Author';

export function WriteUpCard({ id, title, imageURL, shortDescription, date, author }: {  id: string, title: string, imageURL: string, shortDescription: string, date: string, author: Author }) {
  var from = RelativeTime.from(new Date(date));
  const { name, imageurl, colour } = STATUS_INFO[author];
  return (
    <div className={styles.writeup}>
        <div className={styles.details}>
            <img className={styles.writeupimage} src={imageURL} />
            <Link href={`/writeups/${id}`} className={styles.name}>{title}</Link>
        </div>
        <img src={imageurl} className={styles.authorimg}/> {name} • {from}
        <div className={styles.description}>{shortDescription}</div>
    </div>
  );
}