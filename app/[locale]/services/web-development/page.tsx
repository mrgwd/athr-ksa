import client1 from '@/public/images/Clients/web-development/client1.webp'
import client2 from '@/public/images/Clients/web-development/client2.webp'
import client3 from '@/public/images/Clients/web-development/client3.webp'
import Plan from '@/app/_components/service/Plan'
import Slideshow from '@/app/_components/common/Slideshow'
import Section from '@/app/_components/common/Section'
import PageHeader from '@/app/_components/service/PageHeader'
import FAQsSection from '@/app/_components/common/FAQsSection'
import InfoCard from '@/app/_components/common/InfoCard'
import { Metadata } from 'next'
const arabicMetadata: Metadata = {
  title: 'تطوير مواقع الويب - أثر',
  keywords: [
    'تطوير مواقع الويب',
    'تصميم مواقع الويب',
    'تطوير مواقع الويب في السعودية',
    'تصميم مواقع الويب في السعودية',
    'تطوير مواقع الويب في الرياض',
    'تصميم مواقع الويب في الرياض',
    'تطوير مواقع الويب في جدة',
    'تصميم مواقع الويب في جدة',
    'تطوير مواقع الويب في الدمام',
    'تصميم مواقع الويب في الدمام',
    'تطوير مواقع الويب في الخبر',
    'تصميم مواقع الويب في الخبر',
    'تطوير مواقع الويب في السعودية',
    'تصميم مواقع الويب في السعودية',
    'تطوير مواقع الويب في الرياض',
    'تصميم مواقع الويب في الرياض',
    'تطوير مواقع الويب في جدة',
    'تصميم مواقع الويب في جدة',
    'تطوير مواقع الويب في الدمام',
    'تصميم مواقع الويب في الدمام',
    'تطوير مواقع الويب في الخبر',
    'تصميم مواقع الويب في الخبر',
    'تطوير مواقع الويب في السعودية',
    'تصميم مواقع الويب في السعودية',
  ],
  description:
    'نوفر لك تصميم وتطوير مواقع الويب الاحترافية التي تعكس هوية علامتك التجارية وتحقق أهدافك التجارية بأفضل الطرق وأحدث التقنيات.',
  alternates: {
    canonical: 'https://athr-ksa.com/ar/services/web-development',
    languages: {
      en: 'https://athr-ksa.com/en/services/web-development',
      'ar-SA': 'https://athr-ksa.com/ar/services/web-development',
    },
  },
}
const englishMetadata: Metadata = {
  title: 'Web Development - ATHR',
  keywords: [
    'web development',
    'web design',
    'web development in saudi arabia',
    'web design in saudi arabia',
    'web development in riyadh',
    'web design in riyadh',
    'web development in jeddah',
    'web design in jeddah',
    'web development in dammam',
    'web design in dammam',
    'web development in khobar',
    'web design in khobar',
    'web development in saudi arabia',
    'web design in saudi arabia',
    'web development in riyadh',
    'web design in riyadh',
    'web development in jeddah',
    'web design in jeddah',
    'web development in dammam',
    'web design in dammam',
    'web development in khobar',
    'web design in khobar',
    'web development in saudi arabia',
    'web design in saudi arabia',
  ],
  description:
    'We provide you with professional web design and development services that reflect your brand identity and achieve your business goals in the best ways and with the latest technologies.',
  alternates: {
    canonical: 'https://athr-ksa.com/en/services/web-development',
    languages: {
      en: 'https://athr-ksa.com/en/services/web-development',
      'ar-SA': 'https://athr-ksa.com/ar/services/web-development',
    },
  },
}
export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  return params.locale === 'ar' ? arabicMetadata : englishMetadata
}
export default async function Page({ params }: ParamsProps) {
  const images = [
    { imgSrc: client1, imgUrl: 'https://www.alwissamlaw.com' },
    { imgSrc: client2, imgUrl: 'https://www.qimahriyadh.com' },
    { imgSrc: client3, imgUrl: 'http://www.shoofeldonia.com' },
  ]
  return (
    <div>
      <PageHeader locale={params.locale} name="WD">
        <svg
          width="624"
          height="249"
          viewBox="0 0 624 249"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_608_6"
            maskUnits="userSpaceOnUse"
            x="580"
            y="109"
            width="44"
            height="44"
          >
            <path d="M580 109H624V153H580V109Z" fill="white" />
          </mask>
          <g mask="url(#mask0_608_6)">
            <path
              d="M587.652 121.602C594.252 115.002 605.061 115.002 611.661 121.602C618.261 128.202 618.261 139.011 611.661 145.611"
              stroke="#1F7364"
              strokeWidth="14.348"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M587.652 121.602C594.252 115.002 605.061 115.002 611.661 121.602C618.261 128.202 618.261 139.011 611.661 145.611"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="14.348"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <mask
            id="mask1_608_6"
            maskUnits="userSpaceOnUse"
            x="0"
            y="117"
            width="23"
            height="23"
          >
            <path d="M23 140H0V117H23V140Z" fill="white" />
          </mask>
          <g mask="url(#mask1_608_6)">
            <path
              d="M19.0008 133.413C15.5508 136.862 9.90078 136.862 6.45078 133.412C3.00078 129.962 3.00078 124.312 6.45078 120.862"
              stroke="#1F7364"
              strokeWidth="7.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0008 133.413C15.5508 136.862 9.90078 136.862 6.45078 133.412C3.00078 129.962 3.00078 124.312 6.45078 120.862"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="7.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <mask
            id="mask2_608_6"
            maskUnits="userSpaceOnUse"
            x="80"
            y="181"
            width="17"
            height="17"
          >
            <path d="M80 181H97V198H80V181Z" fill="white" />
          </mask>
          <g mask="url(#mask2_608_6)">
            <path
              d="M93.5446 182.549C93.0436 182.048 92.2316 182.048 91.7306 182.549L89.5356 184.744C89.0346 185.245 88.2226 185.245 87.7216 184.744L85.5266 182.549C85.0256 182.048 84.2136 182.048 83.7126 182.549L81.5496 184.712C81.0486 185.213 81.0486 186.025 81.5496 186.526L83.7446 188.721C84.2456 189.222 84.2456 190.035 83.7446 190.536L81.5496 192.731C81.0486 193.232 81.0486 194.044 81.5496 194.545L83.7126 196.708C84.2136 197.209 85.0256 197.209 85.5266 196.708L87.7216 194.513C88.2226 194.012 89.0346 194.012 89.5356 194.513L91.7306 196.708C92.2316 197.209 93.0436 197.209 93.5446 196.708L95.7076 194.545C96.2086 194.044 96.2086 193.232 95.7076 192.731L93.5126 190.536C93.0116 190.035 93.0116 189.222 93.5126 188.721L95.7076 186.526C96.2086 186.025 96.2086 185.213 95.7076 184.712L93.5446 182.549V182.549Z"
              fill="white"
              fillOpacity="0.21"
              stroke="white"
              strokeOpacity="0.21"
              strokeWidth="1.186"
              strokeMiterlimit="10"
            />
            <path
              d="M93.5446 182.549C93.0436 182.048 92.2316 182.048 91.7306 182.549L89.5356 184.744C89.0346 185.245 88.2226 185.245 87.7216 184.744L85.5266 182.549C85.0256 182.048 84.2136 182.048 83.7126 182.549L81.5496 184.712C81.0486 185.213 81.0486 186.025 81.5496 186.526L83.7446 188.721C84.2456 189.222 84.2456 190.035 83.7446 190.536L81.5496 192.731C81.0486 193.232 81.0486 194.044 81.5496 194.545L83.7126 196.708C84.2136 197.209 85.0256 197.209 85.5266 196.708L87.7216 194.513C88.2226 194.012 89.0346 194.012 89.5356 194.513L91.7306 196.708C92.2316 197.209 93.0436 197.209 93.5446 196.708L95.7076 194.545C96.2086 194.044 96.2086 193.232 95.7076 192.731L93.5126 190.536C93.0116 190.035 93.0116 189.222 93.5126 188.721L95.7076 186.526C96.2086 186.025 96.2086 185.213 95.7076 184.712L93.5446 182.549V182.549Z"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <mask
            id="mask3_608_6"
            maskUnits="userSpaceOnUse"
            x="491"
            y="66"
            width="17"
            height="17"
          >
            <path d="M491 66H508V83H491V66Z" fill="white" />
          </mask>
          <g mask="url(#mask3_608_6)">
            <path
              d="M504.544 67.5491C504.043 67.0481 503.231 67.0481 502.73 67.5491L500.535 69.7441C500.034 70.2451 499.221 70.2451 498.72 69.7441L496.525 67.5491C496.024 67.0481 495.212 67.0481 494.711 67.5491L492.548 69.7121C492.047 70.2131 492.047 71.0251 492.548 71.5271L494.743 73.7221C495.244 74.2231 495.244 75.0351 494.743 75.5361L492.548 77.7311C492.047 78.2321 492.047 79.0441 492.548 79.5461L494.711 81.7091C495.212 82.2101 496.024 82.2101 496.525 81.7091L498.72 79.5141C499.221 79.0131 500.034 79.0131 500.535 79.5141L502.73 81.7091C503.231 82.2101 504.043 82.2101 504.544 81.7091L506.707 79.5461C507.208 79.0451 507.208 78.2321 506.707 77.7311L504.512 75.5361C504.011 75.0351 504.011 74.2231 504.512 73.7221L506.707 71.5271C507.208 71.0261 507.208 70.2141 506.707 69.7121L504.544 67.5491V67.5491Z"
              fill="white"
              fillOpacity="0.21"
              stroke="white"
              strokeOpacity="0.21"
              strokeWidth="1.186"
              strokeMiterlimit="10"
            />
            <path
              d="M504.544 67.5491C504.043 67.0481 503.231 67.0481 502.73 67.5491L500.535 69.7441C500.034 70.2451 499.221 70.2451 498.72 69.7441L496.525 67.5491C496.024 67.0481 495.212 67.0481 494.711 67.5491L492.548 69.7121C492.047 70.2131 492.047 71.0251 492.548 71.5271L494.743 73.7221C495.244 74.2231 495.244 75.0351 494.743 75.5361L492.548 77.7311C492.047 78.2321 492.047 79.0441 492.548 79.5461L494.711 81.7091C495.212 82.2101 496.024 82.2101 496.525 81.7091L498.72 79.5141C499.221 79.0131 500.034 79.0131 500.535 79.5141L502.73 81.7091C503.231 82.2101 504.043 82.2101 504.544 81.7091L506.707 79.5461C507.208 79.0451 507.208 78.2321 506.707 77.7311L504.512 75.5361C504.011 75.0351 504.011 74.2231 504.512 73.7221L506.707 71.5271C507.208 71.0261 507.208 70.2141 506.707 69.7121L504.544 67.5491V67.5491Z"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <mask
            id="mask4_608_6"
            maskUnits="userSpaceOnUse"
            x="538"
            y="195"
            width="35"
            height="35"
          >
            <path d="M538 195H573V230H538V195Z" fill="white" />
          </mask>
          <g mask="url(#mask4_608_6)">
            <path
              d="M547.209 212.534H539.811"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M547.209 212.534H539.811"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M571.248 212.534H563.859"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M571.248 212.534H563.859"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M549.644 218.414L544.42 223.649"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M549.644 218.414L544.42 223.649"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M566.649 201.42L561.414 206.644"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M566.649 201.42L561.414 206.644"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 220.859V228.248"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 220.859V228.248"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 196.81V204.209"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 196.81V204.209"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M561.414 218.414L566.649 223.649"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M561.414 218.414L566.649 223.649"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M544.42 201.42L549.644 206.644"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M544.42 201.42L549.644 206.644"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
          <mask
            id="mask5_608_6"
            maskUnits="userSpaceOnUse"
            x="80"
            y="31"
            width="54"
            height="54"
          >
            <path
              d="M80 57.7822L106.782 31.0005L133.563 57.7822L106.782 84.5639L80 57.7822Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask5_608_6)">
            <path
              d="M106.845 57.514C106.845 57.514 101.555 50.52 100.304 44.313C100.004 43.4819 99.8456 42.6065 99.835 41.723C99.781 37.67 102.754 34.344 106.475 34.294C110.196 34.244 113.257 37.49 113.311 41.543C113.318 42.0831 113.271 42.6225 113.17 43.153C112.507 49.599 106.845 57.514 106.845 57.514V57.514ZM106.79 58.542C106.79 58.542 101.689 65.675 100.604 71.912C100.326 72.7509 100.192 73.6305 100.205 74.514C100.259 78.567 103.319 81.813 107.04 81.763C110.761 81.713 113.734 78.387 113.68 74.334C113.673 73.782 113.609 73.244 113.496 72.728C112.661 66.302 106.79 58.542 106.79 58.542V58.542ZM93.128 64.523C99.334 63.272 106.328 57.981 106.328 57.981C106.328 57.981 98.413 52.32 91.967 51.657C91.4365 51.5557 90.897 51.5085 90.357 51.516C86.304 51.57 83.058 54.631 83.108 58.352C83.158 62.073 86.484 65.046 90.537 64.992C91.4208 64.9815 92.2966 64.823 93.128 64.523V64.523ZM107.272 58.072C107.272 58.072 114.266 52.782 120.472 51.53C121.276 51.239 122.149 51.074 123.063 51.062C127.116 51.008 130.443 53.98 130.492 57.702C130.541 61.424 127.297 64.484 123.243 64.538C122.691 64.545 122.152 64.497 121.633 64.397C115.187 63.734 107.272 58.073 107.272 58.073V58.072Z"
              fill="#195C50"
              fillOpacity="0.65"
            />
            <path
              d="M106.845 57.514C106.845 57.514 101.555 50.52 100.304 44.313C100.004 43.4819 99.8456 42.6065 99.835 41.723C99.781 37.67 102.754 34.344 106.475 34.294C110.196 34.244 113.257 37.49 113.311 41.543C113.318 42.0831 113.271 42.6225 113.17 43.153C112.507 49.599 106.845 57.514 106.845 57.514V57.514ZM106.79 58.542C106.79 58.542 101.689 65.675 100.604 71.912C100.326 72.7509 100.192 73.6305 100.205 74.514C100.259 78.567 103.319 81.813 107.04 81.763C110.761 81.713 113.734 78.387 113.68 74.334C113.673 73.782 113.609 73.244 113.496 72.728C112.661 66.302 106.79 58.542 106.79 58.542V58.542ZM93.128 64.523C99.334 63.272 106.328 57.981 106.328 57.981C106.328 57.981 98.413 52.32 91.967 51.657C91.4365 51.5557 90.897 51.5085 90.357 51.516C86.304 51.57 83.058 54.631 83.108 58.352C83.158 62.073 86.484 65.046 90.537 64.992C91.4208 64.9815 92.2966 64.823 93.128 64.523V64.523ZM107.272 58.072C107.272 58.072 114.266 52.782 120.472 51.53C121.276 51.239 122.149 51.074 123.063 51.062C127.116 51.008 130.443 53.98 130.492 57.702C130.541 61.424 127.297 64.484 123.243 64.538C122.691 64.545 122.152 64.497 121.633 64.397C115.187 63.734 107.272 58.073 107.272 58.073V58.072Z"
              fill="black"
              fillOpacity="0.2"
            />
          </g>
          <path
            d="M387.324 152.212L344.268 195.268C342.608 196.928 341.051 200.144 340.636 202.427L338.25 218.923C337.42 224.837 341.57 229.09 347.484 228.157L363.98 225.77C366.263 225.459 369.479 223.799 371.139 222.139L414.195 179.083C421.561 171.717 425.089 163.002 414.195 152.108C403.405 141.318 394.794 144.742 387.324 152.212Z"
            fill="#1F7364"
          />
          <path
            d="M381.203 158.343C383.015 164.772 386.446 170.629 391.169 175.352C395.892 180.075 401.749 183.506 408.178 185.318L381.203 158.343Z"
            fill="#1F7364"
          />
          <path
            opacity="0.4"
            d="M214.061 151.776C214.061 152.088 213.854 152.503 213.854 152.814C223.397 171.954 238.911 187.468 258.051 197.011C258.363 197.011 258.778 196.804 259.089 196.804C255.561 184.769 252.864 172.423 250.893 160.076C238.443 158.001 226.096 155.304 214.061 151.776ZM390.852 66.722C381.127 46.3105 364.68 29.8632 344.268 20.138C348.003 32.484 351.115 45.142 353.19 57.799C365.848 59.874 378.506 62.883 390.852 66.722ZM213.024 66.712C225.474 62.977 238.131 59.865 250.789 57.79C252.864 45.444 255.458 33.201 258.985 21.166C258.674 21.166 258.259 20.958 257.948 20.958C238.443 30.607 222.569 46.896 213.024 66.712ZM336.383 55.59C333.893 42.103 330.78 28.615 326.319 15.543C326.111 14.817 326.111 14.194 326.008 13.364C318.138 11.372 310.057 10.3269 301.938 10.251C293.534 10.251 285.545 11.392 277.764 13.364C277.66 14.09 277.764 14.713 277.556 15.543C273.199 28.616 269.983 42.103 267.493 55.591C290.421 53.101 313.454 53.1 336.383 55.59ZM248.61 74.493C235.019 76.983 221.635 80.096 208.563 84.557C207.836 84.764 207.214 84.764 206.384 84.868C204.516 92.546 203.271 100.638 203.271 108.938C203.271 117.342 204.413 125.33 206.384 133.112C207.11 133.215 207.733 133.112 208.563 133.319C221.635 137.677 235.019 140.893 248.61 143.383C246.12 120.454 246.12 97.422 248.61 74.493ZM397.388 84.868C396.661 84.868 396.04 84.764 395.21 84.557C382.137 80.199 368.649 76.983 355.161 74.493C357.755 97.422 357.755 120.454 355.161 143.279C368.649 140.789 382.137 137.677 395.21 133.215C395.936 133.008 396.558 133.112 397.388 133.008C399.255 125.227 400.5 117.238 400.5 108.834C400.5 100.638 399.359 92.649 397.388 84.868ZM267.493 162.265C269.983 175.857 273.095 189.24 277.556 202.313C277.764 203.039 277.66 203.662 277.764 204.492C285.545 206.359 293.534 207.604 301.938 207.604C310.238 207.604 318.33 206.463 326.008 204.492C326.111 203.765 326.111 203.143 326.319 202.313C330.676 189.24 333.893 175.857 336.383 162.265C324.97 163.51 313.454 164.444 301.938 164.444C290.428 164.29 278.932 163.563 267.493 162.265ZM265.106 72.128C261.994 96.613 261.994 121.306 265.106 145.895C289.591 149.007 314.284 149.007 338.873 145.895C341.985 121.41 341.985 96.717 338.873 72.128C314.284 69.016 289.591 69.016 265.106 72.128Z"
            fill="#1F7364"
          />
        </svg>
      </PageHeader>
      <Section name="WD.features">
        <InfoCard name="WD.features" variant="list" />
      </Section>
      <Section name="WD.slider">
        <Slideshow images={images} />
      </Section>
      <Section name="OS.plans">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Plan
            lang={params.locale}
            isPop={false}
            plan="WD.plans.basicPlan"
            price={1399}
            features={['f1', 'f2', 'f3', 'f4', 'f5']}
          />
          <Plan
            lang={params.locale}
            isPop={false}
            plan="WD.plans.proPlan"
            price={2399}
            features={['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']}
          />
          <Plan
            lang={params.locale}
            isPop={true}
            plan="WD.plans.premiumPlan"
            price={3999}
            features={[
              'f1',
              'f2',
              'f3',
              'f4',
              'f5',
              'f6',
              'f7',
              'f8',
              'f9',
              'f10',
              'f11',
            ]}
          />
        </div>
      </Section>
      <FAQsSection name="WD.FAQs" />
    </div>
  )
}
