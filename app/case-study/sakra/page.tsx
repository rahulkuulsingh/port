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
import userFlow from "@/public/sakra/case-assets/useFlow.svg";
import navigation from "@/public/sakra/case-assets/navigation.svg";
import wireframe from "@/public/sakra/case-assets/wireframe.png";
import desktopSearchDoctors from "@/public/sakra/case-assets/desktop-SearchDoctors.png";
import mobileSearchDoctors from "@/public/sakra/case-assets/mobile-SearchDoctors.png";

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
    "Can &apos;t copy and paste entire branches or multiple elements at once.",
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
        containerClassName=""
        gradientClassName="from-indigo-500"
        animationSpeed={0.8}
        colors={[[255, 255, 255]]}
      />

      <IntroductionGrid
        title={"Simplifying patients lives with easy appointment scheduling and medical record access."}
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
        <div className="relative max-w-[80rem] mx-auto mt-16 pt-4 text-black ">
          <div className="grid gap-4 grid-col-1 md:grid-cols-3">
            <div className="flex flex-col gap-8 p-4 pb-8 bg-blue-100 rounded-xl">
              <div className="flex items-center gap-4 ">
                <img
                  src="../sakra/case-assets/connect.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-blue-600">Connect</p>
                  <p>Patient with Doctors</p>
                </div>
              </div>
              <p className="text-sm">
                Find and book appointment with doctors easily by name,
                specialty, or by symptoms
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-orange-100 rounded-xl">
              <div className="flex items-center gap-4 ">
                <img
                  src="../sakra/case-assets/manage.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-orange-400">Manage</p>
                  <p>Health Records, Bookings</p>
                </div>
              </div>
              <p className="text-sm">
                Users can download health reports and manage bookings. They can
                cancel or reschedule appointments.
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-green-100 rounded-xl">
              <div className="flex items-center gap-4 ">
                <img
                  src="../sakra/case-assets/pay.svg"
                  height={64}
                  width={64}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-green-600">Pay</p>
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
          <p className="mt-4 text-gray-400">
            It is important to understand the different user groups who will be
            using the application. Listening to their stories will help us
            achieve this goal.
          </p>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] mx-auto relative sm:max-w-[40rem] w-full">
          <div className="relative max-w-[80rem] mx-auto mt-16 pt-4  ">
            <div className="grid gap-4 grid-col-1 md:grid-cols-3">
              <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
                <div className="flex items-center gap-4 ">
                  <img
                    src="../sakra/case-assets/connect.svg"
                    height={64}
                    width={64}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-blue-600">
                      Ramesh Roy
                    </p>
                    <p>Manager at MNC</p>
                    <p className="text-xs">Bengaluru, KA</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  When I want to consult a doctor I want to know the timings as
                  I am mostly busy on projects I work on.
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Some times, when a sudden meeting is organized and I am also
                  part of the meeting I want to reschedule my appointments or
                  may be cancel them.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Going physically to a hospital or lab to collect lab reports
                  takes time, I wish If I can access the reports on my mobile
                  phone or laptop, without me physically going to collect it.
                </p>
              </div>
              <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
                <div className="flex items-center gap-4 ">
                  <img
                    src="../sakra/case-assets/connect.svg"
                    height={64}
                    width={64}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-blue-600">
                      Deepti Jha
                    </p>
                    <p>Home Maker</p>
                    <p className="text-xs">Indore, MP</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  My younger son has kidney problems, he goes through dialysis
                  three times every week. So it &apos;s important for me to know
                  his health status.
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  I want to closely monitor his health status, see reports, and
                  want to consult with a doctor whenever we have an emergency.
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Making payments is a hassle for us. I want to make online
                  payments, and want to keep track of payment history.
                </p>
              </div>
              <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
                <div className="flex items-center gap-4 ">
                  <img
                    src="../sakra/case-assets/connect.svg"
                    height={64}
                    width={64}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-blue-600">
                      G. Maniraj
                    </p>
                    <p>Engineering student</p>
                    <p className="text-xs">Anantapur, AP</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  I stay in a hostel, but mom and dad stay at home. As I am not
                  staying with them, it will be convenient for me to book
                  appointments from my hostel.
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Dad is a diabetes patient, I want to see his reports and take
                  actions accordingly.
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  As dad wants to consult with the same doctor, I want to have a
                  quick option to book an appointment with the same doctor he
                  consulted with last time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="Reasearch Phase - Hypothesis Formation"
            title="The following hypothesis can be formed by synthesizing the data obtained from the
