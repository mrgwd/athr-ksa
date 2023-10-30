import Image from "next/image";
import {useTranslations,useLocale} from "next-intl";
import homeImage from "../../../public/images/others/home.png";

export default function Home() {
  const t = useTranslations("Index")
  return (
    <div className="container mx-auto mt-32 items-center justify-between px-4 sm:mt-56 md:mt-40 md:max-lg:flex lg:mt-56 xl:mt-64">
      <div className="relative sm:hidden">
        <Image
          src={homeImage}
          alt="home"
          className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2"
        />
        <svg
          className="mx-auto h-full w-full max-w-md"
          width="832"
          height="759"
          viewBox="0 0 832 759"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95.9791 676.087C-92.8937 506.94 16.5563 63.0488 258.76 7.94414C532 -54.2219 880.57 291.61 825.845 513.555C771.12 735.501 284.852 845.234 95.9791 676.087Z"
            fill="url(#paint0_linear_150_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_150_4"
              x1="366.5"
              y1="-8.75647e-06"
              x2="472.643"
              y2="756.278"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45C4AE" />
              <stop offset="1" stopColor="#155799" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className={`absolute top-0 
        ${
          useLocale() === "en" ? "right-0 -scale-x-100" : "left-0"
        } -z-10 hidden lg:max-xl:block`}
      >
        <Image
          src={homeImage}
          alt="home"
          className="absolute left-1/2 top-1/2 w-80 -translate-x-1/3 -translate-y-1/3"
        />

        <svg
          className="h-min w-[32rem]"
          width="741"
          height="821"
          viewBox="0 0 741 821"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M726.5 585.5C781.6 397 658 79.5 619.5 0H0V820.5C291.5 821.167 657.808 820.5 726.5 585.5Z"
            fill="url(#paint0_linear_167_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_167_2"
              x1="370"
              y1="59.5001"
              x2="676"
              y2="1106.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45C4AE" />
              <stop offset="1" stopColor="#155799" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className={`absolute top-0 ${
          useLocale() === "en" ? "right-0 -scale-x-100" : "left-0"
        } -z-10 hidden xl:block`}
      >
        <Image
          src={homeImage}
          alt="home"
          className="absolute left-1/2 top-1/2 w-96 -translate-x-1/3 -translate-y-1/3"
        />
        <svg
          className="h-min w-[46rem] 2xl:w-[52rem]"
          width="958"
          height="821"
          viewBox="0 0 958 821"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M945.5 585.5C1000.87 397.079 842.5 79.5 804 0H0V820.5C291.5 821.167 876 822 945.5 585.5Z"
            fill="url(#paint0_linear_172_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_172_3"
              x1="370"
              y1="59.5001"
              x2="676"
              y2="1106.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45C4AE" />
              <stop offset="1" stopColor="#155799" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mt-16 child:max-md:text-center sm:mt-36 md:max-lg:inline-block lg:max-xl:mt-20">
        <h1 className="mb-4 text-main-dark sm:text-xl sm:font-light md:text-2xl 2xl:text-3xl">
          {t("home.heading")}
          <span className="text-main-med"> {t("home.athr")}</span>
        </h1>
        <p className="text-2xl font-semibold text-main-med sm:text-3xl sm:!leading-normal 2xl:text-4xl">
          {t("home.paragraph1")} <br /> {t("home.paragraph2")} <br />{" "}
          {t("home.paragraph3")}
        </p>
        <a
          className="text-md mt-10 block w-max rounded-full bg-gradient-to-r from-main-color to-main-blue-gradient px-6 py-2 text-white transition duration-300 hover:from-white hover:to-white hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color max-md:mx-auto sm:px-10 sm:py-3 sm:text-lg"
          href="#contact"
        >
          {t("home.mainButton")}
        </a>
      </div>
      <div className="relative hidden md:max-lg:inline-block">
        <Image
          src={homeImage}
          alt="home"
          className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2"
        />

        <svg
          className="h-min w-96"
          width="833"
          height="758"
          viewBox="0 0 833 758"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.8528 680.265C-93.8463 509.482 13.4548 63.6375 258 8.00002C533.882 -54.7671 882.254 312.909 827 537C771.746 761.092 258 824.582 96.8528 680.265Z"
            fill="url(#paint0_linear_174_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_174_5"
              x1="369.989"
              y1="-2.35951"
              x2="477.159"
              y2="761.231"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45C4AE" />
              <stop offset="1" stopColor="#155799" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

