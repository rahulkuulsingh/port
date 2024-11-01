interface AnimationCardProps {
  videoSrc: string;
  videoClassName?: string;
  cardClassName?: string;
}

export const AnimationCard: React.FC<AnimationCardProps> = ({
  videoSrc,
  videoClassName,
  cardClassName,
}) => {
  return (
    <>
      <div
        className={`w-56  flex flex-col rounded-lg overflow-hidden bg-[#171717]  ${cardClassName}`}
      >
        <div className="w-full h-full">
          <div className="relative w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media">
            <div className="relative w-full">
              <div className="relative flex w-full h-full overflow-hidden outline-none rounded-s group">
                <video
                  src={videoSrc}
                  className="object-contain w-full h-full"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
