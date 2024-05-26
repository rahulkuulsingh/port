import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 315 356"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      {/* <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
      <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" /> */}
      <path d="M0.781254 0.877441H193.247C273.179 0.877441 307.36 50.3086 307.36 107.102C307.36 151.274 286.325 198.602 232.161 213.852L314.722 355.835H245.834L164.851 218.585H72.2987C66.5142 218.585 63.359 221.214 63.359 227.525V355.835H1.30711V215.43C1.30711 175.464 18.1347 159.162 57.0486 159.162H195.351C230.584 159.162 244.782 134.973 244.782 109.731C244.782 84.4897 229.532 62.9293 195.351 62.9293H0.781254V0.877441Z"/>
    </svg>
  );
}