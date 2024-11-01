"use client";

import React, { useState } from "react";
import { cn } from "../utils/cn";

interface RevealAboutMeProps {
  containerClass?:string;
  sectionID: string;
}

function RevealAboutMe(props: RevealAboutMeProps) {
  const [rahulOpen, setRahulOpen] = useState(false);
  const [uxOpen, setUXOpen] = useState(false);
  const [andOpen, setAndOpen] = useState(false);
  const [insiderOpen, setInsiderOpen] = useState(false);
  const [marketersOpen, setMarketersOpen] = useState(false);
  const [linkedinOpen, setLinkedinOpen] = useState(false);

  const triggerRahulToggle = () => {
    setRahulOpen(!rahulOpen);
  };

  const triggerUXToggle = () => {
    setUXOpen(!uxOpen);
  };

  const triggerAndToggle = () => {
    setAndOpen(!andOpen);
  };

  const triggerInsiderToggle = () => {
    setInsiderOpen(!insiderOpen);
  };

  const triggerMarketersToggle = () => {
    setMarketersOpen(!marketersOpen);
  };

  const triggerLinkedinToggle = () => {
    setLinkedinOpen(!linkedinOpen);
  };

  return (
    <>
      <div className={cn("text-xl reveal-about-me home-text leading-extra-loose md:text-2xl", props.containerClass )} id={props.sectionID}>
        Hi, I am{" "}
        <button
          type="button"
          data-state={rahulOpen ? "open" : "closed"}
          onClick={triggerRahulToggle}
          className="inline-flex px-2 leading-snug text-black bg-white border-2 rounded-full place-items-center text-nowrap reveal-trigger"
        >
          Rahul
        </button>
        <span
          data-state={rahulOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          . I’m a Product designer
        </span>{" "}
        focusing on{" "}
        <button
          type="button"
          data-state={uxOpen ? "open" : "closed"}
          onClick={triggerUXToggle}
          className="inline-flex px-2 leading-snug text-black bg-white border-2 rounded-full place-items-center text-nowrap reveal-trigger"
        >
          User Experience
        </button>
        <span
          data-state={uxOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          , Interaction and Motion Design
        </span>{" "}
        <button
          type="button"
          data-state={andOpen ? "open" : "closed"}
          onClick={triggerAndToggle}
          className="inline-flex px-2 leading-snug text-black bg-white border-2 rounded-full place-items-center text-nowrap reveal-trigger"
        >
          and
        </button>{" "}
        <span
          data-state={andOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          I occasionally write code as well.
        </span>{" "}
        <span>I work at</span>{" "}
        <button
          type="button"
          data-state={insiderOpen ? "open" : "closed"}
          onClick={triggerInsiderToggle}
          className="inline-flex px-2 leading-snug text-black bg-white border-2 rounded-full place-items-center text-nowrap reveal-trigger"
        >
          Insider
        </button>
        <span
          data-state={insiderOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          , designing Architect.
        </span>{" "}
        An app that empowers{" "}
        <button
          type="button"
          data-state={marketersOpen ? "open" : "closed"}
          onClick={triggerMarketersToggle}
          className="inline-flex px-2 leading-snug text-black bg-white border-2 rounded-full place-items-center text-nowrap reveal-trigger"
        >
          marketers
        </button>{" "}
        <span
          data-state={marketersOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          to create fast and efficient automated marketing campaigns.
        </span>{" "}
        I live in Bengaluru, India. You can{" "}
        <button
          type="button"
          data-state={linkedinOpen ? "open" : "closed"}
          onClick={triggerLinkedinToggle}
          className="inline-flex px-2 leading-snug text-black bg-white border-2 rounded-full place-items-center text-nowrap reveal-trigger"
        >
          find me on
        </button>{" "}
        <span
          data-state={linkedinOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          <a
            className="px-4 py-2 rounded hover:bg-sky-700 "
            href="https://www.linkedin.com/in/uxdrahul/"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </>
  );
}

export default RevealAboutMe;