interview done earlier."
          />
          <div className="grid gap-4 grid-col-1 md:grid-cols-3">
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <p className="mt-2 text-sm text-gray-400">
                Patients will find it easier to search for doctors by symptoms
                or specialty, but it &apos;s good to have the option to let them
                search by doctor name as well.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Allowing the patient to visit the nearest facility will help
                them save time. It will also reduce traffic in the main branch
                of the hospital.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Patients or family members often want to know more about the
                doctor, their experience, specialty, education, etc. It creates
                trust and good relations between patients and doctors.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Keeping track of visit history and reminding patients of
                upcoming appointments will be a nice idea, as sometimes users
                forget about their appointments.
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <p className="mt-2 text-sm text-gray-400">
                It will be a good idea to remind the patient to take medicine on
                time as prescribed by the doctor or physician.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Allow patients to make appointments on their preferred date and
                time. But if the doctor is not available on the selected date or
                time, don &apos;t allow booking for the same.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Access to lab reports and case sheets will help patients know
                more about their health. It will also save their time as they
                won &apos;t have to physically collect it.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Giving options to book health checkups on a specific date can be
                implemented, though users will have to visit the hospital or lab
                physically if required.
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <p className="mt-2 text-sm text-gray-400">
                Giving the option to reschedule appointments will greatly help
                busy professionals.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Giving options to make and track payments online will not only
                save time but also be easier and more convenient.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Some patients visit the same doctor multiple times in a week or
                a month. Allowing them to save doctors as favorites will be a
                time saver as they won &apos;t have to search again.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Some patients visit the same doctor multiple times in a week or
                a month. Allowing them to save doctors as favorites will be a
                time saver as they won &apos;t have to search again.
              </p>
            </div>
          </div>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="Reasearch Phase - Privacy and Security"
            title="Health care data is very sensitive. Users want to know who has access to their data. Hence, privacy and security are top priorities while designing and developing these apps."
          />
          <div className="grid gap-4 grid-col-1 md:grid-cols-3">
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <h3 className="text-lg font-semibold">
                Two Factor Authentication
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Every time a user logs in, after entering the user credentials,
                the user will have to enter the OTP sent to their registered
                mobile number and email ID. If successful, the user will be
                logged in.
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <h3 className="text-lg font-semibold">
                Allowing users to change their password.
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Passwords are painful if one forgets it. It&#39;s 8 characters
                long, with at least one small letter, one capital letter, and
                one special character. Users may forget their password or
                someone may have gotten access to their account. To prevent
                this, users can change their password and their registered
                mobile number.
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <h3 className="text-lg font-semibold">
                Recovery and security questions.
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                If the user forgets their password, they will have to answer
                security questions. Then they will be prompted to enter the
                registered mobile number and finally enter an OTP to
                authenticate their identity. Once successfully done, they can
                now change their password.
              </p>
            </div>
            <div className="flex flex-col gap-8 p-4 pb-8 bg-zinc-900 rounded-xl">
              <h3 className="text-lg font-semibold">Limited access of data.</h3>
              <p className="mt-2 text-sm text-gray-400">
                Patient data is only available to previously consulted doctors
                and can be given to any other doctor if the patient grants
                access to them.
              </p>
            </div>
          </div>
        </section>
        <section className="relative max-w-[80rem] mx-auto mt-16 pt-16 w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="Designing - Information Architecture"
            title="Based on user goals and business needs, I designed the user flow."
          />
          <div className="relative w-full ">
            <Image
              src={userFlow}
              alt="Image description"
              className="w-full p-4"
            />
            <DotGridBG />
          </div>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="Initial Design - Wireframing Navigation Structure"
            title="How would User Navigate for different requirements?"
            customCode={
              <p className="mt-2 text-sm text-gray-400">
                Based on the Research and Infomation acrhitcture, the user has
                Invoked this app to do the Following. Find Relavant Doctors for
                their sympotoms, Book a Consultation either - in person or
                video, Book a health Checkup, View Their health records, Pay
                Bills or talk to customer care or call an ambulance.
              </p>
            }
          />
          <div className="relative w-full ">
            <Image src={navigation} alt="" className="p-4" />
            <DotGridBG />
          </div>
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <SectionTitle
            sectionID="survey"
            subtitle="Initial Design - Key User Flow - Find a Doctor"
            title="Patients don't need to know the doctor's name. They can search by symptoms."
            customCode={
              <p className="mt-2 text-sm text-gray-400">
                Symptom-based searches allows patients to find the best
                available doctor with ease.
              </p>
            }
          />
        </section>
        <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
          <Image src={desktopSearchDoctors} alt="" className="p-4" />
          <Image src={mobileSearchDoctors} alt="" className="p-4 m-auto" />
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
      </div>
    </>
  );
}
