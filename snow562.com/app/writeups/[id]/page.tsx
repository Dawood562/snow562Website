import writeUpsJson from "../../data/writeups.json";
export const writeUpData = writeUpsJson;
import { Metadata } from "next";
import { WriteUp } from '../../_interfaces/WriteUp';
import Link from 'next/link';
import styles from '../writeups.module.css';


export async function generateStaticParams() {
  return (writeUpData as WriteUp[]).map((writeup) => ({
    id: writeup.id,
  }));
}


export const metadata: Metadata = {
  title: "Dawood Ahmad | Write Ups",
  description: "Hiiiii",
};

export default function WriteUpPage({ params: { id } }: { params: { id: string } }) {
  const writeup = (writeUpData as WriteUp[]).find((writeup) => writeup.id === id);

  if (!writeup) {
    return (
      <div id="root">
        <div id="title">This page shouldn't exist.</div>
        <div id="description">Let me know the URL you are at and how you got here!</div>
      </div>
    );
  }
  return (
      <>
        <div className="breadcrumbs"><Link className="underline" href="/writeups" >Write-Ups</Link> &gt; <Link className="underline" href={`/writeup/${writeup.id}`}>{writeup.title}</Link></div>
        <br />
        <div id="root">
          <div className={styles.bigtitle} style={{padding: "0", margin: "0"}}>{writeup.title}</div>
          <br />
          <img className={styles.mainimage} src={writeup.mainimageurl} />
          <div className={styles.caption}>{writeup.mainimagecaption}</div>
          <br />
          <div id="description" style={{maxWidth: "70%"}}>{writeup.shortdescription}</div>
        </div>
      </>
  );
}