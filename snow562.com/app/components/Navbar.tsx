import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
    <div className="nav-links">
        <Link href="/"><img src="https://assets.snow562.com/images/logos/snowflake.svg" alt="Icon" width={28} /></Link>&emsp;
        <Link href="/about-me">About Me</Link>&emsp;
        <Link href="/projects">Projects</Link>&emsp;
        <Link href="/experience">Experience</Link>
    </div>
    </nav>
  );
}