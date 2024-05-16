// "use client";

import React from "react";
import Image from "next/image";

import { CanvasRevealEffect } from "@/app/Components/UI/CosmeticComponents/Backgrounds/canvas-reveal-effect";
import Folder from "@/app/Components/UI/Folder/Folder";
import Video from "@/app/Components/Video";
import StickyNotes from "@/app/Components/UI/Figjam/StikcyNotes";
import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";

// Static Images
import dovetail from "@/public/insider/case-assets/dovetail.png";
import previewComponent from "@/public/insider/case-assets/preview-component.png";
import DovetailCard from "@/app/Components/UI/Dovetail/dovetailCard";
import MasonryLayout from "@/app/Components/UI/MasonryLayout/MasonryLayout";
import DotGridBG from "@/app/Components/UI/CosmeticComponents/Backgrounds/DotGridBG";
import TableOfContents from "@/app/Components/navigation/ContentStickyNav/TableOfContents";
import SectionTitle from "@/app/Components/SectionTitle";
import SectionMultiSelect from "@/app/Components/Parts/Insider/SectionMultiSelect";
import IntroductionGrid from "@/app/Components/IntroductionGrid";
import solutionTrashed from "@/public/insider/case-assets/solutionTrashed.png";
import solutionTrashed2 from "@/public/insider/case-assets/solutionTrashed2.png";

