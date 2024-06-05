import Image from "next/image";

import headShot from "@/public/wave-headshot.png";


export default function AboutMe() {
  return (
    <>
      <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <h2 className="col-span-2 col-start-1 row-start-1 text-5xl md:text-7xl lg:text-9xl">I design interfaces for people around the globe.</h2>
          <Image src={headShot} alt="an image that displays a motor" className="col-span-2 col-start-1 row-start-1"/>
        </div>
        </section>
        <section className="md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full">

        <p className="mt-2 text-lg text-gray-400">
          Hey, I&apos;m Rahul. I&apos;m a product designer. I&apos;m currently building{" "}
          <span className="text-orange-600">Architect</span> at <span className="text-orange-600">Insider</span>. This is an app that empowers marketers to create
          fast and efficient automated marketing campaigns.
        </p>

        <p className="mt-2 text-lg text-gray-400">
          Before Architect, I spent my time at <span className="text-orange-600">Lrnr</span> an edTech startup
          <span className="text-orange-600">designing web and mobile apps for medical grad students</span>. This app was
          adopted by top community colleges in the USA.
        </p>

        <p className="mt-2 text-lg text-gray-400">
          Before Lrnr, I worked on projects like designing experiences for
          <span className="text-orange-600">hospitals and patients</span>. I also worked on <span className="text-orange-600">machinery automation tools</span>
          for ABB at Cosmonet Solutions.
        </p>

        <p className="mt-2 text-lg text-gray-400">
          Before that, I designed <span className="text-orange-600">student experiences</span> for online examinations at
          Paramount Coaching Center.
        </p>

        <p className="mt-2 text-lg text-gray-400">
          I originally started designing when I was in college. I did
          freelancing for two years on <span className="text-orange-600">99designs.</span>
        </p>
      </section>
    </>
  );
}
