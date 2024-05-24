import React from "react";
import Card from "@/app/Components/Card";
import insiderDesktop from "@/public/insider/insider-desktop-2x.png";
import sakraDesktop from "@/public/sakra/sakra-desktop-2x.png";
import lrnrDesktop from "@/public/lrnr/lrnr-virtual-sim-desktop-2x.png";
import abbDesktop from "@/public/abb/abb-desktop-2x.png";
import RevealAboutMe from "./Components/RevealAboutMe";
import SectionTitle from "./Components/SectionTitle";
import dynamic from "next/dynamic";

const CardNoSSR = dynamic(() => import("@/app/Components/Card"), {
  ssr: false,
});

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
          <CardNoSSR
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
          <CardNoSSR
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

          <CardNoSSR
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


        <SectionTitle
          title="Checkout more of my work in Gallery"
          subtitle="Exploring design by doing it"
          sectionID={"gallary"}
        />
      </div>
    </>
  );
}
export default Home;
