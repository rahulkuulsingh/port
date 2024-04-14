import { Card } from "./ui/card";
import insiderDesktop from "./public/insider-desktop/insider-desktop-2x.png";
import sakraDesktop from "./public/sakra-desktop/sakra-desktop-2x.png";
import lrnrDesktop from "./public/lrnr-desktop/lrnr-virtual-sim-desktop-2x.png";
import abbDesktop from "./public/abb-desktop/abb-desktop-2x.png";


function Home() {
  return (
    <>
      <h1 className="mb-8 text-2xl  font-semibold tracking-tighter">
        A little about me
      </h1>
      <div className="short-bio 	 md:w-1/2 text-xm md:text-base">
        <p className="mb-4">
          Hey, I&apos;m Rahul. I&apos;m a product designer. I&apos;m currently
          building Architect at Insider. This is an app that empowers marketers
          to create fast and efficient automated marketing campaigns.
        </p>
        <p className="mb-4">
          Before Architect, I spent my time at Lrnr (learner an edTech startup)
          designing web and mobile apps for medical grad students, this app was
          adopted by top community colleges in USA.
        </p>
        <p>
          Before Lrnr, I worked on projects like designing experiences for
          hospitals and patients, I also worked on a machinery automation tools
          for ABB at Cosmonet solutions.
        </p>
        <p>
          Before that, I designed student experiences for online examination at
          Paramount Coahing Center.
        </p>
        <p>
          I originally started designing when I was in college, I did
          freelancing for two years on 99designs
        </p>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-4 mt-8 pb-4 md:grid-cols-6">
        <h2>Recent Work</h2>
        <p>Click on any project to learn more about it.</p>
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
          cardImage={insiderDesktop}
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
          cardImage={lrnrDesktop}
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
          cardImage={sakraDesktop}
        />
        <Card
          className="md:col-span-6 md:row-span-1 lg:flex-row"
          title="Drive and Motor Specifications Web App"
          tags={[
            { link: "https://example.com", label: "B2B" },
            {
              link: "https://example.com",
              label: "Machinery Automation Tools",
            },
            { link: "https://example.com", label: "Web App" },
          ]}
          role="Product Designer"
          projectDate="2021 - 2023"
          team="Sarper, Blazenko, Nour, Cansu, Barim"
          caseLink="/case-study/sakra"
          showGrowthMetrics={false}
          cardImage={abbDesktop}
        />
      </div>

      <section className="gallery">
        <h2>Checkout more of my work in Gallery</h2>
        <p>A space for my creative freedom, paid and voluntary project etc.</p>
        <div className="gallery-items">

        </div>
      </section>
    </>
  );
}
export default Home;
