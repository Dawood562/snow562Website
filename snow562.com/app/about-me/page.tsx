import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dawood Ahmad | About",
  description: "Hiiiii",
};

export default function AboutPage() {
  return (
    <div id="root">
        <div id="title">About Me</div>
        <img src="https://assets.snow562.com/images/metwo900.webp" alt="Me!" className="img-float" width="500" />
        <div id="description">Hey, I'm Dawood!<br />
          <div className="aboutmetext">
            I've graduated from <a className="underline" href="https://www.royalholloway.ac.uk/" target="_blank">Royal Holloway, University of London</a> with a First in Computer Science.
            Naturally curious and driven by an interest in learning, you can be sure that if I don't know something that I need to, it won't remain that way for long. I am always happy to help out where I can and will try to go above and beyond what is required of me.<br />
            You can obtain a copy of my CV <a className="underline" href="https://assets.snow562.com/CV-202507.pdf" target="_blank">here</a>.
          </div>
          <br />
          <h2>Interests</h2>
          <div className="aboutmetext">
            With a little bit of interest in many things, from Biology and Physics to Music and Languages, I try to make sure I know about a multitude of things.
          </div>
          <br />
          <div className="aboutmetext">
            Even though I've only gone a few times, skiing is one of the most exhilarating, fun sports I've ever taken part in and I cannot wait until I can afford to go myself... or with friends.
          </div>
          <br />
          <br />
          <div className="aboutmetext">
            I have a close history with esports, having attended my first event <span style={{"color": "#BBBBBB"}}>(RLCS Season 5)</span> in 2018 and regularly watching and engaging with esports for different titles <span style={{"color": "#BBBBBB"}}>(Rocket League, Overwatch, CS, Apex Legends, etc.)</span> since. I've also played Overwatch and Rocket League for my uni team, Royal Bears.
          </div>
          <br />
        </div>
        <br />
      </div>
  );
}