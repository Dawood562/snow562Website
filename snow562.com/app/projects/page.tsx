import Link from "next/link";
import Head from "next/head";
import type { Metadata } from "next";
import "./projects.css";

export const metadata: Metadata = {
  title: "Dawood Ahmad | Projects",
  description: "Hiiiii",
};

export default function ProjectsPage() {
  return (
    <>
        <Head>
            <link rel="stylesheet" href="https://assets.snow562.com/css/projects.css" />
        </Head>

        
        <div id="root">
        <div id="title">My Projects</div>
        <br />
        <div className="projects">
          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/logos/discord.png" />
            <div className="details">
              <div className="name">Discord Bot</div> <div className="status complete"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/complete.png" /></div>Complete</div>
            </div>
            <div className="description">I have made multiple bots for chat application "Discord" over the years.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/logos/bakkesmod.png" />
            <div className="details">
              <div className="name">BakkesMod Plugin</div> <div className="status in-dev"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/indev.png" /></div>In Development</div>
            </div>
            <div className="description">A plugin for video game "Rocket League" that allows Twitch streamers to share their current car loadout with their viewers.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/logos/snowflake.svg" />
            <div className="details">
              <div className="name">Personal Website</div> <div className="status in-dev"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/indev.png" /></div>In Development</div>
            </div>
            <div className="description">This website that you're currently looking at is always a work-in-progress.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/logos/msteams.png" />
            <div className="details">
              <div className="name">Microsoft Teams Chatbot</div> <div className="status in-dev"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/indev.png" /></div>In Development</div>
            </div>
            <div className="description">A chatbot that facilitates integration with security services, streamlining operations.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/projects/oaxaca.png" />
            <div className="details">
              <div className="name">Oaxaca (Group Project)</div> <div className="status archived"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/archived.png" /></div>Archived</div>
            </div>
            <div className="description">A web-based restaurant operational management system.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/projects/dyno.png" />
            <div className="details">
              <div className="name">Dyno Food Wizard</div> <div className="status archived"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/archived.png" /></div>Archived</div>
            </div>
            <div className="description">A website from a hackathon that allowed the user to upload an image of their food and returned nutritional information.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/projects/shoefighter.png" />
            <div className="details">
              <div className="name">Shoe Fighter (Group Project)</div> <div className="status archived"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/archived.png" /></div>Archived</div>
            </div>
            <div className="description">A 2D local PvP fighting game, where players fight against each other as types of shoes.</div>
          </div>

          <div className="project">
            <img className="project-image" src="https://assets.snow562.com/images/unknown.png" />
            <div className="details">
              <div className="name">Train Exit Database</div> <div className="status idea"> <div className="status-emoji"><img src="https://assets.snow562.com/images/emoji/idea.png" /></div>Idea</div>
            </div>
            <div className="description">A website that allows users to enter journey details to see the best location at which to disembark the train (i.e. closest to the station exit).</div>
          </div>
        </div>
    </div>
    </>
  );
}