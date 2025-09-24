import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dawood Ahmad",
  description: "Hiiiii",
};

export default function Home() {
  return (
    <div id="root">
      <div id="title">Dawood Ahmad</div>
      <img src="https://assets.snow562.com/images/me900.webp" alt="Me!" className = "img-float" width={600} />
      <br />
      <div id="description">Hi! This is me.<br />
      An Undergraduate Computer Scientist with<br />a love for Cyber Security and Esports!</div> <br />
    </div>
  );
}
