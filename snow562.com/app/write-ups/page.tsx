import writeUpsJson from "@/app/data/writeups.json";
const writeUpData = writeUpsJson;
import { Metadata } from "next";
import { WriteUp } from '../_interfaces/WriteUp';
import { WriteUpCard } from '../components/WriteUpCard';
import styles from "../projects/projects.module.css";

export const metadata: Metadata = {
  title: "Dawood Ahmad | Write-Ups",
  description: "Hiiiii",
};

export default function WriteUps() {
    const writeups = writeUpData as WriteUp[];
    const sortedwriteups = writeups.sort((a, b) => (new Date(a.date)).valueOf() - (new Date(b.date)).valueOf());;
    return (
        <>
            <div id="root">
                <div id="title">Write-Ups</div>
                <br />
                <div className={styles.projects}>
                {writeups.map((writeup, i) => ( <WriteUpCard key={i} id={writeup.id} name={writeup.title} imageURL={writeup.imageurl} shortDescription={writeup.shortdescription} date={writeup.date}/>))}
                </div>
            </div>
        </>
    );
}