'use client'
import { useTranslations } from 'next-intl'
import { Instagram, Facebook, Snapchat } from 'iconsax-react'
export default function Footer() {
  const t = useTranslations()
  const year: number = new Date().getFullYear()
  return (
    <footer className="w-full bg-gradient-to-l from-main-color to-main-blue-gradient pb-10 pt-12 text-center text-white">
      <p>
        {t('footer.heading')} {year}
        <br />
        <span className="text-sm text-white/50">
          {t('footer.commercialRegister')}
        </span>
      </p>
      <ul className="mt-4 flex items-center justify-center gap-4">
        <li>
          <a href="https://instagram.com/athr_sa.company?igshid=ZGUzMzM3NWJiOQ==">
            <Instagram variant="Bold" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/athr_sa.company?igshid=ZGUzMzM3NWJiOQ==">
            <Facebook variant="Bold" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/athr_sa.company?igshid=ZGUzMzM3NWJiOQ==">
            <Snapchat variant="Bold" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/athr_sa.company?igshid=ZGUzMzM3NWJiOQ==">
            <svg
              width="20"
              height="20"
              viewBox="0 0 192 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_418_6)">
                <rect width="192" height="192" rx="38" fill="white" />
                <path
                  d="M137 91C136.294 90.6573 135.5 90.5 134.5 90C133.235 66.3909 118.886 50.6383 97.5 50.5C97.4031 50.4994 96.5969 50.5 96.5 50.5C83.7084 50.5 72 54 64.5 66.3316L78.6748 75.4513C83.5664 67.9342 91.3463 67 97 67C96.9354 66.9994 97.0653 67 97 67C104.042 67.0455 108.561 67.956 112 72C114.503 74.9442 115 77.5 115.5 83.5C110.5 81.5 103.883 81.0809 96.6651 81.5C76.3322 82.6863 64.2748 96.8541 65.1527 113.544C65.5982 122.01 69.7622 129.293 76.8771 134.051C82.8928 138.073 90.6405 140.04 98.6927 139.595C109.326 139.004 118.18 135.514 124 128C128.42 122.294 128.5 121 131 111.166C136.068 114.263 138.5 115.5 140.5 118.5C144.027 126.83 143.597 137.34 132.569 148.5C122.907 158.277 114.217 160.55 96.6651 160.68C77.1952 160.534 67.0736 154.827 57.5 142.5C48.535 130.957 45.1729 117.398 45 96.0584C45.1729 74.7185 48.535 61.543 57.5 50C67.0736 37.6729 77.1952 33.1465 96.6651 33C116.276 33.1477 125.601 37.6135 135.541 50C140.415 56.0742 143.035 62.0935 145.457 71L166 65.4302C163.064 54.4673 158.443 45.0204 152.156 37.1859C139.412 21.3058 120.775 13.1687 96.7612 13H96.6651C72.7002 13.1681 54.2715 21.3361 41.8912 37.2769C30.8743 51.4622 25.1915 71.2 25.0006 95.9416L25 96L25.0006 96.0584C25.1915 120.8 30.8743 140.538 41.8912 154.723C54.2715 170.664 72.7002 178.832 96.6651 179H96.7612C118.067 178.85 133.085 173.2 145.457 160.68C161.644 144.301 161.157 123.77 155.822 111.166C151.994 102.127 146.979 95.8485 137 91ZM98.4784 122.5C89.5668 123.008 83.4565 119.843 83 111.166C82.6616 104.731 87 98.6985 96.6651 98.1338C98.3431 98.0357 101.803 98.1338 103.42 98.1338C108.743 98.1338 113.473 100.498 118 101.5C116.312 122.857 107.203 122.015 98.4784 122.5Z"
                  fill="#45C4AE"
                />
              </g>
              <defs>
                <clipPath id="clip0_418_6">
                  <rect width="192" height="192" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
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
          <a href="https://twitter.com/Mohamed51136210?t=ND_CIKWegdhYdEaG3_uUww&s=08">
            <svg
              className="mt-0.5"
              width="20"
              height="20"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="81" height="81" rx="12" fill="white" />
              <path
                d="M15.5347 19.0265C24.7254 28.9973 35.5657 31.4901 39.8371 31.4901C39.3951 30.1547 38.5116 20.3619 46.907 17.6912C53.6233 15.5546 58.5426 18.8782 60.1628 20.807C63.6977 19.7387 66.6434 18.2847 67.6744 17.6912C65.907 20.8961 63.4031 23.4778 62.3721 24.368C63.786 24.368 67.3798 23.181 69 22.5875C67.9395 24.0119 64.7287 27.0388 63.2558 28.3742C62.814 55.5268 42.0465 64.4293 29.2326 63.9842C18.9814 63.6281 13.4729 60.2748 12 58.6427C18.3628 59.3549 25.845 55.6752 28.7907 53.7463C21.014 51.9658 18.186 47.3662 17.7442 45.2889C19.5116 45.645 22.0155 45.1406 23.0465 44.8438C15.9767 43.4194 13.9147 36.5348 13.7674 33.2706C14.8279 34.3389 17.7441 34.6059 19.0696 34.6059C12.3533 28.1961 13.9146 21.5489 15.5347 19.0265Z"
                fill="#45C4AE"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  )
}
