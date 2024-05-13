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

export default function Insider() {
  const tocItems = [
    { id: "section1", title: "Introduction" },
    { id: "section2", title: "Research - Survey" },
    { id: "section3", title: "Research - User Interviews" },
    { id: "section3", title: "Research - Analysis" },
    { id: "section3", title: "Problem Statemet 1 " },
    { id: "section3", title: "Solutions Exploration - Preview " },
    { id: "section3", title: "Problem Statemet 2 " },
    { id: "section3", title: "Solutions Exploration - Navigation " },
    { id: "section3", title: "Problem Statemet 3 " },
    { id: "section3", title: "Solutions Exploration - Bulk Actions " },
    { id: "section3", title: "Problem Statemet 4 " },
    { id: "section3", title: "Solutions Exploration - Learning Curve " },
    { id: "section3", title: "Restructing Canvas" },
    { id: "section3", title: "Updating the design systems " },
    { id: "section3", title: "Adding Micro Interactions " },
    { id: "section3", title: "UX Improvments" },
    { id: "cool", title: "Final Results and Impact" },
  ];

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

      <div className="relative max-w-[80rem] mx-auto">
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

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
        <div className="relative">
          <SectionTitle
            sectionID="survey"
            title="Our Research team did a UMUX Survey, the results were concering."
            subtitle="How it all started?"
          />
          <p className="mt-4 text-gray-400 text-base/6">
            In this survey, we asked our users 3 question.
          </p>

          <ul>
            <li>
              <p className="mt-8 text-gray-400 text-base/6">
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
              <p className="mt-8 text-gray-400 text-base/6">
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
              <p className="mt-4 text-gray-400 text-base/6">
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

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <SectionTitle
          sectionID="survey"
          subtitle="Survey Results were indicating not happy users"
          title="To understand the reasons behind the low satisfaction scores and identify areas for improvement, we conducted user interviews."
          customCode={
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              I did the analysis while the research team did the followup
              interview session
            </p>
          }
        />
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] mx-auto relative sm:max-w-[40rem] w-full">
        <Image
          src={dovetail}
          alt="Image description"
          loading={"lazy"}
          className="pt-4"
        />
        <p className="max-w-md mt-4 text-gray-500 text-base/6">
          Image 01: Low resolution image of User Interview Findings
        </p>
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <SectionTitle
          sectionID="survey"
          // subtitle="Survey Results were indicating not happy users"
          title="After analysis, four types of pain points surfaced."
          customCode={
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              The Software does not fit properly in the workflow, it is hard to
              learn, it crashes and freezes, when compared to other tools lacks
              certain features.
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
            Solving these problems had the heightest priority, because it will
            increase usability of our software.
          </p>

          <p className="max-w-md mt-4 text-gray-500 text-base/6">
            I focused on solving the &#34;Low Effort&#34; and &#34;High
            Gains&#34; problem first, which can be adapted to future use cases.
          </p>
        </section>
        <DotGridBG />
      </div>

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
        {/* <blockquote className="pl-8 text-xl font-light border-l-2 lg:text-3xl ">
          <p className="pb-4 text-sm font-medium ">
            <strong className="text-sky-300">Workflow Problem No.1:</strong>{" "}
            Users struggle to preview element design, such as email or webpush
          </p>
          <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
            How might we streamline multi-element preview, minimizing clicks for
            user efficiency?{" "}
          </p>
        </blockquote> */}

        <HowMightWeSection
          quoteText="How might we streamline multi-element preview, minimizing clicks for
        user efficiency?"
          problemStatement="Users struggle to preview campaign designs for Email, Webpush, App Push, etc."
          problemCount={1}
          highlightedText={[
            "what resources",
            "easy to learn",
            "trackpad/mouse",
            "large journeys",
          ]}
          highlightedColors={["lime", "", "", "cyan"]}
        />
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <SectionTitle
          sectionID="survey"
          // subtitle="Survey Results were indicating not happy users"
          title="Introducing New and Faster Previews"
          customCode={
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              Users can’t see preview of elements, for example, to see an email
              design, they have to double click the email element, element
              config page loads with the design, imagine doing this for all the
              elements on the journey.
            </p>
          }
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
            <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
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
        <p className="mt-16">
          <strong className="text-sky-500">
            I extended the existing component,{" "}
          </strong>
          So that it can display preview images right in the canvas.
        </p>
      </section>
      <div className=" relative w-full">
        {/* <picture className="max-w-screen-2xl">
          <img
            src="../insider/case-assets/preview-component.png"
            alt="Image description"
            width={1200}
            height={56}
            className="m-auto"
          />
        </picture> */}
        <DotGridBG />
        <img className="m-auto" src="../insider/case-assets/Testing.svg" alt="" />
      </div>

      <div className="relative max-w-[80rem] mx-auto">
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
      </div>

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <SectionTitle
          sectionID="survey"
          // subtitle="Survey Results were indicating not happy users"
          title="Introducing Mini Map and Better Contextual Zoom Functionality"
          customCode={
            <>
              <p className="max-w-md mt-4 text-gray-500 text-base/6">
                Multiple users complained about navigation issues, They mainly
                use Trackpad or Mouse to navigate within the canvas.
              </p>
              <p className="max-w-md mt-4 text-gray-500 text-base/6">
                When designing large journeys, their is no easier interaction
                using the mouse or trackpad. User have to zoom out and drag the
                canvas and zoom again.
              </p>
              <p className="max-w-md mt-4 text-gray-500 text-base/6">
                Our canvas always zoomed from the center of the viewport, that
                means even if the user has dragged to the correct position,
                zooming in will feel weird
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
            <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
              <Video
                src="../insider/videos/NewZoom.webm"
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
      <div className="relative max-w-[80rem] mx-auto">
        <HowMightWeSection
          quoteText="How might we enable users to perform bulk actions on elements like copying, pasting, deleting, and rearranging effortlessly."
          problemStatement="Users often wanted to copy existing elements, Move multiple of them at once &#8220;But our software lacked this ability&#8221;"
          problemCount={3}
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
                This was The biggest challenge of this task.
              </p>
              <p className="max-w-md mt-4 text-gray-500 text-base/6">
                Enabling users to select multiple elements at once opens up
                numerous new possibilities.
              </p>
              <p className="max-w-md mt-4 text-gray-500 text-base/6">
                Bulk action like copy and paste would become much easier,
                deleting multiple elements would also be possible. Moving
                multiple elements to new locations would be so simpler.
              </p>
            </>
          }
        />

        <div className="grid gap-4 pb-4 mx-auto mt-8 max-w-screen-2xl md:grid-cols-6 ">
          <div className="col-span-3">
            <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
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
            <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
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
      </section>

      {/* High Learning Curve */}
      <div className="relative max-w-[80rem] mx-auto">
        <HowMightWeSection
          quoteText="During Research, we wanted to know what resources our partners use to learn architect, Do they find it easy to learn?"
          problemStatement="Users struggle to quickly remeber which Starter Element does what, A Learning Issue. "
          problemCount={2}
          highlightedText={[
            "what resources",
            "easy to learn",
          ]}
          highlightedColors={["gray","gray"]}
          containerClass="my-8"
        />
      </div>
      <div className="relative">
        <section className=" mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem]">
          <p className="mt-4 text-balance max-w-md text-xl tracking-[-0.015em] ">
            We got the answers, They Feel Confused, They try learning on their
            own, but fail to do so.
          </p>

          <p className="max-w-md mt-4 text-gray-500 text-base/6">
            The general response was towards negative side, Partner felt
            confused, they often visited the academy and but it was not helpful
            to them, some times they had to contact support to find what they
            are looking for.
          </p>
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

      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <HowMightWeSection
          quoteText="How might we reduce the learning curve?"
          highlightedText={[
            "what resources",
            "easy to learn",
            "trackpad/mouse",
            "large journeys",
          ]}
          // highlightedColors={["lime", "", "", "cyan"]}
        />

        <p className="max-w-md mt-4 text-gray-500 text-base/6">
          In order to answer this question, we must ask a few more questions.
        </p>
        <div className="relative inline-flex flex-wrap mt-4">
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
