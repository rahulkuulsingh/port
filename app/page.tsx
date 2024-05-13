import React from "react";
import Card from "@/app/Components/Card";
import insiderDesktop from "@/public/insider/insider-desktop-2x.png";
import sakraDesktop from "@/public/sakra/sakra-desktop-2x.png";
import lrnrDesktop from "@/public/lrnr/lrnr-virtual-sim-desktop-2x.png";
import abbDesktop from "@/public/abb/abb-desktop-2x.png";
import RevealAboutMe from "./Components/RevealAboutMe";
import SectionTitle from "./Components/SectionTitle";

function Home() {
  return (
    <>
      <div className="max-w-5xl m-auto px-8">
        <RevealAboutMe />
        <SectionTitle
        sectionID="recent-work"
          title="Checkout My Recent Work"
          subtitle="Click on any project to learn more about it."
        />
        <div className="mx-auto grid max-w-screen-2xl gap-4 mt-8 pb-4 md:grid-cols-6">
          <Card
            className="md:col-span-6 md:row-span-1 lg:flex-row"
            title="Enhancing Usability of Architect."
            tags={[
              { link: "/https://example.com", label: "B2B" },
              { link: "https://example.com", label: "SASS" },
              { link: "https://example.com", label: "Marketing Automation" },
            ]}
            role="Product Designer, @Insider"
            projectDate="2021 - 2023"
            team="Sarper, Blazenko, Nour, Cansu, Barim"
            caseLink="/case-study/insider"
            showGrowthMetrics={true}
            cardImage={insiderDesktop.src}
          />
          <Card
            className="md:col-span-3 md:row-span-1"
            title="Designing 20+ end to end virtual simulations"
            tags={[
              { link: "https://example.com", label: "B2B" },
              { link: "https://example.com", label: "SASS" },
              { link: "https://example.com", label: "Ed-tech" },
              { link: "https://example.com", label: "Mobile App" },
              { link: "https://example.com", label: "Web App" },
            ]}
            role="Product Designer"
            projectDate="2021 - 2023"
            team="Sarper, Blazenko, Nour, Cansu, Barim"
            caseLink="/case-study/lrnr"
            showGrowthMetrics={false}
            cardImage={lrnrDesktop.src}
          />

          <Card
            className="md:col-span-3 md:row-span-1 "
            title="Mobile and Web App for Sakra world hospital"
            tags={[
              { link: "https://example.com", label: "B2C" },
              { link: "https://example.com", label: "Mobile App" },
              { link: "https://example.com", label: "Web App" },
            ]}
            role="Product Designer"
            projectDate="2021 - 2023"
            team="Sarper, Blazenko, Nour, Cansu, Barim"
            caseLink="/case-study/sakra"
            showGrowthMetrics={false}
            cardImage={sakraDesktop.src}
          />
        </div>
        <SectionTitle
          title="Checkout more of my work in Gallery"
          subtitle="Exploring design by doing it" sectionID={"gallary"}        />
      </div>
    </>
  );
}
export default Home;
