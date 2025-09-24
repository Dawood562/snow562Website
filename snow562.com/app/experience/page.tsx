"use client";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import "./experience.css";

export default function Experience() {
  const arrowRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Run once on mount
  useEffect(() => {
    let lastScrollTop = 0;

    function checkScrollable() {
      if (window.innerHeight < document.body.scrollHeight) {
        setVisible(true);
      }
    }

    function handleScroll() {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setVisible(false); // hide when scrolling down
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }

    checkScrollable();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goDown() {
    window.scroll({
      top: (3 * window.innerHeight) / 4,
      behavior: "smooth",
    });

    const currentPos = window.innerHeight + window.scrollY;
    if (document.body.scrollHeight - currentPos < 1) {
      setVisible(false);
    }
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.snow562.com/css/experience.css"
        />
      </Head>

      <div id="root">
        <div id="title">My Experience</div>
        <div id="timeline">
          <div className="event">
            <img
              className="company-image"
              src="https://assets.snow562.com/images/logos/gamesoc_white.png"
              alt="RHUL Games Society Logo"
            />
            <div className="details">
              <div className="company">RHUL Gamesoc</div> @ Royal Holloway,
              University of London
              <div className="position">Secretary</div>
              <div className="date">January 2025 - September 2025</div>
            </div>
            <div className="description">
              If something needs doing, I do it. I help to manage our many
              sub-communities, record meeting minutes, ensuring emails are
              actioned upon promptly, supervising committee attendance and
              availability for events and meetings, and ensuring that our events
              are SU-compliant.
            </div>
          </div>
          <div className="event">
            <img className="company-image" src="https://assets.snow562.com/images/logos/rhul.png" alt="Royal Holloway, University of London Logo" />
            <div className="details">
                <div className="company">Royal Holloway</div>
                <div className="position">Frontline Clearing Call Centre Operator</div>
                <div className="date">August 2024</div>
            </div>
            <div className="description">First line telephone support on A-Level Results-Day; triaging calls, minimising call queue times by resolving general queries and concerns.</div>
        </div>

        <div className="event">
            <img className="company-image" src="https://assets.snow562.com/images/logos/royal bears.png" alt="RHUL Esports Logo" />
            <div className="details">
                <div className="company">RHUL Esports</div> @ Royal Holloway, University of London
                <div className="position">Esports Events Secretary</div>
                <div className="date">September 2024 - December 2024</div>
            </div>
            <div className="description">My role as the Esports Events Secretary requires me to organise and run all Esports-related events undertaken by the group, whilst ensuring they are accessible and inclusive This applies to both external and internal events, such as tournaments, and I aid with the promotion of said events.</div>
            <br />
            <div className="details role-switch">
                <div className="position">Esports Secretary</div>
                <div className="date">September 2023 - June 2024</div>
            </div>
            <div className="description">As the Esports Secretary, I am the primary form of correspondence for Esports at Royal Holloway. It is necessary that I keep inventory of players and equipment, oversee and help with the management of RHUL Esports teams, and assist in the organisation and hosting of friendly tournaments within the university alongside the Esports Social and Events Secretary.<br />This is in addition to assisting the overall work of the Games' Society.</div>
        </div>

          <div className="event">
            <img className="company-image" src="https://assets.snow562.com/images/logos/rshp.jpg" alt="RSHP Logo" />
          <div className="details">
            <div className="company">RSHP</div> in London
            <div className="position">Accounts Assistant</div>
            <div className="date">June 2023 - September 2023</div>
            </div>
        <div className="description with-list">My main responsibilities included: <ul> <li>Maintaining exchange rates using Deltek project software</li> <li>Creating new projects and ensuring the information remained up-to-date</li> <li>Analysed projects and categorized them for streamlined organisation</li> <li>Developed a bespoke report in Deltek for management to identify fees/sqm</li> <li>Development of business relations with partners</li> <li>Preparing audit schedules and responding to audit queries</li> <li>Raising and issuing sales invoices and credit notes</li> </ul> </div> </div>
        </div>

        {/* Down arrow */}
        <img
          ref={arrowRef}
          id="downArrow"
          onClick={goDown}
          src="https://assets.snow562.com/images/arrow-down.png"
          alt="Downward Pointing Arrow"
          style={{
            cursor: "pointer",
            visibility: visible ? "visible" : "hidden",
          }}
        />
      </div>
    </>
  );
}
