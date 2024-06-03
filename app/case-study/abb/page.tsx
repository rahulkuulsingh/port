import Image from "next/image";
import StickyNotes from "@/app/Components/UI/Figjam/StikcyNotes";
import DotGridBG from "@/app/Components/UI/CosmeticComponents/Backgrounds/DotGridBG";
import HowMightWeSection from "@/app/Components/UI/Quote/HowMightWe";
import SectionTitle from "@/app/Components/SectionTitle";

// static Images
import projectFeaturedImage from "@/public/abb/case-assets/project-featured-image.png";
import sheet from "@/public/abb/case-assets/sheet.png";
import sheetAnotated from "@/public/abb/case-assets/sheet-anotated.png";
import sheetAnotatedMore from "@/public/abb/case-assets/sheet-anotated-more.png";
import emptyRemoved from "@/public/abb/case-assets/removed-empty.png";
import workflow from "@/public/abb/case-assets/project-image-4.svg";
import switchViews from "@/public/abb/case-assets/switchViews.svg";
import finalWireFrame from "@/public/abb/case-assets/abb-wireframe.svg";
import newNavigation from "@/public/abb/case-assets/newNavigation.svg";
import dashboardHome from "@/public/abb/case-assets/dashboardHome.svg";
import closingImage from "@/public/abb/case-assets/closingImage.png";
import Video from "@/app/Components/Video";
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
              Let&apos;s start by looking at the sheet that needs to be
              converted to a web app.
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
              Let&apos;s break down why people hated their workflow when dealing
              with the sheet.
            </p>
            <p className="mt-4 text-balance text-xl tracking-[-0.015em] bg-[#FF4800] max-w-fit">
              Primary Problem
            </p>
            <p className="mt-4 text-gray-400 text-base/6">
              To view the entire document, the user would need four laptops side
              by side, which is obviously not possible. As a result, they have
              to scroll horizontally to see the entire document. This is a very
              tedious task, and it&apos;s very easy to lose track of where you are in
              the document.
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
          Lets reframe the Problem statement
        </p>
        <HowMightWeSection
          quoteText="Users at ABB are constantly zooming in and out, scrolling left and right and are struggling to find the appropriate content because important data is off canvas, which makes comparing and editing data difficult."
          highlightedText={[
            "constantly zooming in and out",
            "scrolling left and right",
            "struggling to find the appropriate content",
            "important data is off canvas",
            "comparing and editing data difficult",
          ]}
          highlightedColors={["lime", "fuchsia", "rose"]}
          containerClass="my-8"
        />
      </div>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID={""}
          title=" Logically hide empty or irrelevant columns."
          subtitle="Trying to reduce the side scroll, solution to the first problem"
        />
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          We first define the project type, and then based on it, we hide
          irrelevant and empty columns.
        </p>
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-8 max-w-lg">
          I also added proper labels to the column groups, as demonstrated
          below.
        </p>

        <Image src={emptyRemoved} alt="an image that displays a motor" />
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID={""}
          title="Adding Support for Shortcuts and Predefined Layouts."
        />
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          After hiding the empty & irrelevant columns, it&apos;s much easier to
          work. But the side scroll still exists. So if the user wants to
          compare input with output 2, they still will have to scroll all the
          way to the right. To minimize this issue, we created the prebuilt
          layout.
        </p>
        <div className="relative mt-8">
          <Image
            src={switchViews}
            alt="an image that displays a motor"
            className="p-4"
          />
          <DotGridBG />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 p-4 ">
          <div className="flex flex-col">
            <p>Layout 1. “The standard view”</p>
            <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
              In this show all the column groups - i.e. Input, Motor Output,
              Catalog data, Drive Output.
            </p>
          </div>
          <div className="flex flex-col">
            <p>Layout 1. Layout 2. “Motor Output”</p>
            <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
              In this show all the column groups - i.e. Input, Motor Output,
              Catalog data, Drive Output.
            </p>
          </div>
          <div className="flex flex-col">
            <p>Layout 1. Layout 3. “Drive Output”</p>
            <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
              In this show all the column groups - i.e. Input, Motor Output,
              Catalog data, Drive Output.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID={""}
          title="Better & easier way to hide columns and col-groups using mouse/trackpad."
        />
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          Almost all the users were heavily using the mouse or the laptop
          trackpad to navigate. So instead of hiding a column group, We came up
          with a way to minimize the group. When a user double taps the column
          group name, it shrinks it’s width which is still visible and can be
          expanded again by double tapping on it.
        </p>
        <div className="relative mt-8">
          <video controls={true} autoPlay muted loop>
            <source
              src={"../abb/videos/show-hide-columns.webm"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          this solution could not be implemented because of technical constraints.

          </p>
        </div>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID=""
          title="Final Design for the New Dashboard"
          subtitle=""
        />
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          Now that the user can hide empty columns, switch between layouts, it
          was time to create the dashboard.
        </p>
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          Based on Project Type, Sidebar contains all the sheets. The user can
          switch between sheets by clicking on the sheet name. It opens up a new
          tab or switches to the existing tab if it&apos;s already open.
        </p>

        <div className="relative mt-8">
          <Image
            src={finalWireFrame}
            alt="an image that displays a motor"
            className="p-4"
          />

          <DotGridBG />
        </div>
        <p className=" text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4 max-w-lg">
          User can also switch projects from the sidebar as they may be working
          on multiple projects.
        </p>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID="finalDesign"
          title="Updated workflow for Creating a New Project"
          subtitle=""
        />
        <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
          When a user logs in, they first see a Dashboard, where all the
          documents that they have created are listed. They can start a new
          project or open an exsisting one right from here.
        </p>
        <div className="relative mt-8">
          <Image
            src={newNavigation}
            alt="an image that displays a motor"
            className="p-4"
          />

          <DotGridBG />
        </div>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID="finalDesign"
          title="Dashboard Wireframe"
          subtitle=""
        />
        <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
          The platform features a listing page displaying all the projects a
          user has created. Users can easily view files shared with them and
          perform various actions such as creating a new project, renaming,
          duplicating, or deleting existing ones.
        </p>
        <div className="relative mt-8">
          <Image
            src={dashboardHome}
            alt="an image that displays a motor"
            className="p-4 w-full"
          />

          <DotGridBG />
        </div>
        <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
          Everything at this point looks good. Scroll is minimum, cells sizes
          are bigger than before, font is now 12pt @85% zoom, Hiding/showing
          column groups is significantly easier.
        </p>
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID="finalDesign"
          title="One more problem I wanted solve but it was out of the scope"
          subtitle="User manually fill in the details sent by vendor"
        />
        <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
          While creating a new project, different vendors usually send a .pdf
          document, with their requirements and specifications. Feeding this
          data into the system takes time as this process is manual. This
          usually takes ~3 hours.
        </p>
        <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
          This time can be minimized if we can copy the data from .pdf file
          directly to the system to start the project with. I was not able to
          work on this problem.
        </p>
        <Image
          src={closingImage}
          alt="an image that displays a motor"
          className="w-full"
        />
      </section>
      <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <SectionTitle
          sectionID="finalDesign"
          title="The final design reduced user frustration regarding scrolling and creating new projects."
          subtitle="Conclusion"
        />
        <p className="text-balance text-gray-400 pt-4  tracking-[-0.015em] mb-4">
          That&apos;s it for this project. Reach out if you have a similar
          problem and want to solve the problem together.
        </p>
      </section>
    </>
  );
}
