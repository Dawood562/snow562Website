import writeUpsJson from "../../data/writeups.json";
export const writeUpData = writeUpsJson;
import { Metadata } from "next";
import { WriteUp } from '../../_interfaces/WriteUp';


export async function generateStaticParams() {
  return (writeUpData as WriteUp[]).map((writeup) => ({
    name: writeup.id,
  }));
}


export const metadata: Metadata = {
  title: "Dawood Ahmad | Write Ups",
  description: "Hiiiii",
};

export default function WriteUpPage() {
    return (
        <>
          <h1>Hellooooooooooo</h1>
        </>
    );
}