export default function Insider() {
  const tocItems = [
    { id: "Introduction", title: "Introduction" },
    { id: "Research", title: "Research Phase" },
    { id: "Identified-Problems", title: "Identified Problems" },
    { id: "section3", title: "Problem Analysis and Solutions" },
    { id: "section3", title: "Implementation and Results" },
    { id: "section3", title: "Conclusion" },
  ];

  const workflow = [
    "Can't copy and paste entire branches or multiple elements at once.",
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

      <IntroductionGrid
        title={"Enhancing Usability of Architect."}
        subTitle={"B2B SaaS Product"}
        subTitleColor={"blue"}
        description={
          "Architect is a SaaS platform that empowers marketers to automate their omnichannel marketing campaigns."
        }
        roleContent={[
          "The project aims to improve user satisfaction by addressing key pain points like workflow issues and high learning curves, enhancing usability.",
          "Conduct research to identify usability issues, then iterate and release product solutions. Collaborate with cross-functional teams to provide a consistent product experience across Insider.",
        ]}
        teamContent={["Cagdas", "Sarper", "Nour", "Blzenko"]}
        timeline={"Dec, 2021 - June, 2023"}
      />

      <div className="relative max-w-[80rem] mx-auto mt-16 pt-16">
        <HowMightWeSection
          quoteText="Creating complex marketing customer journeys can be time-consuming and frustrating for marketers. Disjointed workflow across platforms can further add to the challenge."
          highlightedText={[
            "customer journeys",
            "Disjointed workflow",
            "across platforms",
          ]}
          highlightedColors={["purple", "orange", "red"]}
          containerClass="my-8"
        />
      </div>
      <div className="box-border flex flex-col flex-no-wrap">
        <TableOfContents items={tocItems} />
        <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[54rem]">
          <div className="relative">
            <SectionTitle
              sectionID="survey"
              title="Research team @Insider conducted a UMUX Survey, and the results were concerning."
              subtitle="How it all started?"
            />
            <p className="mt-4 text-gray-400 text-base/6">
              In this survey, we asked our users 3 questions.
            </p>

            <ul className="">
              <li>
                <p className="mt-8 text-gray-400 text-base/6">
                  Q1. The capabilities of Architect meet my requirements?
                  &#40;1-7&#41;
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
                <p className="mt-8 text-gray-400 text-base/6">
                  Q2. Is the Architect easy to use? &#40;1-7&#41;
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
                <p className="mt-4 text-gray-400 text-base/6">
                  Q3. Why did you rate Architect this way? &#40;Text Input&#41;
                </p>

                {/* Rahul - Change the design here. later */}
                <Image
                  src="../insider/case-assets/q-long-survey.svg"
                  alt="Image description"
                  width={300}
                  height={38}
                  className="pt-4"
                />
              </li>
            </ul>
            <div className="absolute -bottom-[20rem] right-0">
              <Image
                src="../insider/case-assets/anoted-results.svg"
                alt="Image description"
                width={360}
                height={363}
                className="pt-4"
              />
            </div>
          </div>
        </section>

        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="The survey results indicated unhappy users."
            title="To understand the reasons behind the low satisfaction scores and identify areas for improvement, we conducted user interviews."
            // Rahul add a better paragraph here
            // customCode={
            //   <p className="max-w-md mt-4 text-gray-500 text-base/6">
            //     I did the analysis while the research team did the followup
            //     interview session
            //   </p>
            // }
          />
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] mx-auto relative sm:max-w-[40rem] w-full">
          {/* Rahul Add a better way to represennt the User Interviews here  */}
          <Image
            src={dovetail}
            alt="Image description"
            height={410}
            width={1200}
            loading={"lazy"}
            className="pt-4"
          />
          <p className="max-w-md mt-4 text-gray-500 text-base/6">
            Image 01&#58; Low-resolution image of User Interview Findings
          </p>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            // subtitle=""
            // title="After analysis, four types of pain points emerged."
            title="The software does not integrate well into the workflow, it is difficult to learn, it crashes and freezes, and it lacks certain features compared to other tools."
            customCode={
              <p className="max-w-md mt-4 text-gray-500 text-base/6">
                Below is a compilation of all the problems and issues we
                discovered during the research, mainly four kinds of problems,
                with workflow being the most important to fix.
              </p>
            }
          />
        </section>
        <div className="mt-12 grid grid-flow-col grid-cols-1 grid-rows-6 gap-2 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 relative pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
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

        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full"></section>

        <div className="relative">
          <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
            <HowMightWeSection
              quoteText="Research analysis reveals that users encounter interaction challenges, resulting in a lack of flexibility within the workflow."
              problemCount={2}
              highlightedText={[
                "interaction challenges",
                "lack of flexibility",
                "workflow",
              ]}
              highlightedColors={["lime", "orange", "gray"]}
              containerClass="mb-16"
            />

            <div className="relative inline-flex flex-wrap pt-8 mb-8">
              {workflow.map((item, index) => (
                <StickyNotes
                  key={index}
                  content={item}
                  containerClassName="text-sm hover:bg-rose-500"
                  authorName="Workflow Issue"
                />
              ))}
            </div>

            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              Solving workflow issues is top priority due to their direct impact
              on user efficiency and experience.
            </p>
            {/* Rahul This bottom paragraph needs better copy */}
            {/* <p className="max-w-md mt-4 text-gray-500 text-base/6">
            I focused on solving the &#34;Low Effort&#34; and &#34;High
            Gains&#34; problem first, which can be adapted to future use cases.
          </p> */}
          </section>
          <DotGridBG />
        </div>

        {/* Copy / Split and Paste Multiple Branches */}
        <div className="relative max-w-[80rem] mx-auto mt-16 pt-16">
          <HowMightWeSection
            quoteText="How might we enable users to perform bulk actions on elements like copying, pasting, deleting, and rearranging effortlessly."
            problemStatement="Users often wanted to copy existing elements, Move multiple of them at once &#8220;But our software lacked this ability&#8221;"
            problemCount={1}
            highlightedText={[
              "bulk actions",
              "copying",
              "pasting",
              "deleting",
              "rearranging",
            ]}
            highlightedColors={[""]}
          />
        </div>

        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            title="Supporting multi select, to perform bulk actions"
            sectionID="multi-select"
            customCode={
              <>
                <span className=" text-3xl tracking-[-0.015em] text-transparent bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text">
                  {" "}
                </span>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  This was the biggest challenge of this task.
                </p>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  Enabling users to select multiple elements at once opens up
                  numerous new possibilities.
                </p>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  Bulk actions like copy and paste would become much easier.
                  Deleting multiple elements would also be possible, and moving
                  multiple elements to new locations would be simpler.
                </p>
              </>
            }
          />

          <div className="container mx-auto mt-8">
            <div className="w-full">
              <div className="mb-8 pb-8">
                <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                  <Video
                    src="../insider/videos/MultiSelectArrange.webm"
                    height={1080}
                    width={1920}
                  />
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Video demonstrating multi-select and copy-paste operations.
                </p>
                <p className="mt-2 text-gray-400 text-sm">
                  Users can click and drag to select multiple items. By holding
                  the Alt key, they can easily duplicate these elements.
                </p>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
              <div className="">
                <div className="bg-gray-600  rounded-lg video-container fit-content overflow-clip">
                  <Video
                    src="../insider/videos/DropInMiddle2.webm"
                    height={1440}
                    width={1280}
                  />
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Video demonstrating dragging and rearranging element
                  positions.
                </p>
                <p className="mt-4 text-gray-400 text-sm">
                  As the elements are now draggable, users can arrange them
                  however they like. The Canvas UI will show visual cues
                  indicating whether an element can be dropped at a specific
                  location.
                </p>
              </div>
              <div className="">
                <Image
                  className="rounded-lg overflow-clip"
                  src={solutionTrashed}
                  alt="Solution that did not make it to the final stage"
                  width={640}
                  height={720}
                />
                <p className="mt-4 text-gray-400 text-sm">Shuffle Elements</p>
                <p className="mt-4 text-gray-400 text-sm">
                  Notice how the elements display drag handles as signifier, but
                  still this design did not make it to the final launch. Because
                  it conflicted with Elemnt Actions menu.
                </p>
              </div>
              <div className="">
                <Image
                  className="rounded-lg overflow-clip"
                  src={solutionTrashed2}
                  alt="Swap or Change Elements"
                  width={640}
                  height={720}
                />
                <p className="mt-4 text-gray-400 text-sm">
                  Swap or Change Elements
                </p>
                <p className="mt-4 text-gray-400 text-sm">
                  This design was also scraped, because we went into a different
                  direction. This solution was limiting.
                </p>
              </div>
            </div>
          </div>

          {/* Rahul Add Images, and Videos for Multi Select Different States */}
          {/* Rahul Add all intermediary startes, lifting, copying, moving, deleteing, merging etc - Add Images Zoomed in, Tight */}
        </section>

        <section className="relative mt-16 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
          <HowMightWeSection
            quoteText="How might we streamline multi-element preview, minimizing clicks for
        user efficiency?"
            problemStatement="Users struggle to preview campaign designs for Email, Webpush, App Push, etc., impacting efficiency due to a slow and cumbersome process."
            problemCount={2}
            highlightedText={["multi-element preview"]}
            highlightedColors={["lime", "", "", "cyan"]}
          />

          <div className="rounded-lg fit-content overflow-clip mt-8  m-auto pt-8">
            <p className="mt-4 text-gray-400 text-sm">
              First of all, let's hear a user's feedback. Unmute the video to
              listen. He explains his problem very clearly, and it makes sense.
            </p>
            <Video
              src="../insider/videos/remix-bg-quick-preview.webm"
              width={1920}
              height={1080}
            />
          </div>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            // subtitle="Survey Results were indicating not happy users"
            title="Introducing New and Faster Previews"
            // Rahul Need a Better Copy here
            // customCode={
            //   <p className="max-w-md mt-4 text-gray-500 text-base/6">
            //     Users can’t see preview of elements, for example, to see an email
            //     design, they have to double click the email element, element
            //     config page loads with the design, imagine doing this for all the
            //     elements on the journey.
            //   </p>
            // }
          />

          <div className="grid gap-4 pb-4 mx-auto mt-8 max-w-screen-2xl md:grid-cols-6 ">
            <div className="relative col-span-3">
              <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                <Video
                  src="../insider/videos/PrototypePreviewOld.webm"
                  height={1080}
                  width={1920}
                />
              </div>
              <p className="inline-block mt-4 mb-4">
                <span className="inline-block text-orange-500">
                  Old Preview Flow,
                </span>{" "}
                this method is slow, tedious and time consuming.
              </p>
              <ol className="list-decimal list-inside">
                <li className="mb-2 text-gray-400">
                  Users must first identify the desired element for preview.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Then they need to click on the element.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Wait for the inner page to load.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Where the content has more priority, hence it loads first.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Once the content load is done, image preview will load.
                </li>
              </ol>
            </div>
            <div className="col-span-3">
              <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                <Video
                  src="../insider/videos/PrototypePreviewNew.webm"
                  height={1080}
                  width={1920}
                />
              </div>
              <p className="mt-4 mb-4">
                <span className="text-sky-500">New Preview Flow, </span> A
                contextually better and faster method.
              </p>
              <ol className="list-decimal list-inside">
                <li className="mb-2 text-gray-400">
                  The user finds the Preview Button.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Clicks on Preview to activate it.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Optimized images are loaded for all eligible channels with
                  previews.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <div className="relative w-full ">
          <div className="max-w-[80rem] mx-auto pt-8">
            <p className="mt-4 text-balance max-w-md text-xl tracking-[-0.015em] ">
              After exploring various approaches, we decided to enhance our
              existing component by incorporating an external trigger to toggle
              the preview on or off instantly.
            </p>
          </div>
          <img
            className="m-auto"
            src="../insider/case-assets/Testing.svg"
            alt=""
          />
          {/* Rahul Add Other Solutions or Maybe Animate this with a colik of a button also, resize the image to a smaller height */}
          <DotGridBG />
        </div>

        <div className="relative max-w-[80rem] mx-auto mt-32 pt-16">
          <HowMightWeSection
            quoteText="How might we improve navigation within the canvas for users who rely on trackpad/mouse, especially when designing large journeys?"
            problemStatement="Users struggle to navigate large journeys within the canvas using trackpad/mouse, requiring excessive zooming and dragging"
            problemCount={3}
            highlightedText={[
              "improve navigation within",
              "rely on",
              "trackpad/mouse",
              "large journeys",
            ]}
            highlightedColors={["lime", "purple", "", "cyan"]}
          />
        </div>

        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            // subtitle=""
            title="Introducing Mini Map and Better Contextual Zoom Functionality"
            customCode={
              <>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  Multiple users complained about navigation issues. They mainly
                  use a trackpad or mouse to navigate within the canvas.
                </p>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  When designing large journeys, there is no easier interaction
                  using the mouse or trackpad. Users have to zoom out, drag the
                  canvas, and then zoom in again.
                </p>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  Our canvas always zooms from the center of the viewport. This
                  means that even if the user has dragged to the correct
                  position, zooming in will feel strange.
                </p>
                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  Lack of keyboard shortcuts was another significant reason for
                  their frustrations.
                </p>
              </>
            }
          />

          <div className="grid gap-4 pb-4 mx-auto mt-8 max-w-screen-2xl md:grid-cols-6 ">
            <div className="col-span-3">
              <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                <Video
                  src="../insider/videos/MiniMap.webm"
                  height={1080}
                  width={1920}
                />
              </div>
              <p className="mt-4 mb-4">
                <strong className="text-orange-500">
                  Mini Map - to better inform the user about their current
                  position on the canvas.
                </strong>
              </p>
              <ol className="list-decimal list-inside">
                <li className="mb-2 text-gray-400">
                  Provides a quick overview of the entire canvas, especially for
                  large and complex projects.
                </li>
                <li className="mb-2 text-gray-400 ">
                  Offers a visual reference point, reminding users of their
                  current location on the canvas.
                </li>
                <li className="mb-2 text-gray-400 ">
                  By clicking on a specific location on the minimap, users can
                  instantly jump to that area on the canvas.
                </li>
              </ol>
            </div>
            <div className="col-span-3">
              <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                <Video
                  src="../insider/videos/NewZoom.webm"
                  height={1080}
                  width={1920}
                />
              </div>
              <p className="mt-4 mb-4">
                <strong className="text-sky-500">
                  Seamlessly zoom in and out of canvas using various methods
                </strong>{" "}
              </p>
              <div className="text-gray-400">
                <p className="mb-4">
                  Scroll Wheel&#58; Taking advantage of users devices, Using
                  mouse&#39;s scroll wheel to zoom in or out.
                </p>
                <p className="mb-4">
                  Keyboard Shortcuts&#58; Added support for Dedicated keyboard
                  shortcuts for quick zooming.
                  <span className="inline-block p-1 mx-2 text-xs font-bold text-white bg-gray-700 rounded">
                    Ctrl&#47;Cmd
                  </span>
                  +
                  <span className="inline-block p-1 mx-2 text-xs font-bold text-white bg-gray-700 rounded">
                    +
                  </span>
                  to Zoom In and{" "}
                  <span className="inline-block p-1 mx-2 text-xs font-bold text-white bg-gray-700 rounded">
                    Ctrl/Cmd
                  </span>
                  +
                  <span className="inline-block p-1 mx-2 text-xs font-bold text-white bg-gray-700 rounded">
                    -
                  </span>
                  to Zoom Out.
                </p>
                <p>
                  Zoom Toolbar Button: A zoom toolbar button, allowing you to
                  click &#34;<span className="font-bold">+</span>&#34; or &#34;
                  <span className="font-bold">-</span>&#34; icons to adjust the
                  zoom level. If double tapped the number resets the zoom.
                </p>
              </div>
            </div>
          </div>
          {/* add 2 columns layout for the videos here. Video will have a captions as well */}
        </section>

        {/* High Learning Curve */}
        <div className="relative max-w-[80rem] mx-auto mt-16 pt-16">
          <HowMightWeSection
            quoteText="During Research, we wanted to know what resources our partners use to learn architect, Do they find it easy to learn?"
            problemStatement="Users struggle to quickly remeber which Starter Element does what, A Learning Issue. "
            problemCount={2}
            highlightedText={["what resources", "easy to learn"]}
            highlightedColors={["gray", "gray"]}
            containerClass="my-8"
          />
        </div>
        <div className="relative">
          <section className=" mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
            <div className="flex flex-wrap gap-8 ">
              <div>
                <p className="mt-4 text-balance max-w-md text-xl tracking-[-0.015em] ">
                  We got the answers, They Feel Confused, They try learning on
                  their own, but fail to do so.
                </p>

                <p className="max-w-md mt-4 text-gray-500 text-base/6">
                  The general response was towards negative side, Partner felt
                  confused, they often visited the academy and but it was not
                  helpful to them, some times they had to contact support to
                  find what they are looking for.
                </p>
              </div>
              <div className="w-full sm:w-1/2 overflow-hidden rounded-xl">
                user feedback, says can't understand, needs help of colleagues.
                <Video
                  src="../insider/videos/helpNeededCollegues.webm"
                  height={1080}
                  width={1920}
                />
              </div>
            </div>

            <div className="relative inline-flex flex-wrap pt-8 mt-8">
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

          <DotGridBG />
        </div>

        <section className=" mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
          <div className="w-full">
            <div className="mb-8 pb-8">
              <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                <Video
                  src="../insider/videos/StarterExplanation.webm"
                  height={1080}
                  width={1920}
                />
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Users reported they have hard time understanding the use cases
                for Starter Elements. So I added an Inline Help, when they hover
                they see these useful tips.
              </p>
              <p className="mt-2 text-gray-400 text-sm">
                But this is not enough. I wanted to make self learning
                accessible, to do that I had another plan.
              </p>
            </div>
            <SectionTitle
              sectionID="survey"
              // subtitle=""
              title="Brinnging Academy aka Help Center right in the canvas, access anything, anytime"
              customCode={
                <>
                  <p className="max-w-md mt-4 text-gray-500 text-base/6">
                    What if we cloud bring the help center right in the canvas.
                    I did the following mockup.
                  </p>
                </>
              }
            />
            <div className="my-8 pb-8">
              <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
                <Video
                  src="../insider/videos/academyInCanvas.webm"
                  height={1080}
                  width={1920}
                />
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                As good it may sound and look, we cloud not do it, Our Technical infrastruture cloud not support it at that time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
