import Head from "next/head";
import { Metadata } from "next";
import ExperienceJS from "./experienceJS";

export const metadata: Metadata = {
  title: "Dawood Ahmad | Experience",
  description: "Hiiiii",
};


export default function Experience() {
  return ( <ExperienceJS /> );
}
