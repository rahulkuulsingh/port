
"use client";


import React, { useState } from "react";

function RevealAboutMe() {
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
      <div className="reveal-about-me home-text text-xl  md:text-2xl mt-16 mb-32 pt-16	">
        Hi, I am{" "}
        <button
          type="button"
          data-state={rahulOpen ? "open" : "closed"}
          onClick={triggerRahulToggle}
          className="px-2 rounded-full border-2 inline-flex place-items-center leading-snug py-1 bg-white text-black text-nowrap reveal-trigger"
        >
          Rahul
        </button>
        
        <span
          data-state={rahulOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          .{" "}I’m a Product designer
        </span>{" "}
        focusing on{" "}
        <button
          type="button"
          data-state={uxOpen ? "open" : "closed"}
          onClick={triggerUXToggle}
          className="px-2 rounded-full border-2 inline-flex place-items-center leading-snug py-1 bg-white text-black text-nowrap reveal-trigger"
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
          className="px-2 rounded-full border-2 inline-flex place-items-center leading-snug py-1 bg-white text-black text-nowrap reveal-trigger"
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
          className="px-2 rounded-full border-2 inline-flex place-items-center leading-snug py-1 bg-white text-black text-nowrap reveal-trigger"
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
          className="px-2 rounded-full border-2 inline-flex place-items-center leading-snug py-1 bg-white text-black text-nowrap reveal-trigger"
        >
          marketers
        </button>{" "}
        <span
          data-state={marketersOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          to create fast and efficient automated marketing campaigns. 
        </span>{" "}
          I live in
          Bengaluru, India. You can{" "}
        <button
          type="button"
          data-state={linkedinOpen ? "open" : "closed"}
          onClick={triggerLinkedinToggle}
          className="px-2 rounded-full border-2 inline-flex place-items-center leading-snug py-1 bg-white text-black text-nowrap reveal-trigger"
        >
          find me on
        </button>{" "}
        <span
          data-state={linkedinOpen ? "open" : "closed"}
          className={`reveal-content`}
        >
          <a className="hover:bg-sky-700 px-4 py-2 rounded " href="https://www.linkedin.com/in/uxdrahul/">LinkedIn</a>
        </span>
      </div>
    </>
  );
}

export default RevealAboutMe;




