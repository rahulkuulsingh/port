import React from "react";
import Image from "next/image";
import dovetail from "@/public/insider/case-assets/dovetail.png";

import { CanvasRevealEffect } from "@/app/Components/Visual/canvas-reveal-effect";
import Folder from "@/app/Components/UI/Folder/Folder";
import Video from "@/app/Components/Video";
import StickyNotes from "@/app/Components/UI/Figjam/StikcyNotes";
import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";

export default function Insider() {
  const workflow = [
    "Can’t copy and paste entire branches or multiple elements at once",
    "While creating a journey user can’t split and reconnect paths",
    "Can’t see preview of the element design",
    "Lack of clarity regarding journey editability",
    "Struggling in quickly zoom in and out to different areas to see the logic",
    "Clear indication of current location within the canvas",
    "Not be able to identify which journey does what in a snap",
  ];

  const bugs = [
    "Edit button vanishes if canvas is zoomed at 150%",
    "Frustration with losing unsaved changes",
    "Delays and crashes when working with large journeys",
    "Autosave shows wrong date and time",
    "Architect is so slow",
  ];

  const featureRequest = [
    "Applied filters should remain persistent",
    "After launching a Journey, can’t monitor it’s health visually",
    "Allowing users to compare their metrics with those of similar companies or industry standards",
    "Email alert, if something went wrong in a live campaign",
  ];

  const learnigCurve = [
    "Lack of clarity and insufficient guidance",
    "Disconnected Experience From Academy to Canvas",
    "Architect conditions are confusing, not easy to remember.",
    "Self learning is difficult",
    "Not knowing when to use what element",
  ];

  const colorVariants = {
    blue: "bg-blue-500 text-white",
    blueBorder: "border-blue-500 hover:bg-gradient-to-b from-blue-500",

    violet: "bg-violet-500  text-white",
    violetBorder: "border-violet-500 hover:bg-gradient-to-b from-violet-500",

    orange: "bg-orange-500  text-white",
    orangeBorder: "border-orange-500 hover:bg-gradient-to-b from-orange-500",

    rose: "bg-rose-500  text-white",
    roseBorder: "border-rose-500 hover:bg-gradient-to-b from-rose-500",
  };

  return (
    <>
      <CanvasRevealEffect
        containerClassName="dark:bg-black bg-sky-500"
        gradientClassName="from-indigo-500"
        animationSpeed={0.8}
        colors={[[255, 255, 255]]}
      />
      <section className="hero-section mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="">
          <h2 className="text-sm  text-purple-500 pb-8">B2B SaaS Product</h2>
          <h1 className="max-w-4xl text-balance text-3xl/9  tracking-tight  sm:text-5.5xl md:text-6xl">
            Enhancing Usability of Architect.
          </h1>
          {/* <p className="mt-4 text-3xl tracking-[-0.015em] ">Enhancing Usability of Architect.</p> */}
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Architect is a SaaS platform that empowers marketers to automate
            their omnichannel marketing campaigns.
          </p>
        </div>
        <div className="my-role isolate mt-24 grid grid-cols-1 border border-white/[.075] sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative z-10 col-start-1 row-start-1 px-6 py-8">
            <h2 className="text-balance text-xl tracking-[-0.015em] ">
              The Projects High Level Context
            </h2>
            <p className="mt-3 text-sm/5 text-gray-400">
              This software is used by Marketers, they use this software to
              automaticaly target users based on different criterias. Such as,
              Past Purchases, Product View History
            </p>
          </div>
          <ul
            role="list"
            className="relative isolate col-span-full col-start-1 flex flex-wrap sm:row-start-1"
          >
            <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075] px-6 py-8 sm:ml-[50%] sm:w-1/2 sm:border-l sm:border-t-0 lg:ml-[25%] lg:w-1/4">
              <h3 className="mt-6 text-sm font-medium ">My Role</h3>
              <p className="mb-auto mt-2 text-sm/5 text-gray-400">
                Conduct Research to identify usablity issues, then idate and
                release product solutions. Collaborate with crossfunctional
                teams to provide consistent product experince accross insider.
              </p>
              {/* <p className="mt-16 text-2xs text-gray-400">
                I worked as a Product designer, researcher, motion and
                interaction designer.
              </p> */}
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075]  px-6 py-8 sm:w-1/2 lg:w-1/4 lg:border-l lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Team Structure</h3>
              <p className="mb-auto mt-2 text-sm/5 text-gray-400">
                <span>Design Team: Cagdas, Sarper, Nour, Blzenko</span>
                <br />
                <span className="mt-4 block">
                  Product Management: Ibrahim, Cansu, Barim
                </span>
              </p>
              {/* <p className="mt-16 text-2xs text-gray-400">
                A dedicated development team of 15 devs
              </p> */}
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075]  px-6 py-8 sm:w-1/2 sm:border-l lg:w-1/4 lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Project Timeline</h3>
              <p className="mb-auto mt-2 text-sm/5 text-gray-400">
                Dec, 2021 - June, 2023
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Block Quote */}

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <blockquote className="text-xl font-light lg:text-3xl pl-8 border-l-2 ">
          <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
            Creating complex customer journeys can be time-consuming and
            frustrating for marketers.{" "}
            <span className="relative mr-4 bg-gradient-to-r from-purple-500 to-gray-50 hover:to-purple-600  bg-clip-text text-transparent before:font-bold before:absolute before:-right-2 before:-top-2 before:inline-flex before:items-center before:justify-center before:h-4 before:w-4 before:bg-purple-50 before:text-[12px] before:rounded-full before:-z-10 before:text-black before:content-['1']">
              Disjointed workflow{" "}
            </span>
            <strong className="text-orange-600">across platforms</strong> can
            further add to the challenge.
          </p>
        </blockquote>
      </section>

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-y-0"> */}
        <div className="relative">
          <header className="max-w-2xl">
            <h2 className="text-sm font-medium text-sky-300">
              How it all started?
            </h2>
            <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
              <span className="inline-block">
                Our Research team did a UMUX Survey, the results were{" "}
                <span className="relative my-underline">concering</span>.
              </span>
            </p>
            <p className="mt-4 text-base/6 text-gray-400">
              In this survey, we asked our users 3 question.
            </p>
          </header>
            <ul>
              <li>
                <p className="mt-8 text-base/6 text-gray-400">
                  Q1. The capabilities of Architect meet my requirement. (1-7)
                </p>

                <Image
                  src="../insider/case-assets/survey-q-1.svg"
                  alt="Image description"
                  width={1200}
                  height={38}
                  className="pt-4 "
                />

              </li>
              <li>
                <p className="mt-8 text-base/6 text-gray-400">
                  Q2. Architect is easy to use. (1-7){" "}
                </p>
                <Image
                  src="../insider/case-assets/survey-q-2.svg"
                  alt="Image description"
                  width={1200}
                  height={38}
                  className="pt-4 "
                />
              </li>
              <li>
                <p className="mt-4 text-base/6 text-gray-400">
                  Q3. Why do you rate Architect this way. (Text Input){" "}
                </p>
                <Image
                  src="../insider/case-assets/q-long-survey.svg"
                  alt="Image description"
                  width={600}
                  height={38}
                  className="pt-4"
                />
              </li>
            </ul>
          <div className="absolute -bottom-[20rem] right-0">
            <Image
              src="../insider/case-assets/anoted-results.svg"
              alt="Image description"
              width={520}
              height={363}
              className="pt-4"
            />
          </div>
        </div>
      </section>

      {/* Followup calls and  Research is Required */}

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <h2 className="text-sm font-medium text-sky-300">
            Results were indicating not happy users
          </h2>
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            To understand the reasons behind the low satisfaction scores and
            identify areas for improvement, we conducted user interviews.
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            I did the analysis while the research team did the followup
            interview session
          </p>
        </header>
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] mx-auto relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <Image src={dovetail} alt="Image description" loading={'lazy'}  className="pt-4" />
        <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Image 01: Low resolution image of User Interview Findings 
          </p>
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            After analysis, four types of pain points surfaced.
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            The Software does not fit properly in the workflow, it is hard to
            learn, it crashes and freezes, when compared to other tools lacks
            certain features.
          </p>
        </header>
      </section>
      <div className="mt-12 grid grid-flow-col grid-cols-1 grid-rows-6 gap-2 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 relative pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <Folder
          folderName="Work Flow"
          listItems={workflow}
          bgColor={colorVariants.rose}
          strokeColor={colorVariants.roseBorder}
          containerClassName="row-span-2 order-first isolate"
        />
        <Folder
          folderName="High Learning Curve"
          listItems={learnigCurve}
          bgColor={colorVariants.orange}
          strokeColor={colorVariants.orangeBorder}
          containerClassName="isolate order-second xl:order-none"
        />
        <Folder
          folderName="Feature Requests"
          listItems={featureRequest}
          bgColor={colorVariants.violet}
          strokeColor={colorVariants.violetBorder}
        />
        <Folder
          folderName="Unexpected Behaviour - Bugs"
          listItems={bugs}
          bgColor={colorVariants.blue}
          strokeColor={colorVariants.blueBorder}
          containerClassName="row-span-2"
        />
      </div>

      {/* Sectyion abnout solutions */}

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]"></section>

      {/* Block Quote */}

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <blockquote className="text-xl font-light lg:text-3xl pl-8 border-l-2 ">
          <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
            Research analysis reveals that users encounter{" "}
            <strong className="text-sky-300 underline underline-offset-4">
              interaction challenges
            </strong>
            , resulting in a{" "}
            <strong className="text-yellow-300 underline underline-offset-4">
              lack of flexibility{" "}
            </strong>
            within the{" "}
            <strong className="text-orange-500 underline underline-offset-4">
              workflow.
            </strong>
          </p>
        </blockquote>

        <p className="mt-4 max-w-md text-base/6 text-gray-500">
          I focused on solving the &#34;Low Effort&#34; and &#34;High Gains&#34; problem first,
          which can be adapted to future use cases.
        </p>

        <div className="inline-flex flex-wrap  mt-8 pt-8  relative">
          {workflow.map((item, index) => (
            <StickyNotes
              key={index}
              content={item}
              stickyColor="rose"
              containerClassName="text-sm hover:bg-rose-500"
              authorName="Workflow Issue"
            />
          ))}
        </div>
      </section>

      {/* How Might We Section */}
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <blockquote className="text-xl font-light lg:text-3xl pl-8 border-l-2 ">
          <p className=" pb-4 text-sm font-medium ">
            <strong className="text-sky-300">Workflow Problem No.1:</strong>{" "}
            Users struggle to preview element design, such as email or webpush
          </p>
          <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
            How might we streamline multi-element preview, minimizing clicks for
            user efficiency?{" "}
          </p>
        </blockquote>
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            1. Introducing New and{" "}
            <span className="bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text text-transparent">
              “Faster Previews”
            </span>
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Users can’t see preview of elements, for example, to see an email
            design, they have to double click the email element, element config
            page loads with the design, imagine doing this for all the elements
            on the journey.
          </p>
        </header>

        <div className="mx-auto grid max-w-screen-2xl gap-4 mt-8 pb-4 md:grid-cols-6 ">
          <div className="col-span-3 relative">
          {/* <Image
              src="../insider/case-assets/arrow-preview.svg"
              alt="Image description"
              width={232}
              height={56}
              className="absolute -top-16 right-16   z-10"
            /> */}
            <div className="video-container bg-gray-600 fit-content overflow-clip col-span-3 rounded-lg">

              <Video
                src="../insider/videos/PrototypePreviewOld.webm"
                height={1080}
                width={1920}
              />
            </div>
            <p className="mt-4 mb-4">
              <strong className="text-orange-500">Old Preview Flow,</strong>{" "}
              this method is slow, tedious and time consuming.
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-2 text-gray-400">
                The user first identifies which element they want to see the
                preview of.
              </li>
              <li className="mb-2 text-gray-400 ">
                Then they need to click on the element.
              </li>
              <li className="mb-2 text-gray-400 ">
                Wait for the page to load.
              </li>
              <li className="mb-2 text-gray-400 ">
                The config page loads with the content load first.
              </li>
              <li className="mb-2 text-gray-400 ">
                Then the once the content is loaded, Image Preview will load.
              </li>
            </ol>
          </div>
          <div className="col-span-3">
            <div className="video-container bg-gray-600 fit-content overflow-clip col-span-3 rounded-lg">
              <Video
                src="../insider/videos/PrototypePreviewNew.webm"
                height={1080}
                width={1920}
              />
            </div>
            <p className="mt-4 mb-4">
              <strong className="text-sky-500">New Preview Flow, </strong>{" "}
              Faster, and provides better context.
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-2 text-gray-400">
                The user finds the Preview Button
              </li>
              <li className="mb-2 text-gray-400 ">
                Clicks on Preview to activate it
              </li>
              <li className="mb-2 text-gray-400 ">
                All eligible Channels with previews load optimized images.
              </li>
            </ol>
          </div>
        </div>
        {/* add 2 columns layout for the videos here. Video will have a captions as well */}
      </section>

      {/* Mini Map Section */}

      <HowMightWeSection
        quoteText="How might we improve navigation within the canvas for users who rely on trackpad/mouse, especially when designing large journeys."
        problemStatement="Users struggle to navigate large journeys within the canvas using trackpad/mouse, requiring excessive zooming and dragging"
        problemCount={2}
        highlightedText={[
          "improve navigation within",
          "rely on",
          "trackpad/mouse",
          "large journeys",
        ]}
        highlightedColors={["lime", "purple", "", "cyan"]}
      />

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            2. Introducing{" "}
            <span className="bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text text-transparent">
            &#8220;Mini Map&#8221;{" "}
            </span>
            and Better
            <span className="bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text text-transparent">
              {" "}
              &#8220;Contextual Zoom Functionality&#8221;
            </span>
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Multiple users complained about navigation issues, They mainly use
            Trackpad or Mouse to navigate within the canvas.
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            When designing large journeys, their is no easier interaction using
            the mouse or trackpad. User have to zoom out and drag the canvas and
            zoom again.
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Our canvas always zoomed from the center of the viewport, that means
            even if the user has dragged to the correct position, zooming in
            will feel weird
          </p>
        </header>

        <div className="mx-auto grid max-w-screen-2xl gap-4 mt-8 pb-4 md:grid-cols-6 ">
          <div className="col-span-3">
            <div className="video-container bg-gray-600 fit-content overflow-clip col-span-3 rounded-lg">
              <Video
                src="../insider/videos/PrototypePreviewOld.webm"
                height={1080}
                width={1920}
              />
            </div>
            <p className="mt-4 mb-4">
              <strong className="text-orange-500">
                Old Navigation Interaction,
              </strong>{" "}
              , which
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-2 text-gray-400">
                Canvas always zoomed from the center
              </li>
              <li className="mb-2 text-gray-400 ">
                This behavious of zoom, conficted with users mental model.
              </li>
            </ol>
          </div>
          <div className="col-span-3">
            <div className="video-container bg-gray-600 fit-content overflow-clip col-span-3 rounded-lg">
              <Video
                src="../insider/videos/PrototypePreviewNew.webm"
                height={1080}
                width={1920}
              />
            </div>
            <p className="mt-4 mb-4">
              <strong className="text-sky-500">
                New Navigation Interaction with Minimap,{" "}
              </strong>{" "}
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-2 text-gray-400">
                Now users can Pinch to zoom, Supports native trackpad
                functionalities
              </li>
              <li className="mb-2 text-gray-400 ">
                The can use the mini map to quikly move position
              </li>
              <li className="mb-2 text-gray-400 ">
                Zoom function uses, mouse location to zoom from that point.
              </li>
            </ol>
          </div>
        </div>
        {/* add 2 columns layout for the videos here. Video will have a captions as well */}
      </section>

      {/* Copy / Split and Paste Multiple Branches */}

      <HowMightWeSection
        quoteText="How might we enable users to perform bulk actions on elements like copying, pasting, deleting, and rearranging effortlessly."
        problemStatement="Users struggle to efficiently manage multiple elements within the canvas. This limits their ability to perform bulk actions."
        problemCount={3}
      />

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <h2 className="text-sm font-medium bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text text-transparent">
            How might we help users reuse an existing Group or Single Elements
          </h2>
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            3. Users often wanted to copy existing elements, Move multiple of
            them at once{" "}
            <span className="bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text text-transparent">
            &#8220;But our software lacked this ability&#8221;{" "}
            </span>
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            This was The biggest challenge of this task.
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Enabling users to select multiple elements at once opens up numerous
            new possibilities.
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Bulk action like copy and paste would become much easier, deleting
            multiple elements would also be possible. Moving multiple elements
            to new locations would be so simpler.
          </p>
        </header>

        <div className="mx-auto grid max-w-screen-2xl gap-4 mt-8 pb-4 md:grid-cols-6 ">
          <div className="col-span-3">
            <div className="video-container bg-gray-600 fit-content overflow-clip col-span-3 rounded-lg">
              <Video
                src="../insider/videos/PrototypePreviewOld.webm"
                height={1080}
                width={1920}
              />
            </div>
            <p className="mt-4 mb-4">
              <strong className="text-orange-500">
                Old Navigation Interaction,
              </strong>{" "}
              , which
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-2 text-gray-400">
                Canvas always zoomed from the center
              </li>
              <li className="mb-2 text-gray-400 ">
                This behavious of zoom, conficted with users mental model.
              </li>
            </ol>
          </div>
          <div className="col-span-3">
            <div className="video-container bg-gray-600 fit-content overflow-clip col-span-3 rounded-lg">
              <Video
                src="../insider/videos/PrototypePreviewNew.webm"
                height={1080}
                width={1920}
              />
            </div>
            <p className="mt-4 mb-4">
              <strong className="text-sky-500">
                New Navigation Interaction with Minimap,{" "}
              </strong>{" "}
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-2 text-gray-400">
                Now users can Pinch to zoom, Supports native trackpad
                functionalities
              </li>
              <li className="mb-2 text-gray-400 ">
                The can use the mini map to quikly move position
              </li>
              <li className="mb-2 text-gray-400 ">
                Zoom function uses, mouse location to zoom from that point.
              </li>
            </ol>
          </div>
        </div>
        {/* add 2 columns layout for the videos here. Video will have a captions as well */}
      </section>

      {/* section for canvas Flexibility */}

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <h2 className="text-sm font-medium text-sky-300">
            How might we enhance users awareness of their current location
            within the canvas for improved navigation{" "}
          </h2>
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            2. Let’s redesign canvas for{" "}
            <span className="bg-gradient-to-r from-sky-500 to-gray-50 bg-clip-text text-transparent">
            &#8220;Flexibility&#8221;
            </span>
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            Users complain about &#8220;Feature Parity Gap&#8221; like the ability to copy,
            paste, merge, zoom in or out etc. They face high learning curve,
            Lack of clarity and insufficient guidance at the end of the day they
            feel confused.
          </p>
        </header>
      </section>
      {/* grid layout edge-to-edge */}
      <div className="mx-auto grid max-w-screen-2xl gap-4 mt-8 pb-4 md:grid-cols-6 ">
        <div className="video-container bg-gray-600 fit-content overflow-clip col-span-6 rounded-lg">
          <Video
            src="../insider/videos/Prototype-Drag-Academy.webm"
            height={1080}
            width={1920}
          />
        </div>
        <div className="video-container bg-gray-600 h-96 col-span-2 rounded-lg">
          Something
        </div>
        <div className="video-container bg-gray-600 h-96 col-span-2 rounded-lg">
          Something
        </div>
        <div className="video-container bg-gray-600 h-96 col-span-2 rounded-lg">
          Something
        </div>
      </div>

      {/* High Learning Curve */}

      <HowMightWeSection
        quoteText="During Research, we wanted to know what resources our partners use to learn architect, Do they find it easy to learn?"
        problemStatement="Users struggle to quickly remeber which Starter Element does what, A Learning Issue. "
        problemCount={2}
        highlightedText={[
          "what resources",
          "easy to learn",
          "trackpad/mouse",
          "large journeys",
        ]}
        highlightedColors={["lime", "", "", "cyan"]}
      />

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
      <p className="mt-4 text-balance max-w-md text-xl tracking-[-0.015em] ">
            We got the answers, They Feel Confused, They try learning on their own, but fail to do so.
          </p>

        <p className="mt-4 max-w-md text-base/6 text-gray-500">
          The general response was towards negative side, Partner felt confused,
          they often visited the academy and but it was not helpful to them,
          some times they had to contact support to find what they are looking
          for.
        </p>
        <div className="inline-flex flex-wrap  mt-8 pt-8  relative">
          {learnigCurve.map((item, index) => (
            <StickyNotes
              key={index}
              content={item}
              containerClassName="text-sm hover:bg-rose-500"
              authorName="Learning Curve"
            />
          ))}
        </div>
      </section>

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
        <header className="max-w-3xl">
          <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
            How might we reduce the learning curve?
          </p>
          <p className="mt-4 max-w-md text-base/6 text-gray-500">
            In order to answer this question, we must ask a few more questions.
          </p>
        </header>
        <div className="inline-flex flex-wrap  mt-4 relative">
          <StickyNotes
            content="How do we train our users? Videos, Artciles, Podcasts? How ???"
            authorName="rahul"
          />
          <StickyNotes
            content="If, Yes. How Frequently?"
            authorName="rahul"
            stickyColor="green"
          />
          <StickyNotes
            content="In general, partners complain about which product area, is it the starters? or conditions or ?"
            authorName="rahul"
          />
          <StickyNotes
            content="Do we have enough examples? Can they follow along easily while reading academy articles"
            authorName="rahul"
          />
          <StickyNotes
            content="What product areas require industry knowledge?"
            authorName="rahul"
          />
        </div>
      </section>
    </>
  );
}
