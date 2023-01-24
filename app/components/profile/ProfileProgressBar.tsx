type ProfileProgressBarProps = {
  imageSrc: string,
  imageAlt: string,
  percentage: number,
}

export default function ProfileProgressBar({
  imageSrc,
  imageAlt,
  percentage
}: ProfileProgressBarProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-28 h-28 relative rounded-full">
        <img
          className="w-full h-full rounded-full border-8 border-purple-300"
          src={imageSrc}
          alt={imageAlt}
        />

        <svg
          viewBox="0 0 100 100"
          className="scale-[120%] absolute inset-0 w-full h-full text-center"
        >
          <path
            className="stroke-purple-500 stroke-[8px]"
            id="progress"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${(percentage / 100) * 251},251`}
            d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
          />
        </svg>
      </div>
    </div>
  );
}
