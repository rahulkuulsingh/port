import Image from "next/image";
import Link from "next/link";
import insiderDesktop from "@/public/insider/insider-desktop-2x.png";

const InsiderCaseStudy = () => {
  return (
    <Link
      className="block mx-auto mt-16 "
      href="/case-study/insider"
    >
      <div className="bg-[#171717] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-md transition duration-500 ease-in-out transform hover:scale-105">
        <div className="flex flex-col py-8 px-14">
          <div className="flex flex-col h-full gap-12 place-content-center">
            <h5 className="text-xl md:text-2xl lg:text-3xl">
              Lots of partners create draft campaigns but don&#39;t publish it -
              But why?
            </h5>
            <div className="col-span-12 text-xl prose m:col-span-8 m:col-start-3 max-w-none opacity-60">
              <p>
                A case study on redesigning user experience to overcome launch
                barriers.
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-base opacity-40">
            <p>SaaS</p>
            <p>Marketing Automation</p>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="relative w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media">
            <div className="relative w-full">
              <div className="relative flex w-full h-full overflow-hidden outline-none rounded-s group">
                <Image
                  className=""
                  src={insiderDesktop}
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
