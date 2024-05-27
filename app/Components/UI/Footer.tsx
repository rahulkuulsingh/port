import Image from "next/image";
import { SparklesCore } from "./CosmeticComponents/Backgrounds/sparkles";
import Seprator from "./CosmeticComponents/seprator";

interface FooterProps {
  email: string;
  phone: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ email, phone, className = "" }) => {
  return (
    <>
      <div
        className={`max-w-5xl font-light w-full px-8 m-auto grid grid-cols-6 gap-4 relative mt-32 p-16   ${className}`}
      >
        <Image
          src="/Astronaut.png"
          alt="Image description"
          width={802}
          height={592}
          className="pt-4  absolute m-auto -top-[100px] w-1/3 left-[238px] z-10"
        />
        <div className="relative w-full col-span-full h-60">
          <p>if you are from planet earth,</p>
          <p className="text-balance uppercase font-light text-3xl/9 tracking-tight sm:text-5.5xl md:text-6xl">
            I am <span className="text-[#FF4800]">Reachable</span>
          </p>

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full  dark:bg-black [mask-image:radial-gradient(650px_300px_at_top,transparent_20%,white)]"></div>
        </div>
        {/* <div className="col-span-full ">
        <p>if you are from planet earth,</p>
        <p className="text-balance uppercase font-light text-3xl/9 tracking-tight sm:text-5.5xl md:text-6xl">
          I am <span className="text-[#FF4800]">Reachable</span>
        </p>
      </div> */}

        <div className="z-10 flex items-center col-start-4 gap-4 my-4 col-span-full">
          <svg
            width="74"
            height="43"
            viewBox="0 0 74 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:white"
          >
            <path
              d="M52.7553 42.3344L50.0092 39.5883L66.2065 23.4375H0.393066V19.5278H66.2065L50.0092 3.33042L52.7553 0.630859L73.607 21.4826L52.7553 42.3344Z"
              // fill="white"
            />
          </svg>
          <div className="flex flex-col ">
            <a href={`mailto:${email}`} className="mb-2 text-3xl dark:text-gray-50">
              {email}
            </a>
            <a href={`tel:${phone}`} className="text-3xl dark:text-gray-50">
              +91-6291-233-251
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
