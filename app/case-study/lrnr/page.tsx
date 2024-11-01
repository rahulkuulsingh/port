import React from "react";
import Image from "next/image";
import benchmark from "@/public/lrnr/case-assets/benchmark-full.png";
import manuscriptHighlited from "@/public/lrnr/case-assets/manuscript-highlighted.png";


import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";
import DotGridBG from "@/app/Components/UI/CosmeticComponents/Backgrounds/DotGridBG";
import SectionTitle from "@/app/Components/SectionTitle";

export default function Lrnr() {
  return (
    <>
      <section className="w-full max-w-screen-lg px-8 pt-16 pb-32 mx-auto mt-16">
        <div className="">
          <h2 className="pb-8 text-sm text-purple-500">
            B2B Ed-Tech SaaS Product
          </h2>
          <h1 className="max-w-4xl text-balance text-3xl/9  tracking-tight  sm:text-5.5xl md:text-6xl">
            Designed an end-to-end virtual lab for instructors struggling to teach experiments due to inefficient tools.
          </h1>
          <p className="max-w-md mt-4 text-gray-500 text-base/6">
            Year, 2019 world was hit hard by Covid. Altering the landscape of
            education. A pressing demand for virtual labs that could provide
            future doctors, nurses, and other healthcare professionals with the
            full range of knowledge and practical skills they need to succeed.
          </p>
        </div>
        <div className="my-role isolate mt-24 grid grid-cols-1 border  border-white/[.075] sm:grid-cols-2 lg:grid-cols-4">
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
            <li className="flex w-full flex-none flex-col items-start border-t  border-white/[.075] px-6 py-8 sm:ml-[50%] sm:w-1/2 sm:border-l sm:border-t-0 lg:ml-[25%] lg:w-1/4">
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
            <li className="flex w-full flex-none flex-col items-start border-t  border-white/[.075]  px-6 py-8 sm:w-1/2 lg:w-1/4 lg:border-l lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Team Structure</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">
                <span>Design Team: Rahul (me)</span>
                <br />
                <span className="block mt-4">
                  Dr. Lang (Professor), Chaitnya (Bio Expert), Prajin (FE Dev),
                  Ventak (BE Dev), Mohan (QA)
                </span>
              </p>
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t  border-white/[.075]  px-6 py-8 sm:w-1/2 sm:border-l lg:w-1/4 lg:border-t-0">
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
          className="relative grid w-full grid-cols-1 mt-16 md:grid-cols-2 isolate col-span-full"
        >
          <li className=" flex w-full flex-none flex-col items-start border  border-white/[.075] px-6 py-8 mt-2 ">
            <Image
              src="../lrnr/case-assets/student.svg"
              alt="Image description"
              width={48}
              height={38}
            />
            <p className="pb-8 mt-6 text-md ">
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
          <li className=" flex w-full flex-none flex-col items-start border  border-white/[.075] px-6 py-8 mt-2 ">
            <Image
              src="../lrnr/case-assets/teacher.svg"
              alt="Image description"
              width={48}
              height={38}
            />
            <p className="pb-8 mt-6 text-md ">
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
            className="relative grid w-full grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 isolate col-span-full sm:row-start-1 my-role"
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
              <span className="text-purple-500 underline">
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
            className="relative grid w-full grid-cols-1 mt-24 lg:grid-cols-4 md:grid-cols-2 isolate col-span-full"
          >
            <li className=" flex w-full flex-none flex-col items-start border  border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 1</p>
              <h3 className="mb-6 text-sm font-medium">Introduction:</h3>
              <p className="text-gray-400 ">
                This stage is about getting a basic understanding of concepts
              </p>
            </li>
            <li className=" flex w-full flex-none flex-col items-start border  border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 2</p>
              <h3 className="mb-6 text-sm font-medium">
                Preparartion - Material, or Equipent:
              </h3>
              <p className="text-gray-400 ">
                Students are required to setup the prequisites to perform the
                procedre.
              </p>
            </li>
            <li className=" flex w-full flex-none flex-col items-start border  border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 3</p>
              <h3 className="mb-6 text-sm font-medium">Procedure:</h3>
              <p className="text-gray-400 ">
                Students follow process to Perform the experiment in this stage.
              </p>
            </li>
            <li className=" flex w-full flex-none flex-col items-start border  border-white/[.075] px-6 py-8 mt-2 ">
              <p className="mt-6 text-sm ">Step 4</p>
              <h3 className="mb-6 text-sm font-medium">
                Results and Observation:
              </h3>
              <p className="text-gray-400 text-base/6">
                Students submits their findings and observations to the faculty.
              </p>
            </li>
          </ul>
          <p className=" mt-2 px-6 py-4 border  border-white/[.075] text-gray-400 ">
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
          <p className="py-2 mt-16 text-purple-600 ">
            A Generic Student Flow can be created, that&apos;s the goal.
          </p>
          <p className="mb-8 text-gray-400 text-balance">
            Note: It was noticed that not all the experimets will have All four
            steps.
          </p>
        </div>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <HowMightWeSection
          quoteText="How might we ensure consistent UI and common interactions throughout the product, rendering it seamlessly integrated and virtually invisible to the user?"
          highlightedText={[
            "consistent UI",
            "common interactions",
            "virtually invisible",
          ]}
          highlightedColors={["lime", "emerald", "violet"]}
          containerClass="pt-4 mt-4"
        />
      </section>
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
        <div className="relative grid w-full grid-cols-2 gap-4 p-8 mt-8 md:grid-cols-4">
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/first-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-sm text-gray-600">Layout 1. Wide layout</p>
          </picture>
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/second-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-sm text-gray-600">
              Layout 2. Drawer layout
            </p>
          </picture>
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/third-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-sm text-gray-600">
              Layout 3. Sidebar layout
            </p>
          </picture>
          <picture className="flex-grow">
            <img
              className="w-full"
              src="../lrnr/case-assets/fourth-layout.svg"
              alt="procees"
            />
            <p className="pt-4 text-sm text-gray-600">Layout 4. Modals</p>
          </picture>
          <DotGridBG />
        </div>
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="text-sm text-purple-500 ">Designing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Fixed Topbar
        </p>

        <p className="mt-4 text-gray-400 text-base/6">
          My focus was on taking advantage of the top bar to show all the
          necessary information to the user in seconds.
        </p>
        <p className="pt-2 text-gray-400 ">
          What is the most important information for a student?
        </p>
        <ul>
          <li className="mt-8 text-gray-400 list-disc">
            Which experiment they are practcing.
          </li>
          <li className="mt-2 text-gray-400 list-disc">Grade Points</li>
          <li className="mt-2 text-gray-400 list-disc">
            Quick Help or Support
          </li>
          <li className="mt-2 text-gray-400 list-disc">
            Exit from the experiment.
          </li>
          <li className="mt-2 text-gray-400 list-disc">
            Accessibility Tools to increase font size, high contrast mode,
            toggle on or off hints etc.
          </li>
        </ul>
        <div className="relative mt-8">
          <img
            className="w-full p-8"
            src="../lrnr/case-assets/topbar.svg"
            alt="procees"
          />
          <DotGridBG />
        </div>
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="text-sm text-purple-500 ">Designing Screen Parts</p>
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
        <div className="relative mt-8">
          <img
            className="w-full p-8"
            src="../lrnr/case-assets/bottom-bar.svg"
            alt="procees"
          />
          <DotGridBG />
        </div>
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="text-sm text-purple-500 ">Designing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Simplifying access to find Materials, Apparatus, Tasks, and Answers.
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          Implementing a drawer or shelf-type feature to conveniently store
          materials, apparatus, tasks, and answers for each experiment enhances
          findability and usability.
        </p>
        <img
          className="w-full pt-16 mt-8"
          src="../lrnr/case-assets/side-bar-2x.png"
          alt="procees"
        />
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="text-sm text-purple-500 ">Designing Screen Parts</p>
        <p className="mt-4 text-balance text-2xl tracking-[-0.015em] ">
          Experiment Canvas
        </p>
        <p className="mt-4 text-gray-400 text-base/6">
          This is the area where the student will spend most of their time, so
          it has to be as simple and informative as possible. The main area
          displays reading materials, videos, and instructions. Students can
          perform the procedure in this part of the layout.
        </p>

        <ul>
          <li className="mt-8 text-gray-400 list-disc">
            Displays Main Content, that is designed and developed by the
            instrctors.
          </li>
          <li className="mt-2 text-gray-400 list-disc">
            It can include, Images, Videos, Tables, Rich Formatted Text, The
            Layout can be multi columns.
          </li>
          <li className="mt-2 text-gray-400 list-disc">
            Displays onScreen hints, success or failure states
          </li>
          <li className="mt-2 text-gray-400 list-disc">
            This type of screen will also change with experiment to experiment.
          </li>
        </ul>
        <img
          className="w-full pt-16 mt-8"
          src="../lrnr/case-assets/main-area-2x.png"
          alt="procees"
        />
      </section>

      <section className="relative mt-8 pb-32 pt-8 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="col-span-3 row-span-1 mt-4 mb-4 ">
          <h2 className="text-lg text-gray-400">Oops! I made a mistake</h2>
          <h3 className="text-xl font-bold">
            What happens if a student makes a mistake?
          </h3>
          <p className="mt-2 text-base text-gray-400">
            Mistakes are an important part of learning. Some mistakes can be
            fixed, while for others, one has to start over.
          </p>
          <p className="mt-2 text-base text-gray-400">
            There are two types of mistakes: reversible and irreversible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <div className="flex flex-row gap-4 p-4 mt-4 bg-zinc-900 rounded-3xl ">
            <div className="flex flex-col gap-8">
              <h3>Reversible Mistake:</h3>
              <p className="text-gray-400">
                If a student forgets to add a required solution into the test
                tube or adds less than the required amount, it can still be
                fixed. Hence, we only warn the student.
              </p>
            </div>
            <img src="../lrnr/case-assets/fixable.svg" alt="" />
          </div>

          <div className="flex flex-row gap-4 p-4 mt-4 bg-zinc-900 rounded-3xl">
            <img src="../lrnr/case-assets/non-fixable.svg" alt="" />
            <div className="flex flex-col gap-8">
              <h3>Irreversible Mistake:</h3>
              <p className="text-gray-400">
                If a student adds the wrong solution or exceeds the required
                amount, it cannot be fixed. In such cases, the student must
                start over.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <SectionTitle
          sectionID="survey"
          subtitle="More details hidden"
          title="For More Indepth Review of this case study, let us connect on a Google Meet "
          customCode={
            <p className="mt-2 text-sm text-gray-400">
              You can find my contact details at bottom of the page.
            </p>
          }
        />
      </section>
      
    </>
  );
}
