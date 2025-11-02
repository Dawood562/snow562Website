import writeUpsJson from "@/app/data/writeups.json";
const writeUpData = writeUpsJson;
import { Metadata } from "next";
import { WriteUp } from '../_interfaces/WriteUp';
import { WriteUpCard } from '../components/WriteUpCard';
import styles from './writeups.module.css';

export const metadata: Metadata = {
  title: "Dawood Ahmad | Write-Ups",
  description: "Hiiiii",
};

export default function WriteUps() {
    const writeups = writeUpData as WriteUp[];
    const sortedwriteups = writeups.sort((a, b) => (new Date(b.date)).valueOf() - (new Date(a.date)).valueOf());;
    return (
        <>
            <div id="root">
                <div id="title">Write-Ups</div>
                <br />
                <div className={styles.writeups}>
                {sortedwriteups.map((writeup, i) => ( <WriteUpCard key={i} id={writeup.id} title={writeup.title} imageURL={writeup.imageurl} shortDescription={writeup.shortdescription} date={writeup.date} author={writeup.author}/>))}
                </div>
            </div>
        </>
    );
}