'use client'
import './main.css'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('learnings')
  return (
    <main className="container mx-auto p-4 md:px-8" dir="rtl">
      <div className="relative bg-gradient-to-tr from-[#E6EDF2] to-[#F7F9FB] rounded-3xl p-8 text-center overflow-hidden learnings-container py-28 md:py-44">
        <div className="flex justify-center flex-col items-center" dir="auto">
          <h1 className="pretty text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-main-color font-semibold">
            {t('title1')} <br /> {t('title2')}
          </h1>
          <p></p>
          <a
            className="text-md mt-8 block w-max rounded-full bg-gradient-to-l from-main-color to-main-color/60 px-8 py-2 text-white transition duration-300 hover:from-white hover:to-white hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color max-md:mx-auto sm:px-10 sm:text-lg"
            href="#contact"
          >
            {t('button')}
          </a>
        </div>
        {/* <svg
          className="doodles absolute -left-10"
          width="193"
          height="192"
          viewBox="0 0 193 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M139.277 188.233L139.378 188.339H139.524H191.423H192.206L191.671 187.768L152.711 146.13C156.075 140.76 159 135.026 161.485 128.926L161.486 128.924C165.322 119.334 168.023 108.962 169.591 97.8104L169.646 97.4235H169.255H130.135H129.827L129.797 97.7299C129.033 105.52 127.395 112.699 124.884 119.269L112.651 105.88L112.646 105.874L112.641 105.869C109.514 102.742 105.779 98.9204 101.436 94.403C97.2668 89.7129 93.011 84.8491 88.6683 79.8117C84.5057 74.608 81.0397 69.6683 78.2685 64.9922C75.5008 60.1481 74.1419 56.0367 74.1419 52.6447C74.1419 49.2111 74.8286 46.4088 76.1779 44.2163C77.5283 42.0218 79.4687 40.4162 82.0132 39.3984L82.022 39.3948L82.0307 39.3908C84.5833 38.1996 87.6614 37.5971 91.2759 37.5971C95.9032 37.5971 99.8256 38.8808 103.062 41.436L103.062 41.4361L103.069 41.4412C106.473 43.9942 109.661 48.7943 112.609 55.9044L112.758 56.2655L113.095 56.0667L146.217 36.5067L146.449 36.3693L146.368 36.1117C144.089 28.9247 140.057 22.7024 134.277 17.448C128.679 12.2001 122.034 8.17883 114.345 5.38269C106.655 2.41181 98.4425 0.927507 89.7111 0.927507C78.366 0.927507 68.2298 3.1094 59.3101 7.48153C50.5688 11.6776 43.654 17.4521 38.5756 24.8069L38.5756 24.8069L38.5725 24.8115C33.6644 32.1737 31.2131 40.5858 31.2131 50.0367C31.2131 53.8973 31.8272 58.1002 33.0504 62.6434C34.1714 66.8071 35.9497 71.2567 38.3817 75.9916C26.9247 81.1911 18.0316 88.1182 11.7182 96.7807L11.7176 96.7815C4.37179 106.926 0.699479 118.471 0.699479 131.406C0.699479 142.429 3.85031 152.494 10.1486 161.592L10.153 161.598C16.6212 170.513 25.2717 177.676 36.0952 183.088L36.1011 183.09C47.1054 188.331 59.4137 190.947 73.0199 190.947C83.1357 190.947 92.7322 189.552 101.808 186.76L101.813 186.758C110.72 183.846 118.871 179.757 126.267 174.49L139.277 188.233ZM67.0391 113.909L100.748 149.927C99.3252 150.767 97.8594 151.533 96.3507 152.222L96.3473 152.224C90.4828 154.984 84.1862 156.364 77.4535 156.364C70.0132 156.364 63.629 155.24 58.2919 153.003C53.1279 150.592 49.1832 147.328 46.4418 143.217C43.6999 138.932 42.3242 133.956 42.3242 128.277C42.3242 120.706 44.7299 114.626 49.5228 110.004L49.5272 110C51.7884 107.739 54.6066 105.776 57.986 104.115C60.7395 107.278 63.7564 110.542 67.0366 113.906C67.0375 113.907 67.0383 113.908 67.0391 113.909Z"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            stroke-width="0.679167"
          />
        </svg> */}
        {/* <svg
          className="doodles absolute top-0 left-0 -translate-x-7 -translate-y-7"
          width="159"
          height="149"
          viewBox="0 0 159 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.8621 147.396L57.8044 147.948H58.3593H102.519H103.083L103.016 147.389L97.5432 101.556L135.249 129.036L135.693 129.36L135.973 128.887L156.709 93.9432L157.009 93.4375L156.462 93.2226L109.884 74.9365L156.865 54.2095L157.376 53.984L157.096 53.501L136.36 17.789L136.074 17.2973L135.623 17.6432L97.4171 46.9345L102.249 1.19657L102.307 0.644043H101.751H57.5913H57.0295L57.0947 1.20204L62.3744 46.4089L22.5588 17.2526L22.1123 16.9257L21.8321 17.4029L1.09614 52.7309L0.813604 53.2123L1.32301 53.4404L48.2767 74.4644L1.72446 93.2243L1.19099 93.4393L1.47809 93.9376L21.8301 129.266L22.0975 129.73L22.5422 129.431L62.5477 102.547L57.8621 147.396Z"
            fill="#F8FAFC"
            stroke="#CBD5E1"
          />
        </svg> */}
        <p className="doodle astrisk rotate-[60deg] -left-4 md:-left-10 md:text-[32rem] text-[16rem] -top-28 md:-top-52">
          *
        </p>
        <p className="doodle ambersand scale-110 left-8 md:left-20 md:text-[18rem] -bottom-8 md:-bottom-14 text-9xl">
          &
        </p>
        <p className="doodle absolute right-8 md:right-16 md:text-[20rem] text-[10rem] -bottom-20 md:-bottom-40">
          &#60;<span className="slash -translate-x-8 inline-block">&#47;</span>
        </p>

        {/* <svg
          className="doodles absolute"
          width="273"
          height="240"
          viewBox="0 0 273 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 109">
            <path
              id="Vector"
              d="M161.667 203.131L161.844 203.472L162.177 203.281L271.96 140.467L272.146 140.361V140.147V112.418V112.205L271.96 112.098L162.177 49.2842L161.844 49.0937L161.667 49.4341L142.993 85.3684L142.823 85.6943L143.149 85.8647L220.157 126.17L143.148 166.701L142.824 166.872L142.993 167.197L161.667 203.131ZM1.36907 239.015L1.10563 239.547H1.69922H47.2537H47.4829L47.5842 239.342L165.007 1.09989L165.269 0.568591H164.677H119.688H119.46L119.358 0.773505L1.36907 239.015Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              stroke-width="0.736842"
            />
          </g>
        </svg> */}
        <div className="doodles absolute top-0 -translate-y-1/2 *:rounded-full *:p-4 flex gap-4 *:md:p-10 *:bg-slate-50 *:border *:border-slate-300 *:inline-block">
          <span className="dot"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
  )
}
