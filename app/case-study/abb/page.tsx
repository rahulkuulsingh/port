import Image from "next/image";
import StickyNotes from "@/app/Components/UI/Figjam/StikcyNotes";
import DotGridBG from "@/app/Components/UI/CosmeticComponents/Backgrounds/DotGridBG";
import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";

// static Images
import projectFeaturedImage from "@/public/abb/case-assets/project-featured-image.png";
import sheet from "@/public/abb/case-assets/sheet.png";
import sheetAnotated from "@/public/abb/case-assets/sheet-anotated.png";
import sheetAnotatedMore from "@/public/abb/case-assets/sheet-anotated-more.png";
import workflow from "@/public/abb/case-assets/project-image-4.svg";
export default function Lrnr() {
  const userInterViewQuestions = [
    "How are people interacting with the current product?",
    "What is their workflow like?",
    "Why do they use this workbook?",
    "Is there a sheet they spend more time on; than others?",
    "Why are so many columns empty?",
    "How do they identify if they have made a mistake?",
    "Why are some columns colored differently?",
    "What is the most important information on the sheet?",
    "What does the toggle button hide?",
    "How many times do they use the toggle button?",
    "How do they type all these details in the sheet?",
  ];
  return (
    <>
      <section className=" mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="flex flex-col col-span-4  ">
            <h2 className="pb-8 text-sm text-purple-500">
              Intranet Web Application &#40;Internal Product&#41;
            </h2>
            <h1 className="max-w-4xl text-balance text-3xl/9  tracking-tight  sm:text-5.5xl md:text-6xl">
              Converting Excel Sheet into a Web App.
            </h1>
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              An internal product, that is used for selecting the optimal
              combination of a motor, frequency converter, and transformer in
              Paper Factory. It can also be used to calculate network harmonics
              and create dimensioning documents.
            </p>
          </div>
          <Image
            src={projectFeaturedImage}
            alt="an image that displays a motor"
            className="col-span-2"
          />
        </div>
        <div className="my-role isolate mt-24 grid grid-cols-1 border border-black/[.075] dark:border-white/[.075] sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative z-10 col-start-1 row-start-1 px-6 py-8">
            <h2 className="text-balance text-xl tracking-[-0.015em] ">
              The Projects High Level Context
            </h2>
            <p className="mt-3 text-gray-400 text-sm/5">
              Convert the MS Excel workbook into a web application.
            </p>
          </div>
          <ul
            role="list"
            className="relative flex flex-wrap col-start-1 isolate col-span-full sm:row-start-1"
          >
            <li className="flex w-full flex-none flex-col items-start border-t border-black/[.075] dark:border-white/[.075] px-6 py-8 sm:ml-[50%] sm:w-1/2 sm:border-l sm:border-t-0 lg:ml-[25%] lg:w-1/4">
              <h3 className="mt-6 text-sm font-medium ">My Role</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">
                I was responsible for - layout & navigation.
                <br />
                <br />
                UI and UX Design, Interaction Design
              </p>
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t border-black/[.075] dark:border-white/[.075]  px-6 py-8 sm:w-1/2 lg:w-1/4 lg:border-l lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Team Structure</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">
                <span>Design Team: Rahul</span>
                <br />
                Manjunath, Rashid Ansari, Penchala.
              </p>
            </li>
            <li className="flex w-full flex-none flex-col items-start border-t border-black/[.075] dark:border-white/[.075]  px-6 py-8 sm:w-1/2 sm:border-l lg:w-1/4 lg:border-t-0">
              <h3 className="mt-6 text-sm font-medium ">Project Timeline</h3>
              <p className="mt-2 mb-auto text-gray-400 text-sm/5">2 Months</p>
            </li>
          </ul>
        </div>
      </section>

      <section className=" mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative">
          <header className="max-w-2xl mb-8">
            <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
              Let's start by looking at the sheet that needs to be converted to
              a web app.
            </p>
            <p className="mt-4 text-gray-400 text-base/6">
              After closely inspecting the sheet and talking to the users, I
              documented the reasons why people want to convert it into a web
              app.
            </p>
          </header>
          <Image src={sheet} alt="an image that displays a motor" />
        </div>
      </section>
      <section className=" mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="relative">
          <header className="max-w-2xl mb-8">
            <p className="mt-4 text-balance text-3xl tracking-[-0.015em] ">
              Let's break down why people hated their workflow when dealing with
              the sheet.
            </p>
            <p className="mt-4 text-balance text-xl tracking-[-0.015em] bg-[#FF4800] max-w-fit">
              Primary Problem
            </p>
            <p className="mt-4 text-gray-400 text-base/6">
              To view entire document the user will need 4 laptops side by side,
              obviouslly it's not possible. So, they have to scroll horizontally
              to view the entire document. This is a very tedious task and it's
              very easy to lose track of where you are in the document.
            </p>
          </header>
          <Image src={sheetAnotated} alt="an image that displays a motor" />

          <div className="relative max-w-[80rem] mx-auto mt-16 pt-16">
            <p className="mt-4 text-balance text-xl tracking-[-0.015em] bg-[#FF4800] max-w-fit mb-8">
              The primary problem led to additional pain points.{" "}
            </p>
            <Image
              src={sheetAnotatedMore}
              alt="an image that displays a motor"
            />
          </div>
        </div>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className="ml-8 mt-4 text-balance text-xl tracking-[-0.015em] bg-yellow-300 text-black max-w-fit ">
          I had more questions than answers. So, I decided to conduct user
          interviews.
        </p>
        <p className="ml-8 text-balance text-xl tracking-[-0.015em] bg-yellow-300 text-black max-w-fit mb-8">
          Focusing mainly on workflow
        </p>

        <div className=" inline-flex flex-wrap pt-8 mt-8">
          {userInterViewQuestions.map((item, index) => (
            <StickyNotes
              key={index}
              content={item}
              containerClassName="text-sm hover:bg-rose-500"
            />
          ))}
        </div>
        <DotGridBG />
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <p className=" text-balance text-xl tracking-[-0.015em] bg-yellow-300 text-black max-w-fit mb-8">
          Existing workflow
        </p>
        <p className=" text-balance text-gray-400 tracking-[-0.015em] mb-8 max-w-lg">
          The vendor emails the data in PDF format, which then needs to be
          copied over to this sheet. This process takes 4-6 hours, depending on
          the requirements. Every project starts by copying a master sheet from
          the local <span className="text-yellow-300">Intranet Network</span>.
          diagram below shows the workflow.
        </p>

        <Image src={workflow} alt="an image that displays a motor" />
        <p className=" text-balance text-gray-400 tracking-[-0.015em] mb-8 max-w-lg">
          Once the data is copied, Users frequently interact with 3 key sheets -
          LSU, Drive Point MD, and Transformer. Drive Point MD &#40;one of the
          key sheets&#41; has 154 columns.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          <div className="col-span-1 border border-black/[0.075] dark:border-white/[0.15]">
            <p className=" text-balance text-md p-4 tracking-[-0.015em] bg-yellow-300 text-black w-full">
              Why are so many columns empty?
            </p>
            <p className="  text-balance text-gray-400 p-4  tracking-[-0.015em] mb-8 max-w-lg">
              Depending on the{" "}
              <span className="text-yellow-300">Project Type</span> some columns
              will not be used. Hence they are left empty.
            </p>
          </div>
          <div className="col-span-1 border border-black/[0.075] dark:border-white/[0.15]">
            <p className=" text-balance text-md p-4 tracking-[-0.015em] bg-yellow-300 text-black w-full">
              Why are some columns colored differently?
            </p>
            <p className=" text-balance text-gray-400 p-4  tracking-[-0.015em] mb-8 max-w-lg">
              These sheets have 3 kinds of data, Input, Motor Output, Drive
              Output.
            </p>
          </div>
          <div className="col-span-1 border border-black/[0.075] dark:border-white/[0.15]">
            <p className=" text-balance text-md p-4 tracking-[-0.015em] bg-yellow-300 text-black w-full">
              What does the toggle button hide?
            </p>
            <p className=" text-balance text-gray-400 p-4  tracking-[-0.015em] mb-8 max-w-lg">
              The toggle button hides Input, Motor Output, Drive Output Column
              groups.
            </p>
          </div>
          <div className="col-span-1 border border-black/[0.075] dark:border-white/[0.15]">
            <p className=" text-balance text-md p-4 tracking-[-0.015em] bg-yellow-300 text-black w-full">
              How many times do they use the toggle button?
            </p>
            <p className=" text-balance text-gray-400 p-4  tracking-[-0.015em] mb-8 max-w-lg">
              very frequently, as they need to compare the data, based on the
              input and vendor requirement.
            </p>
          </div>
        </div>
      </section>
      <div className="relative max-w-[80rem] mx-auto mt-16 pt-16">
        <p className="mt-4 text-balance text-xl tracking-[-0.015em] bg-sky-300 text-black max-w-fit mb-8">
          Lets reframe the Problem statement</p>
        <HowMightWeSection
          quoteText="Users at ABB are constantly zooming in and out, scrolling left and right and are struggling to find the appropriate content because important data is off canvas, which makes comparing and editing data difficult."
          highlightedText={["constantly zooming in and out", "scrolling left and right" , "struggling to find the appropriate content", "important data is off canvas", "comparing and editing data difficult"]}
          highlightedColors={["lime", "fuchsia", "rose"]}
          containerClass="my-8"
        />
      </div>
    </>
  );
}
