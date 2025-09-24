import Head from "next/head";
import { writeUpData } from "./writeups";

interface WriteUp {
  name: string;
  description?: string;
}

export async function generateStaticParams() {
  return (writeUpData as WriteUp[]).map((writeUp) => ({
    name: writeUp.name,
  }));
}

export default function WriteUp() {
    return (
        <>
            <Head>
                <title>Dawood Ahmad | Write Ups</title>
                <meta name="description" content="Hiiiii" />
            </Head>
            <h1>Hellooooooooooo</h1>
        </>
    );
}