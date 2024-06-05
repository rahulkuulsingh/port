import Image from "next/image";
import { SparklesCore } from "./CosmeticComponents/Backgrounds/sparkles";

interface FooterProps {
  email: string;
  phone: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ email, phone, className = "" }) => {
  return (
    <>
      <div
        className={`max-w-5xl font-light w-full px-8 m-auto grid grid-cols-1 md:grid-cols-6 gap-4 relative mt-32 p-16   ${className}`}
      >
        <div className="relative col-span-full h-60">
          <Image
            src="/Astronaut.png"
            alt="Image description"
            width={802}
            height={592}
            className="absolute z-10 w-2/3 transform -translate-x-1/2 lg:w-1/3 lg:-translate-x-[16.8rem] lg:translate-y-[2.3rem] md:-translate-x-[14rem] md:translate-y-[1rem] md:w-1/2 left-1/2 top-0 md:-top-[12rem] md:left-1/2 "
          />
          <p className="mt-24 md:mt-4">If you are from planet Earth,</p>
          <p className="text-2xl font-light tracking-tight uppercase text-balance sm:text-3xl md:text-5xl lg:text-6xl">
            I am <span className="text-[#FF4800]">Reachable</span>
          </p>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>

        <div className="z-10 flex flex-col items-center mt-8 md:items-start col-span-full md:col-start-3 lg:col-start-4 md:mt-0">
          <div className="flex items-center gap-4 mb-4">
            <svg
              width="74"
              height="43"
              viewBox="0 0 74 43"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-50 hover:text-[#FF4800]"
            >
              <path d="M52.7553 42.3344L50.0092 39.5883L66.2065 23.4375H0.393066V19.5278H66.2065L50.0092 3.33042L52.7553 0.630859L73.607 21.4826L52.7553 42.3344Z" />
            </svg>
            <div className="flex flex-col">
              <a
                href={`mailto:${email}`}
                className="mb-2 text-xl sm:text-2xl md:text-3xl text-gray-50 hover:text-[#FF4800]"
              >
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="text-xl sm:text-2xl md:text-3xl text-gray-50 hover:text-[#FF4800]"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
