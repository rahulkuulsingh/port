import React from "react";
import Image from "next/image";
import benchmark from "@/public/lrnr/case-assets/benchmark-full.png";
import manuscriptHighlited from "@/public/lrnr/case-assets/manuscript-highlighted.png";

import { CanvasRevealEffect } from "@/app/Components/Visual/canvas-reveal-effect";
import Video from "@/app/Components/Video";
import StickyNotes from "@/app/Components/UI/Figjam/StikcyNotes";
import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";

export default function Lrnr() {
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
          <h2 className="pb-8 text-sm text-purple-500">
            B2B Ed-Tech SaaS Product
          </h2>
          <h1 className="max-w-4xl text-balance text-3xl/9  tracking-tight  sm:text-5.5xl md:text-6xl">
            Designed Virtual Labs for Medical Grad Students
          </h1>
          <p className="max-w-md mt-4 text-gray-500 text-base/6">
            Year, 2019 world was hit hard by Covid. Altering the landscape of
            education. A pressing demand for virtual labs that could provide
            future doctors, nurses, and other healthcare professionals with the
            full range of knowledge and practical skills they need to succeed.
          </p>
        </div>
        <div className="my-role isolate mt-24 grid grid-cols-1 border border-white/[.075] sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative z-10 col-start-1 row-start-1 px-6 py-8">
            <h2 className="text-balance text-xl tracking-[-0.015em] ">
              The Projects High Level Context
            </h2>
            <p className="mt-3 text-gray-400 text-sm/5">
              Create a software that effectively enables instructors to teach
              medical grad students the intricacies of practical medical
              concepts.
            </p>
          </div>
          <ul
            role="list"
            className="relative flex flex-wrap col-start-1 isolate col-span-full sm:row-start-1"
          >
            <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075] px-6 py-8 sm:ml-[50%] sm:w-1/2 sm:border-l sm:border-t-0 lg:ml-[25%] lg:w-1/4">
              <h3 className="mt-6 text-sm font-medium ">My Role</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">
                Somehow, design a software from a Biology Lab Manuscript.
                <br />
                <br />
                UI and UX Design, Interaction Design, Design Systems
              </p>
              {/* <p className="mt-16 text-gray-400 text-2xs">
                I worked as a Product designer, researcher, motion and
                interaction designer.
              </p> */}
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075]  px-6 py-8 sm:w-1/2 lg:w-1/4 lg:border-l lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Team Structure</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">
                <span>Design Team: Rahul (me)</span>
                <br />
                <span className="block mt-4">
                  Dr. Lang (Professor), Chaitnya (Bio Expert), Prajin (FE Dev),
                  Ventak (BE Dev), Mohan (QA)
                </span>
              </p>
              {/* <p className="mt-16 text-gray-400 text-2xs">
                A dedicated development team of 15 devs
              </p> */}
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075]  px-6 py-8 sm:w-1/2 sm:border-l lg:w-1/4 lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Project Timeline</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">
                Sep, 2020 - Nov, 2021
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* Block Quote */}
      {/* Image goes here */}
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <HowMightWeSection
          quoteText="How might we create a biology software that prioritizes concept learning over software complexity?"
          problemStatement="Students and instructors often struggle with complex software, which distracts them from the main objective: learning practical concepts."
          problemLabel="Industry Wide Challenge"
          highlightedText={[
            "prioritizes concept learning",
            "software complexity",
          ]}
          highlightedColors={["", "orange"]}
          containerClass="pt-4 pb-16 mt-4"
        />
        <img src="../lrnr/case-assets/manuscript.png" alt="" />
        <p className="max-w-3xl mt-4 text-gray-400 text-base/6">
          I kicked off this project by first understanding what an experiment
          is? I was given a list of 20 pdf manuscripts for this project, each
          detailing how an experiment is done in the actual physical labs.
        </p>
        <p className="max-w-3xl mt-4 text-gray-400 text-base/6">
          So I started collaborating with two of my team members Dr. Lang and
          Chaitanya. Both of them are subject matter experts.
        </p>
      </section>

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="relative text-xl font-light lg:text-3xl">
          <span>Primary users are Students and Professors. </span>
        </p>
        <ul
          role="list"
          className="relative grid w-full grid-cols-2 mt-16 isolate col-span-full"
        >
          <li className=" flex w-full flex-none flex-col items-start border border-white/[.075] px-6 py-8 mt-2 ">
            <p className="mt-6 pb-8  text-md ">
              What it is that the students want from this app?
            </p>
            <p className="text-gray-400 ">
              1. They want to get good grade points.
            </p>
            <p className="text-gray-400 ">
              2. Do the assignments effortlessly.
            </p>
            <p className="text-gray-400 ">
              3. Audit experiments on their own pace.
            </p>
          </li>
          <li className=" flex w-full flex-none flex-col items-start border border-white/[.075] px-6 py-8 mt-2 ">
            <p className="mt-6 pb-8 text-md ">
              What it is that the Instrcutors want from this app?
            </p>
            <p className="text-gray-400">
              1. Create lab assignments and easily assign to students.
            </p>
            <p className="text-gray-400">
              2. They want the students to learn to abide by the process
            </p>
            <p className="text-gray-400">3. Make mistakes, and learn from it</p>
          </li>
        </ul>
      </section>

      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative">
          <header className="max-w-2xl">
            <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
              <span className="inline-block">
                I did two important things before designing anything.
              </span>
            </p>
            <p className="mt-4 text-gray-400 text-base/6">
              1. Find similar products, do a benchmark, make a list of
              improvements that can be adopted to my product.
            </p>
            <p className="mt-4 text-gray-400 text-base/6">
              2. Find Information Patterns in the experiment manuscripts, and
              create an IA that can support the development of the product.{" "}
            </p>
          </header>
        </div>
        {/* Add a grid with two zoomed out images for benchmark and pattern manuscripts */}
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative">
          <header className="max-w-2xl">
            <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
              Part 1: Benchmarking Existing Market Products
            </p>
            <p className="mt-4 mb-8 text-gray-400 text-balance">
              Labster, BioDigital Human, PhET Interactive Simulations,
              McGraw-Hill Connect, Pearson Mastering Biology, Carolina
              Biological Supply Company, Edmentum, ExploreLearning Gizmos,
              Hands-On Labs, Smart Science Education Inc.
            </p>
          </header>
        </div>
        <div>
          <Image
            src={benchmark}
            alt="Image description"
            width={1200}
            height={38}
            className="pt-4 "
          />
          <ul
            role="list"
            className="relative grid w-full grid-cols-3 mt-24 isolate col-span-full sm:row-start-1 my-role"
          >
            <li className="flex flex-col items-start flex-none w-full px-6 py-8 border-t-4 border-green-500">
              <h3 className="mt-6 text-xl font-medium">The Good</h3>
              <ul className="list-disc">
                <li className="mt-2 text-gray-400 text-base/6">
                  All of these experiments are information rich.
                </li>
                <li className="mt-2 text-gray-400 text-base/6">
                  {" "}
                  These include core concepts
                </li>
                <li className="mt-2 text-gray-400 text-base/6">
                  Peer Reviewed.
                </li>
              </ul>
            </li>
            <li className="flex flex-col items-start flex-none w-full px-6 py-8 border-t-4 border-orange-500">
              <h3 className="mt-6 text-xl font-medium">The Bad</h3>
              <ul className="list-disc">
                <li className="mt-2 text-gray-400 text-base/6">
                  Each experiment is unique, Hence the Screen and Layout Keeps
                  changing
                </li>
                <li className="mt-2 text-gray-400 text-base/6">
                  Lack of guidance, assumes instructor supervision for
                  experiments.{" "}
                </li>
                <li className="mt-2 text-gray-400 text-base/6">
                  No Assesment can be done at all
                </li>
              </ul>
            </li>
            <li className="flex flex-col items-start flex-none w-full px-6 py-8 border-t-4 border-red-500">
              <h3 className="mt-6 text-xl font-medium">The Ugly</h3>
              <ul className="list-disc">
                <li className="mt-2 text-gray-400 text-base/6">
                  No Accessibility{" "}
                </li>
                <li className="mt-2 text-gray-400 text-base/6">
                  Uses Flash or old image based approach
                </li>
                <li className="mt-2 text-gray-400 text-base/6">
                  Loading times and error management are lacking.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative">
          <header className="max-w-2xl">
            <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
              Part 2: Finding Important, Reusable Information Patterns within
              the manuscript
            </p>

            <p className="mt-4 mb-8 text-gray-400 text-balance">
              After reviewing 10+ experiments we found that almost all the
              experiment share the same flow.{" "}
              <span className="underline text-purple-500">
                Procedure is the only step which differs from experiment to
                experiment.
              </span>
            </p>
          </header>
          <Image
            src={manuscriptHighlited}
            alt="Image description"
            width={1200}
            height={38}
            className="pt-4 "
          />
        </div>
        <div>
          How these experiments are performed in the Real World?
          <ul
            role="list"
            className="relative grid w-full grid-cols-4 mt-24 isolate col-span-full"
          >
            <li className=" flex w-full flex-none flex-col items-start border border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 1</p>
              <h3 className="mb-6 text-sm font-medium">Introduction:</h3>
              <p className="text-gray-400 ">
                This stage is about getting a basic understanding of concepts
              </p>
            </li>
            <li className=" flex w-full flex-none flex-col items-start border border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 2</p>
              <h3 className="mb-6 text-sm font-medium">
                Preparartion - Material, or Equipent:
              </h3>
              <p className="text-gray-400 ">
                Students are required to setup the prequisites to perform the
                procedre.
              </p>
            </li>
            <li className=" flex w-full flex-none flex-col items-start border border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 3</p>
              <h3 className="mb-6 text-sm font-medium">Procedure:</h3>
              <p className="text-gray-400 ">
                Students follow process to Perform the experiment in this stage.
              </p>
            </li>
            <li className=" flex w-full flex-none flex-col items-start border border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 4</p>
              <h3 className="mb-6 text-sm font-medium">
                Results and Observation:
              </h3>
              <p className="text-gray-400 text-base/6">
                Students submits their findings and observations to the faculty.
              </p>
            </li>
          </ul>
          <p className=" mt-2 px-6 py-4 border border-white/[.075] text-gray-400 ">
            Content Type: All the steps can include multiple pages, may include
            images, videos, tables, rich formated text.
          </p>
          <Image
            src="../lrnr/case-assets/experimentSteps.svg"
            alt="Image description"
            width={1200}
            height={38}
            className="pt-4 mt-16"
          />
          <p className="mt-16  py-2 text-purple-600 ">
            A Generic Student Flow can be created, that&apos;s the goal.
          </p>
          <p className=" mb-8 text-gray-400 text-balance">
            Note: It was noticed that not all the experimets will have All four
            steps.
          </p>
        </div>
      </section>

      <HowMightWeSection
        quoteText="How might we ensure consistent UI and common interactions throughout the product, rendering it seamlessly integrated and virtually invisible to the user?"
        highlightedText={[
          "consistent UI",
          "common interactions",
          "virtually invisible",
        ]}
        highlightedColors={["lime", "emerald", "violet"]}
        containerClass="pt-4 pb-16 mt-4"
      />
      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative">
          <header className="max-w-2xl">
            <p className="mt-4 text-gray-400 text-base/6">
              Experiments can&apos;t be made consitent, because they are unique
              - Hmmmm...
            </p>
            <p className="mt-4 text-gray-400 text-base/6">
              I remined myself, that I am not trying to make the experiemnt
              consistent, but the tool we use to conduct it. Hence there is a
              slight possibility.
            </p>
          </header>
          <ul className="flex flex-wrap gap-4 mt-16">
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Unified layout framework.
            </li>
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Standardize navigation.
            </li>
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Uniform progress tracking.
            </li>
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Consistent interaction with materials.
            </li>
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Uniform feedback mechanism.
            </li>
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Guidelines for content presentation.
            </li>
            <li className="flex items-center content-center p-4 text-gray-400 border border-gray-800 rounded-md size-fit">
              Standardized error handling.
            </li>
          </ul>
        </div>
      </section>
      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Standard layout Options
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          While designing, looking at the content, I grdually was able to reduce
          the screen variants. I arrived at 4 options.{" "}
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          Simplifing screen variations for quicker tool mastery. This reduces
          the congntive load.
        </p>
        <div className="flex mt-8 pt-8  w-full gap-4 flex-wrap-flex-col">
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/first-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-gray-600 text-sm">Layout 1. Wide layout</p>
          </picture>
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/second-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-gray-600 text-sm">
              Layout 2. Drawer layout
            </p>
          </picture>
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/third-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-gray-600 text-sm">
              Layout 3. Sidebar layout
            </p>
          </picture>
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/fourth-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-gray-600 text-sm">Layout 4. Modals</p>
          </picture>
        </div>
      </section>

      {/* <section className="flex relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        
        <div className="left">
          <img
            className="w-full  pt-16 mt-8"
            src="../lrnr/case-assets/topbar.svg"
            alt="procees"
          />
          <p className="mt-4 text-gray-400 text-base/6">
            The top bar displays the current experiment name, score,
            accessibility tools, and exit button.
          </p>
        </div>
        <div className="right">
          <img
            className="w-full pt-16 mt-8"
            src="../lrnr/case-assets/topbar.svg"
            alt="procees"
          />
          <p className="mt-4 text-gray-400 text-base/6">
            The top bar displays the current experiment name, score,
            accessibility tools, and exit button.
          </p>
        </div>
      </section> */}

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className=" text-sm text-purple-500">Designbing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Fixed Topbar
        </p>

        <p className="mt-4 text-gray-400 text-base/6">
          My focus was on, taking advantage of the top bar to show all the
          necesassy information to user in seconds.
        </p>
        <p className=" pt-2 text-gray-400">
          What is the most important information for a Student?
        </p>
        <ul>
          <li className="mt-8 list-disc text-gray-400">
            Which experiment they are practcing.
          </li>
          <li className="mt-2 list-disc text-gray-400">Grade Points</li>
          <li className="mt-2 list-disc text-gray-400">
            Quick Help or Support
          </li>
          <li className="mt-2 list-disc text-gray-400">
            Exit from the experiment.
          </li>
          <li className="mt-2 list-disc text-gray-400">
            Accessibility Tools to increase font size, high contrast mode,
            toggle on or off hints etc.
          </li>
        </ul>

        <img
          className="w-full  pt-16 mt-8"
          src="../lrnr/case-assets/topbar.svg"
          alt="procees"
        />
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className=" text-sm text-purple-500">Designbing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Fixed Bottom Navigation Bar
        </p>

        <p className="mt-4 text-gray-400 text-base/6">
          The Navigation is the most important part of all to achive consistent
          interaction. It was also the most challenging to design.
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          The navigation should be intuitive, it should always tell the user how
          much progress they have made, they should be able to go back and
          forth. It should also clearly inform user if a step if Optional. There
          should only be one Primary Action Button.
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          Hence the bottom bar displays the current step name, sub-steps, and a
          context-aware action button.
        </p>
        <img
          className="w-full pt-16 mt-8"
          src="../lrnr/case-assets/bottom-bar.svg"
          alt="procees"
        />
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className=" text-sm text-purple-500">Designbing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Simplifuing access to find Materisl, Appratus, Tasks, Answers.
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          Implementing a drawer or shelf type feature to conveniently store
          materials, apparatus, tasks, and answers for each experiment. Enhances
          findability and usability.
        </p>
        <img
          className="w-full pt-16 mt-8"
          src="../lrnr/case-assets/side-bar-2x.png"
          alt="procees"
        />
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className=" text-sm text-purple-500">Designbing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Experiment Canvas
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          This is the area where the student will spend most of the time. So it
          has to be as simple as possible. It has to be informative. The main
          area displays reading materials, videos, and instructions. Students
          can perform the procedure in this area of the layout.
        </p>

        <ul>
          <li className="mt-8 list-disc text-gray-400">
            Displays Main Content, that is designed and developed by the
            instrctors.
          </li>
          <li className="mt-2 list-disc text-gray-400">
            It can include, Images, Videos, Tables, Rich Formatted Text, The
            Layout can be multi columns.
          </li>
          <li className="mt-2 list-disc text-gray-400">
            Displays onScreen hints, success or failure states
          </li>
          <li className="mt-2 list-disc text-gray-400">
            This type of screen will also change with experiment to experiment.
          </li>
        </ul>
        <img
          className="w-full pt-16 mt-8"
          src="../lrnr/case-assets/main-area-2x.png"
          alt="procees"
        />
      </section>
    </>
  );
}
