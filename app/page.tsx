import Image from "next/image";
import Link from "next/link";

import RevealAboutMe from "./Components/RevealAboutMe";
import SectionTitle from "./Components/SectionTitle";
// Feature Cards Imports
import InsiderCaseStudy from "./Components/UI/FeaturedCaseStudies/InsiderCaseStudy";
import LrnrCaseStudy from "./Components/UI/FeaturedCaseStudies/LrnrCaseStudy";
import SakraCaseStudy from "./Components/UI/FeaturedCaseStudies/SakraCaseStudy";
// Tech Stack Imports
import TechCard from "./Components/UI/TechStack/TechCard";
// Figma Community Profile
import figma from "@/public/figma-community/figma.png";
import TechStackGrid from "./Components/UI/TechStack/TechStackGrid";
import AnimationGrid from "./Components/UI/Animations/AnimationGrid";

function Home() {
  return (
    <>
      <RevealAboutMe
        sectionID="about-me"
        containerClass="max-w-screen-lg mx-auto px-8 mt-16"
      />
      <section className="w-full max-w-screen-lg px-8 pt-16 pb-32 mx-auto mt-16">
        <TechStackGrid
        />
      </section>
      <section className="w-full max-w-screen-lg px-8 pt-16 pb-32 mx-auto mt-16">
        <SectionTitle
          containerClass="max-w-screen-lg"
          sectionID="recent-work"
          title="Checkout My Recent Work"
          subtitle="Click on any project to learn more about it."
        />
        <InsiderCaseStudy />
        <LrnrCaseStudy />
        <SakraCaseStudy />
      </section>

      <section className="w-full max-w-screen-lg px-8 pt-16 pb-32 mx-auto mt-16">
        <AnimationGrid />
      </section>

      <section className="w-full max-w-screen-lg px-8 pt-16 pb-32 mx-auto mt-16 ">
        <SectionTitle
          title="My Figma Community Profile"
          subtitle="Some design experiments to hone my skills"
          sectionID={"gallary"}
        />
        <div className="m-auto">
          <Link href="https://www.figma.com/@rahulsingh" passHref>
            <div className="relative flex group">
              <p className="absolute inset-0 flex items-center px-4 py-2 bg-black/[.05] justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white z-10">
                Click to Visit Figma Community See all Designs
              </p>
              <Image
                src={figma}
                alt="community page"
                className="transition cubic-bezier(0, 0.85, 0.63, 0.99) duration-150 group-hover:blur-sm mt-8 "
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
export default Home;
