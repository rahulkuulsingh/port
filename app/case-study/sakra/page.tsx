// "use client";

import React from "react";
import Image from "next/image";

import { CanvasRevealEffect } from "@/app/Components/UI/CosmeticComponents/Backgrounds/canvas-reveal-effect";
import Folder from "@/app/Components/UI/Folder/Folder";
import Video from "@/app/Components/Video";
import StickyNotes from "@/app/Components/UI/Figjam/StikcyNotes";
import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";


import DotGridBG from "@/app/Components/UI/CosmeticComponents/Backgrounds/DotGridBG";
import TableOfContents from "@/app/Components/navigation/ContentStickyNav/TableOfContents";
import SectionTitle from "@/app/Components/SectionTitle";

import IntroductionGrid from "@/app/Components/IntroductionGrid";

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
        title={"Mobile and Web App for Sakra World Hospital."}
        subTitle={"B2C Mobile and Web App"}
        subTitleColor={"blue"}
        description={
          "An advanced, multispecialty hospital that aims to serve quality healthcare services in over 20 different fields, covering various problems disorienting the human anatomy."
        }
        roleContent={[
          "The goal is to create an easy and simple appointment booking system that minimizes long queues and wait times.",
          "My responsibilities include designing the interface and user experience for both the mobile and web applications.",
        ]}
        teamContent={["Rashid", "Anil", "Sampth", "Prabhat", "Vidya"]}
        timeline={"2019 - 2020"}
      />

      <div className="relative max-w-[80rem] mx-auto mt-16 pt-16">
        <HowMightWeSection
          quoteText="Sakra is a multidisciplinary hospital that attracts patients from all over India seeking medical care. Although Sakra has 300 beds, it is not sufficient to meet the high demand. Often, there is a long queue, this project aims to reduce wait times and improve overall patient experience."
          highlightedText={[
            "long queue",
            "project aims to reduce wait times",
            "improve overall patient experience",
          ]}
          highlightedColors={["fuchsia", "orange", ""]}
          containerClass="my-8"
        />
      </div>
      <div className="box-border flex flex-col flex-no-wrap">
        <TableOfContents items={tocItems} />
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <div className="relative">
            <SectionTitle
              sectionID="survey"
              title="We will focus on three key areas to improve the patient experience."
              subtitle="How it all started?"
            />
          </div>
        </section>
        <div className="relative max-w-[80rem] mx-auto mt-16 pt-4 dark:text-black ">
          <div className="grid grid-col-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col bg-blue-100 gap-8  rounded-xl p-4 pb-8">
              <div className="flex gap-4 items-center ">
                <img
                  src="../sakra/case-assets/connect.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-blue-600 font-semibold	text-lg">Connect</p>
                  <p>Patient with Doctors</p>
                </div>
              </div>
              <p className="text-sm">
                Find and book appointment with doctors easily by name,
                specialty, or by symptoms
              </p>
            </div>
            <div className="flex flex-col bg-orange-100 gap-8  rounded-xl p-4 pb-8">
              <div className="flex gap-4 items-center ">
                <img
                  src="../sakra/case-assets/manage.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-orange-400 font-semibold	text-lg">Manage</p>
                  <p>Health Records, Bookings</p>
                </div>
              </div>
              <p className="text-sm">
                Users can download health reports and manage bookings. They can
                cancel or reschedule appointments.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 gap-8  rounded-xl p-4 pb-8">
              <div className="flex gap-4 items-center ">
                <img
                  src="../sakra/case-assets/pay.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-green-600 font-semibold text-lg">Pay</p>
                  <p>Hospital Bills</p>
                </div>
              </div>
              <p className="text-sm">
                User can pay their hospital bills, can make deposits or they can
                purchase health packages online.
              </p>
            </div>
          </div>
        </div>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="Research Phase"
            title="The app has diverse users, so we conducted user interviews to understand their needs."
          />
          <p className="text-gray-400 mt-4">It is important to understand the different user groups who will be using the application. Listening to their stories will help us achieve this goal.</p>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] mx-auto relative sm:max-w-[40rem] w-full">
        <div className="relative max-w-[80rem] mx-auto mt-16 pt-4  ">
          <div className="grid grid-col-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col bg-zinc-900 gap-8  rounded-xl p-4 pb-8">
              <div className="flex gap-4 items-center ">
                <img
                  src="../sakra/case-assets/connect.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-blue-600 font-semibold	text-lg">Ramesh Roy</p>
                  <p>Manager at MNC</p>
                  <p className="text-xs">Bengaluru, KA</p>
                </div>
              </div>
              <p className="text-sm">
                Find and book appointment with doctors easily by name,
                specialty, or by symptoms
              </p>
            </div>
            <div className="flex flex-col bg-zinc-900 gap-8  rounded-xl p-4 pb-8">
              <div className="flex gap-4 items-center ">
                <img
                  src="../sakra/case-assets/connect.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-blue-600 font-semibold	text-lg">Deepti Jha</p>
                  <p>Home Maker</p>
                  <p className="text-xs">Indore, MP</p>
                </div>
              </div>
              <p className="text-sm">
                Find and book appointment with doctors easily by name,
                specialty, or by symptoms
              </p>
            </div>
            <div className="flex flex-col bg-zinc-900 gap-8  rounded-xl p-4 pb-8">
              <div className="flex gap-4 items-center ">
                <img
                  src="../sakra/case-assets/connect.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-blue-600 font-semibold	text-lg">G. Maniraj</p>
                  <p>Engineering student</p>
                  <p className="text-xs">Anantapur, AP</p>
                </div>
              </div>
              <p className="text-sm">
                Find and book appointment with doctors easily by name,
                specialty, or by symptoms
              </p>
            </div>
          </div>
        </div>
        </section>
        </div>

    </>
  );
}
