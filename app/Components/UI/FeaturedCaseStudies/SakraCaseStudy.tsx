import Image from "next/image";
import Link from "next/link";
import sakraDesktop from "@/public/sakra/sakra-desktop-2x.png";

const InsiderCaseStudy = () => {
  return (
    <Link
      className="block mx-auto mt-16 max-w-container"
      href="/case-study/sakra"
    >
      <div className="bg-[#171717] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex flex-col py-8 px-14">
          <div className="flex flex-col h-full gap-12 place-content-center">
            <h5 className="text-2xl md:text-3xl">
            Simplifying patients lives with easy{" "}<span className="opacity-40">appointment scheduling and medical record access.</span>
            </h5>
          </div>
          <div className="flex gap-4 text-base opacity-40">
            <p>SaaS</p>
            <p>Healthcare</p>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="relative w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media">
            <div className="relative w-full">
              <div className="relative flex w-full h-full overflow-hidden outline-none rounded-s group">
                <Image
                  className=""
                  src={sakraDesktop}
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
