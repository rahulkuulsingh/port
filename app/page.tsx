import React from "react";
import Card from "@/app/Components/Card";
import insiderDesktop from "@/public/insider/insider-desktop-2x.png";
import sakraDesktop from "@/public/sakra/sakra-desktop-2x.png";
import lrnrDesktop from "@/public/lrnr/lrnr-virtual-sim-desktop-2x.png";
import figma from "@/public/figma-community/figma.png";
import RevealAboutMe from "./Components/RevealAboutMe";
import SectionTitle from "./Components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="max-w-5xl px-8 m-auto">
        <RevealAboutMe />
        <SectionTitle
          sectionID="recent-work"
          title="Checkout My Recent Work"
          subtitle="Click on any project to learn more about it."
        />
        <div className="grid grid-cols-1 gap-4 pb-4 mx-auto mt-8 md:grid-cols-2 ">
          <Card
            containerclassName="col-span-1 md:col-span-2"
            cardClassName="flex flex-col gap-4 rounded-lg bg-white	shadow-xl overflow-clip md:row-span-1 md:flex-row  dark:bg-zinc-900 text-xs"
            title="Enhancing Usability of Architect."
            // tags={[
            //   { link: "#", label: "B2B" },
            //   { link: "#", label: "SASS" },
            //   { link: "#", label: "Marketing Automation" },
            // ]}
            role="Product Designer, @Insider"
            projectDate="2021 - 2023"
            team="Sarper, Blazenko, Nour, Cansu, Barim"
            caseLink="/case-study/insider"
            showGrowthMetrics={true}
            cardImage={insiderDesktop.src}
          />
          <Card
            title="Designing 20+ end to end virtual simulations."
            // tags={[
            //   { link: "#", label: "B2B" },
            //   { link: "#", label: "SASS" },
            //   { link: "#", label: "Ed-tech" },
            //   { link: "#", label: "Mobile App" },
            //   { link: "#", label: "Web App" },
            // ]}
            role="Product Designer"
            projectDate="2021 - 2023"
            team="Dr. Lang, Chaitnya, Prajin, Ventak, Mohan"
            caseLink="/case-study/lrnr"
            showGrowthMetrics={false}
            cardImage={lrnrDesktop.src}
          />

          <Card
            title="Mobile and Web App for Sakra world hospital."
            // tags={[
            //   { link: "#", label: "B2C" },
            //   { link: "#", label: "Mobile App" },
            //   { link: "#", label: "Web App" },
            // ]}
            role="Product Designer"
            projectDate="2021 - 2023"
            team="Sampath Kumar, Rashid Ansari, Prabhat, Divya"
            caseLink="/case-study/sakra"
            showGrowthMetrics={false}
            cardImage={sakraDesktop.src}
          />
        </div>

        <section className="mt-16 pb-32 pt-16 mx-auto w-full sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <SectionTitle
            title="My Figma Community Profile"
            subtitle="Some design experiments to hone my skills"
            sectionID={"gallary"}
          />
          <div className="m-auto">
            <Link href="https://example.com" passHref>
              <div className="relative group flex">
                {/* On hover, display this paragraph */}
                <p className="absolute inset-0 flex items-center px-4 py-2 bg-black/[.05] justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white z-10">
                  Click to Visit Figma Community See all Designs
                </p>
                {/* On hover, blur this image with an ease-in transition */}
                <Image
                  src={figma}
                  alt="community page"
                  className="transition cubic-bezier(0, 0.85, 0.63, 0.99) duration-150 group-hover:blur-sm mt-8 "
                />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
