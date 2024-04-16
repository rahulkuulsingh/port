"use client";
import React, { useState } from "react";

const Example = () => {
  const [pedroOpen, setPedroOpen] = useState(false);
  const [raycastOpen, setRaycastOpen] = useState(false);
  const [barcelonaOpen, setBarcelonaOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const togglePedro = () => {
    setPedroOpen(!pedroOpen);
  };

  const toggleRaycast = () => {
    setRaycastOpen(!raycastOpen);
  };

  const toggleBarcelona = () => {
    setBarcelonaOpen(!barcelonaOpen);
  };

  const toggleSocial = () => {
    setSocialOpen(!socialOpen);
  };

  return (
    <div className="rt-ContainerInner">
      <span data-state="closed" className="rt-Text home-text rt-r-size-7 sm:rt-r-size-8 md:rt-r-size-8">
        Yo! I'm{" "}
        <span data-state="closed">
          <button
            type="button"
            data-state="closed"
            className="reveal-trigger"
            onClick={togglePedro}
          >
            Pedro
          </button>
          <span
            data-state={`${pedroOpen ? "open" : "closed"}`}
            className={`reveal-content ${pedroOpen ? "open" : ""}`}
          >
            Duarte. I'm not sure how to intro myself{" "}
            <span data-state="closed">
              <button
                type="button"
                className="reveal-trigger"
                onClick={togglePedro}
              >
                anymore
              </button>
              <span data-state="closed" className={`reveal-content ${pedroOpen ? "open" : ""}`}>
                . My background is in UI development, but I love everything
                related to{" "}
                <span data-state="closed">
                  <button
                    type="button"
                    className="reveal-trigger"
                    onClick={togglePedro}
                  >
                    product
                  </button>
                  <span data-state={`${pedroOpen ? "open" : "closed"}`} className={`reveal-content ${pedroOpen ? "open" : ""}`}>
                    . In the last five years I discovered my niche: helping
                    early-stage tech startups flourish.
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      {/* Similar structure for other sections */}
      <span data-state="closed" className="rt-Text home-text rt-r-size-7 sm:rt-r-size-8 md:rt-r-size-8">
        I work at{" "}
        <span data-state="closed">
          <button
            type="button"
            className="reveal-trigger"
            onClick={toggleRaycast}
          >
            Raycast
          </button>
          <span data-state={`${raycastOpen ? "open" : "closed"}`} className={`reveal-content ${raycastOpen ? "open" : ""}`}>
            . It's{" "}
            <a
              href="https://raycast.com"
              target="_blank"
              rel="noopener"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              an app
            </a>{" "}
            that you didn't think you{" "}
            <span data-state="closed">
              <button
                type="button"
                className="reveal-trigger"
                onClick={toggleRaycast}
              >
                needed
              </button>
              <span data-state="closed" className={`reveal-content ${raycastOpen ? "open" : ""}`}>
                , but once you try it, you can't live without it.
              </span>
            </span>
            I wear many different{" "}
            <span data-state="closed">
              <button
                type="button"
                className="reveal-trigger"
                onClick={toggleRaycast}
              >
                hats
              </button>
              <span data-state="closed" className={`reveal-content ${raycastOpen ? "open" : ""}`}>
                . But my main focus is growing the{" "}
                <span data-state="closed">
                  <button
                    type="button"
                    className="reveal-trigger"
                    onClick={toggleRaycast}
                  >
                    product
                  </button>
                  <span
                    className={`reveal-content ${raycastOpen ? "open" : ""}`}
                  >
                    through{" "}
                    <button className="rt-reset home-video-button">
                      <span
                        style={{
                          fontFamily: "var(--font-editorial-new)",
                          fontStyle: "italic",
                        }}
                      >
                        content creation
                      </span>
                    </button>
                    , brand awareness, community building, and partnerships.
                  </span>
                </span>
              </span>
            </span>
            Before that, I did basically the same thing for{" "}
            <span data-state="closed">
              <button
                type="button"
                className="reveal-trigger"
                onClick={toggleRaycast}
              >
                Rainbow
              </button>
              <span data-state="closed" className={`reveal-content ${raycastOpen ? "open" : ""}`}>
                , specifically for{" "}
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://rainbowkit.com"
                  className="rt-Text rt-reset rt-Link home-link rt-underline-always"
                >
                  RainbowKit
                </a>
                , a fun way to connect a web3 wallet,
              </span>
            </span>{" "}
            and{" "}
            <span data-state="closed">
              <button
                type="button"
                className="reveal-trigger"
                onClick={toggleRaycast}
              >
                Modulz
              </button>
              <span data-state="closed" className={`reveal-content ${raycastOpen ? "open" : ""}`}>
                . Modulz is where it all started. There I co-created{" "}
                <span data-state="closed">
                  <button
                    type="button"
                    className="reveal-trigger"
                    onClick={toggleRaycast}
                  >
                    Radix
                  </button>
                  <span
                    className={`reveal-content ${raycastOpen ? "open" : ""}`}
                  >
                    , a set of building blocks for your design system, with over
                    20M monthly downloads,
                  </span>
                </span>{" "}
                and{" "}
                <span data-state="closed">
                  <button
                    type="button"
                    className="reveal-trigger"
                    onClick={toggleRaycast}
                  >
                    Stitches
                  </button>
                  <span
                    className={`reveal-content ${raycastOpen ? "open" : ""}`}
                  >
                    , a CSS-in-JS library with an API that has inspired many
                    others.
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
      {/* Additional sections */}
      <span data-state="closed" className="rt-Text home-text rt-r-size-7 sm:rt-r-size-8 md:rt-r-size-8">
        I live in{" "}
        <span data-state="closed">
          <button
            type="button"
            className="reveal-trigger"
            onClick={toggleBarcelona}
          >
            Barcelona
          </button>
          <span data-state="closed" className={`reveal-content ${barcelonaOpen ? "open" : ""}`}>
            {" "}
            with my family, but I was born in{" "}
            <span data-state="closed">
              <button
                type="button"
                className="reveal-trigger"
                onClick={toggleBarcelona}
              >
                São Paulo
              </button>
              <span data-state="closed" className={`reveal-content ${barcelonaOpen ? "open" : ""}`}>
                . I moved to{" "}
                <span data-state="closed">
                  <button
                    type="button"
                    className="reveal-trigger"
                    onClick={toggleBarcelona}
                  >
                    Norwich
                  </button>
                  <span
                    className={`reveal-content ${barcelonaOpen ? "open" : ""}`}
                  >
                    (a fine city)
                  </span>
                </span>{" "}
                when I was thirteen and then spent most of my life in London.
              </span>
            </span>
          </span>
        </span>
      </span>
      {/* Social links section */}
      <span data-state="closed" className="rt-Text home-text rt-r-size-7 sm:rt-r-size-8 md:rt-r-size-8">
        You can find me on{" "}
        <span data-state="closed">
          <button
            type="button"
            className="reveal-trigger"
            onClick={toggleSocial}
          >
            𝕏
          </button>
          <span data-state="closed" className={`reveal-content ${socialOpen ? "open" : ""}`}>
            {" "}
            my username is{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://ped.ro/twitter"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              @peduarte
            </a>
            . I'm also on{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://ped.ro/github"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              GitHub
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://ped.ro/linkedin"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://ped.ro/instagram"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              Instagram
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://bsky.app/profile/ped.bsky.social"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              Bluesky
            </a>
            , and{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://www.strava.com/athletes/3786347"
              className="rt-Text rt-reset rt-Link home-link rt-underline-always"
            >
              Strava
            </a>
            .
          </span>
        </span>
      </span>
    </div>
  );
};

export default Example;
