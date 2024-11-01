import Image from "next/image";
import Link from "next/link";
import lrnrDesktop from "@/public/lrnr/lrnr-desktop-2x.png";

const InsiderCaseStudy = () => {
  return (
    <Link
      className="block mx-auto mt-16 max-w-container"
      href="/case-study/lrnr"
    >
      <div className="bg-[#171717] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex flex-col py-8 px-14">
          <div className="flex flex-col h-full gap-12 place-content-center">
            <h5 className="text-2xl md:text-3xl">
            An end-to-end virtual lab for instructors who are struggling to teach experiments{" "}<span className="opacity-40">due to inefficient tools</span>
            </h5>
          </div>
          <div className="flex gap-4 text-base opacity-40">
            <p>SaaS</p>
            <p>Education Technology</p>
          </div>
        </div>
        {/* second Column */}
        <div className="w-full h-full">
          <div className="relative w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media">
            <div className="relative w-full">
              <div className="relative flex w-full h-full overflow-hidden outline-none rounded-s group">
                <Image
                  className=""
                  src={lrnrDesktop}
                  width={520}
                  height={520}
                  alt="Project featured Image describing the project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InsiderCaseStudy;
