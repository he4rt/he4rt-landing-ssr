type FindAtHe4rtProps = {
  title: string
  description: string
}

export default function FindAtHe4rt({ title, description }: FindAtHe4rtProps) {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#782BF1" fill-opacity="0.1" />
          <path
            d="M20.5 21.5834L29.875 16.375L20.5 11.1667L11.125 16.375L20.5 21.5834ZM20.5 21.5834L26.9157 18.019C27.481 19.4444 27.7917 20.9984 27.7917 22.625C27.7917 23.3555 27.729 24.0714 27.6087 24.7676C24.8899 25.0319 22.4261 26.1673 20.5 27.8912C18.5739 26.1673 16.1101 25.0319 13.3913 24.7676C13.271 24.0714 13.2083 23.3555 13.2083 22.6249C13.2083 20.9983 13.519 19.4444 14.0842 18.019L20.5 21.5834ZM16.3333 27.8333V20.0209L20.5 17.706"
            stroke="url(#paint0_linear_2278_1961)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2278_1961"
              x1="11.1226"
              y1="17.3389"
              x2="28.1349"
              y2="17.2186"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#782BF1" />
              <stop offset="1" stop-color="#7935D8" />
            </linearGradient>
          </defs>
        </svg>
        <h3 className="font-semibold text-[#424141] font-spline text-xl">
          {title}
        </h3>
      </div>
      <p className="text-[#737272] font-sans mt-3 max-w-sm">{description}</p>
    </div>
  )
}
