import { writeUpData } from "./writeups";
import { Metadata } from "next";

interface WriteUp {
  name: string;
  description?: string;
}

export async function generateStaticParams() {
  return (writeUpData as WriteUp[]).map((writeUp) => ({
    name: writeUp.name,
  }));
}

export const metadata: Metadata = {
  title: "Dawood Ahmad | Write Ups",
  description: "Hiiiii",
};

export default function WriteUp() {
    return (
        <>
          <h1>Hellooooooooooo</h1>
        </>
    );
}