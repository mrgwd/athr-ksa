'use client'
import { useTranslations } from 'next-intl'
import { Instagram, Facebook, Snapchat } from 'iconsax-react'
import ScrollIndicator from './ScrollIndicator'
export default function Footer() {
  const t = useTranslations()
  const year: number = new Date().getFullYear()
  return (
    <>
      <ScrollIndicator variant="detailed" />
      <footer className="w-full bg-gradient-to-l from-main-color to-main-blue-gradient pb-10 pt-12 text-center text-white">
        <p>
          {t('footer.heading')} {year}
          {/* <br />
          <span className="text-sm text-white/50">
            {t('footer.commercialRegister')}
          </span> */}
        </p>
        <ul className="mt-4 flex items-center justify-center gap-4">
          <li>
            <a target="_blanc" href="https://www.pinterest.com/athrcompany">
              <svg
                width="20"
                height="20"
                viewBox="0 0 639 639"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 319.5C0 455.899 85.4912 572.354 205.815 618.183C202.883 593.234 199.775 552.098 206.477 523.244C212.255 498.42 243.781 365.141 243.781 365.141C243.781 365.141 234.271 346.108 234.271 317.903C234.271 273.709 259.893 240.686 291.818 240.686C318.976 240.686 332.068 261.066 332.068 285.478C332.068 312.773 314.683 353.559 305.709 391.4C298.233 423.063 321.609 448.873 352.81 448.873C409.334 448.873 452.816 389.253 452.816 303.213C452.816 227.032 398.077 173.815 319.924 173.815C229.466 173.815 176.337 241.684 176.337 311.837C176.337 339.182 186.858 368.473 200.012 384.423C201.674 386.18 202.598 388.507 202.595 390.926C202.595 391.799 202.471 392.685 202.234 393.534C199.812 403.606 194.421 425.197 193.397 429.603C191.975 435.419 188.792 436.667 182.739 433.846C143.026 415.362 118.203 357.291 118.203 310.651C118.203 210.296 191.088 118.178 328.324 118.178C438.664 118.178 524.429 196.805 524.429 301.865C524.429 411.481 455.325 499.718 359.375 499.718C327.126 499.718 296.86 482.932 286.477 463.15C286.477 463.15 270.527 523.918 266.658 538.769C259.157 567.637 238.327 604.167 225.41 624.897C255.176 634.083 286.751 639 319.5 639C495.949 639 639 495.936 639 319.5C639 143.064 495.949 0 319.5 0C143.051 0 0 143.051 0 319.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blanc" href="https://www.instagram.com/athr_ksa">
              <Instagram variant="Bold" />
            </a>
          </li>
          <li>
            <a
              target="_blanc"
              href="https://instagram.com/athr_sa.company?igshid=ZGUzMzM3NWJiOQ=="
            >
              <Facebook variant="Bold" />
            </a>
          </li>
          <li>
            <a
              target="_blanc"
              href="https://www.snapchat.com/add/athrcompany23"
            >
              <Snapchat variant="Bold" />
            </a>
          </li>
          <li>
            <a target="_blanc" href="https://www.linkedin.com/company/athr2030">
              <svg
                className="mt-0.5"
                width="20"
                height="20"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="81" height="81" rx="12" fill="white" />
                <circle cx="20" cy="20" r="7" fill="#45C4AE" />
                <rect x="14" y="31" width="12" height="37" fill="#45C4AE" />
                <path
                  d="M32.5 67.9997V31.4997H43.5V36.4997C44 34.333 49.5 29.8634 56.5 30.4999C65.3 31.3 67.5 38.9999 67.5 43.9997V67.9997H56.5C56.5 43.9997 56.5 40.4287 49 41.4999C44.5728 42.1322 43.5 46.333 43.5 48.4997V67.9997H32.5Z"
                  fill="#45C4AE"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blanc"
              href="https://twitter.com/Athr_ksa2030?t=3MSre4osu9JspoJ3cNBTbA&s=09"
            >
              <svg
                className="mt-0.5"
                width="20"
                height="20"
                viewBox="0 0 639 639"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="639" height="639" rx="171" fill="white" />
                <path
                  d="M427.53 149.977H485.039L359.4 293.592L507.202 489H391.467L300.824 370.494L197.093 489H139.552L273.932 335.402L132.148 149.977H250.814L332.747 258.309L427.53 149.977ZM407.341 454.577H439.216L233.507 182.601H199.307L407.341 454.577Z"
                  fill="#45C4AE"
                />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
