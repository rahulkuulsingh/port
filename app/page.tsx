import Link from "next/link";
import { Card } from "./ui/card";
import Navbar from "./ui/layout";

function Home() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <div className="short-bio w-1/2 text-xs md:text-base">
        <p className="mb-4">
          {`Hey, I&lsquom Rahul. I&lsquom a product designer. I&lsquom currently building
          Architect at Insider. This is an app that empowers marketers to create
          fast and efficient automated marketing campaigns.`}
        </p>
        <p className="mb-4">
          {`Before Architect, I spent my time at Lrnr (learner an edTech startup)
          designing web and mobile apps for medical grad students, this app was
          adopted by top community colleges in USA.`}
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

      <div className="section-projects w-full my-8">
          <Card
            className="w-full"
            title="Enhancing Usability of Architect."
            tags={["Web Dev", "React", "UI/UX"]}
            role="Product Designer, @Insider"
            projectDate="2021 - 2023"
            team="Sarper, Blazenko, Nour, Cansu, Barim"
            link='/case-study/insider'
          />
      </div>
    </>
  );
}
export default Home;
