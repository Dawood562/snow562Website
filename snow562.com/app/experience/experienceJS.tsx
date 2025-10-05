"use client";
import { useEffect, useRef, useState } from "react";
import experienceData from "../data/experience.json";
import styles from "./experience.module.css";

export default function ExperienceJS() {
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
    <div id="root">
        <div id="title">My Experience</div>
        <div id={styles.timeline}>
        {experienceData.map((item, index) => (
            <div key={index} className={styles.event}>
            <img className={styles.companyimage} src={item.imageurl} alt={`Logo for ${item.company}`} />
              {item.work.map((workItem, workIndex) => (
            <div key={workIndex}>
              <div className={styles.details}>
                {workIndex === 0 && (
                  <>
                    <div className={styles.company}>{item.company}</div>
                    {item.location && <> {item.location}</>}
                  </>
                )}
                <div className={styles.position}>“{workItem.position}”</div>
                <div className={styles.date}>{workItem.date}</div>
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: workItem.description }}
              />
              {workIndex < item.work.length - 1 && <br />}
            </div>
          ))}
        </div>
        ))}
      </div>

        {/* Down arrow */}
        <img
          ref={arrowRef} id={styles.downArrow} onClick={goDown} src="https://assets.snow562.com/images/arrow-down.png" alt="Downward Pointing Arrow"
          style={{ cursor: "pointer", visibility: visible ? "visible" : "hidden", }} />
      </div>
  );
}