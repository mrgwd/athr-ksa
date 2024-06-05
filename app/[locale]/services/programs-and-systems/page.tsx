import Plan from '@/app/_components/service/Plan'
import Section from '@/app/_components/Section'
import PageHeader from '@/app/_components/service/PageHeader'
import FAQsSection from '@/app/_components/FAQsSection'
import InfoCard from '@/app/_components/InfoCard'
import { Metadata } from 'next'
const arabicMetadata: Metadata = {
  title: 'البرامج والأنظمة | أثر',
  keywords: [
    'برامج الأعمال',
    'برامج النظام',
    'برامج الإدارة',
    'برامج المحاسبة',
    'برامج المبيعات',
  ],
  description:
    'تقدم أثر حلول برمجية متكاملة لتطوير البرامج والأنظمة التي تساعد على تطوير الأعمال وتحسين الأداء',
  alternates: {
    canonical: 'https://athr-ksa.com/ar/services/programs-and-systems',
    languages: {
      en: 'https://athr-ksa.com/en/services/programs-and-systems',
      'ar-SA': 'https://athr-ksa.com/ar/services/programs-and-systems',
    },
  },
}
const englishMetadata: Metadata = {
  title: 'Programs and Systems | ATHR',
  keywords: [
    'Business Software',
    'System Software',
    'Management Software',
    'Accounting Software',
    'Sales Software',
  ],
  description:
    'ATHR offers integrated software solutions for developing programs and systems that help improve business performance',
  alternates: {
    canonical: 'https://athr-ksa.com/en/services/programs-and-systems',
    languages: {
      en: 'https://athr-ksa.com/en/services/programs-and-systems',
      'ar-SA': 'https://athr-ksa.com/ar/services/programs-and-systems',
    },
  },
}
export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  return params.locale === 'ar' ? arabicMetadata : englishMetadata
}
export default async function Page({ params }: ParamsProps) {
  return (
    <div>
      <PageHeader locale={params.locale} name="PS">
        <svg
          width="624"
          height="245"
          viewBox="0 0 624 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_643_119"
            maskUnits="userSpaceOnUse"
            x="580"
            y="115"
            width="44"
            height="44"
          >
            <path d="M580 115H624V159H580V115Z" fill="white" />
          </mask>
          <g mask="url(#mask0_643_119)">
            <path
              d="M587.652 127.602C594.252 121.002 605.061 121.002 611.661 127.602C618.261 134.202 618.261 145.011 611.661 151.611"
              stroke="#1F7364"
              strokeWidth="14.348"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M587.652 127.602C594.252 121.002 605.061 121.002 611.661 127.602C618.261 134.202 618.261 145.011 611.661 151.611"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="14.348"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <mask
            id="mask1_643_119"
            maskUnits="userSpaceOnUse"
            x="0"
            y="123"
            width="23"
            height="23"
          >
            <path d="M23 146H0V123H23V146Z" fill="white" />
          </mask>
          <g mask="url(#mask1_643_119)">
            <path
              d="M19.0008 139.413C15.5508 142.862 9.90078 142.862 6.45078 139.412C3.00078 135.962 3.00078 130.312 6.45078 126.862"
              stroke="#1F7364"
              strokeWidth="7.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0008 139.413C15.5508 142.862 9.90078 142.862 6.45078 139.412C3.00078 135.962 3.00078 130.312 6.45078 126.862"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="7.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <mask
            id="mask2_643_119"
            maskUnits="userSpaceOnUse"
            x="80"
            y="187"
            width="17"
            height="17"
          >
            <path d="M80 187H97V204H80V187Z" fill="white" />
          </mask>
          <g mask="url(#mask2_643_119)">
            <path
              d="M93.5446 188.549C93.0436 188.048 92.2316 188.048 91.7306 188.549L89.5356 190.744C89.0346 191.245 88.2226 191.245 87.7216 190.744L85.5266 188.549C85.0256 188.048 84.2136 188.048 83.7126 188.549L81.5496 190.712C81.0486 191.213 81.0486 192.025 81.5496 192.526L83.7446 194.721C84.2456 195.222 84.2456 196.035 83.7446 196.536L81.5496 198.731C81.0486 199.232 81.0486 200.044 81.5496 200.545L83.7126 202.708C84.2136 203.209 85.0256 203.209 85.5266 202.708L87.7216 200.513C88.2226 200.012 89.0346 200.012 89.5356 200.513L91.7306 202.708C92.2316 203.209 93.0436 203.209 93.5446 202.708L95.7076 200.545C96.2086 200.044 96.2086 199.232 95.7076 198.731L93.5126 196.536C93.0116 196.035 93.0116 195.222 93.5126 194.721L95.7076 192.526C96.2086 192.025 96.2086 191.213 95.7076 190.712L93.5446 188.549V188.549Z"
              fill="white"
              fillOpacity="0.21"
              stroke="white"
              strokeOpacity="0.21"
              strokeWidth="1.186"
              strokeMiterlimit="10"
            />
            <path
              d="M93.5446 188.549C93.0436 188.048 92.2316 188.048 91.7306 188.549L89.5356 190.744C89.0346 191.245 88.2226 191.245 87.7216 190.744L85.5266 188.549C85.0256 188.048 84.2136 188.048 83.7126 188.549L81.5496 190.712C81.0486 191.213 81.0486 192.025 81.5496 192.526L83.7446 194.721C84.2456 195.222 84.2456 196.035 83.7446 196.536L81.5496 198.731C81.0486 199.232 81.0486 200.044 81.5496 200.545L83.7126 202.708C84.2136 203.209 85.0256 203.209 85.5266 202.708L87.7216 200.513C88.2226 200.012 89.0346 200.012 89.5356 200.513L91.7306 202.708C92.2316 203.209 93.0436 203.209 93.5446 202.708L95.7076 200.545C96.2086 200.044 96.2086 199.232 95.7076 198.731L93.5126 196.536C93.0116 196.035 93.0116 195.222 93.5126 194.721L95.7076 192.526C96.2086 192.025 96.2086 191.213 95.7076 190.712L93.5446 188.549V188.549Z"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <mask
            id="mask3_643_119"
            maskUnits="userSpaceOnUse"
            x="491"
            y="72"
            width="17"
            height="17"
          >
            <path d="M491 72H508V89H491V72Z" fill="white" />
          </mask>
          <g mask="url(#mask3_643_119)">
            <path
              d="M504.544 73.5491C504.043 73.0481 503.231 73.0481 502.73 73.5491L500.535 75.7441C500.034 76.2451 499.221 76.2451 498.72 75.7441L496.525 73.5491C496.024 73.0481 495.212 73.0481 494.711 73.5491L492.548 75.7121C492.047 76.2131 492.047 77.0251 492.548 77.5271L494.743 79.7221C495.244 80.2231 495.244 81.0351 494.743 81.5361L492.548 83.7311C492.047 84.2321 492.047 85.0441 492.548 85.5461L494.711 87.7091C495.212 88.2101 496.024 88.2101 496.525 87.7091L498.72 85.5141C499.221 85.0131 500.034 85.0131 500.535 85.5141L502.73 87.7091C503.231 88.2101 504.043 88.2101 504.544 87.7091L506.707 85.5461C507.208 85.0451 507.208 84.2321 506.707 83.7311L504.512 81.5361C504.011 81.0351 504.011 80.2231 504.512 79.7221L506.707 77.5271C507.208 77.0261 507.208 76.2141 506.707 75.7121L504.544 73.5491V73.5491Z"
              fill="white"
              fillOpacity="0.21"
              stroke="white"
              strokeOpacity="0.21"
              strokeWidth="1.186"
              strokeMiterlimit="10"
            />
            <path
              d="M504.544 73.5491C504.043 73.0481 503.231 73.0481 502.73 73.5491L500.535 75.7441C500.034 76.2451 499.221 76.2451 498.72 75.7441L496.525 73.5491C496.024 73.0481 495.212 73.0481 494.711 73.5491L492.548 75.7121C492.047 76.2131 492.047 77.0251 492.548 77.5271L494.743 79.7221C495.244 80.2231 495.244 81.0351 494.743 81.5361L492.548 83.7311C492.047 84.2321 492.047 85.0441 492.548 85.5461L494.711 87.7091C495.212 88.2101 496.024 88.2101 496.525 87.7091L498.72 85.5141C499.221 85.0131 500.034 85.0131 500.535 85.5141L502.73 87.7091C503.231 88.2101 504.043 88.2101 504.544 87.7091L506.707 85.5461C507.208 85.0451 507.208 84.2321 506.707 83.7311L504.512 81.5361C504.011 81.0351 504.011 80.2231 504.512 79.7221L506.707 77.5271C507.208 77.0261 507.208 76.2141 506.707 75.7121L504.544 73.5491V73.5491Z"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <mask
            id="mask4_643_119"
            maskUnits="userSpaceOnUse"
            x="538"
            y="201"
            width="35"
            height="35"
          >
            <path d="M538 201H573V236H538V201Z" fill="white" />
          </mask>
          <g mask="url(#mask4_643_119)">
            <path
              d="M547.209 218.534H539.811"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M547.209 218.534H539.811"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M571.248 218.534H563.859"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M571.248 218.534H563.859"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M549.644 224.414L544.42 229.649"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M549.644 224.414L544.42 229.649"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M566.649 207.42L561.414 212.644"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M566.649 207.42L561.414 212.644"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 226.859V234.248"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 226.859V234.248"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 202.81V210.209"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M555.533 202.81V210.209"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M561.414 224.414L566.649 229.649"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M561.414 224.414L566.649 229.649"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M544.42 207.42L549.644 212.644"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M544.42 207.42L549.644 212.644"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
          <mask
            id="mask5_643_119"
            maskUnits="userSpaceOnUse"
            x="80"
            y="37"
            width="54"
            height="54"
          >
            <path
              d="M80 63.7822L106.782 37.0005L133.563 63.7822L106.782 90.5639L80 63.7822Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask5_643_119)">
            <path
              d="M106.845 63.514C106.845 63.514 101.555 56.52 100.304 50.313C100.004 49.4819 99.8456 48.6065 99.835 47.723C99.781 43.67 102.754 40.344 106.475 40.294C110.196 40.244 113.257 43.49 113.311 47.543C113.318 48.0831 113.271 48.6225 113.17 49.153C112.507 55.599 106.845 63.514 106.845 63.514V63.514ZM106.79 64.542C106.79 64.542 101.689 71.675 100.604 77.912C100.326 78.7509 100.192 79.6305 100.205 80.514C100.259 84.567 103.319 87.813 107.04 87.763C110.761 87.713 113.734 84.387 113.68 80.334C113.673 79.782 113.609 79.244 113.496 78.728C112.661 72.302 106.79 64.542 106.79 64.542V64.542ZM93.128 70.523C99.334 69.272 106.328 63.981 106.328 63.981C106.328 63.981 98.413 58.32 91.967 57.657C91.4365 57.5557 90.897 57.5085 90.357 57.516C86.304 57.57 83.058 60.631 83.108 64.352C83.158 68.073 86.484 71.046 90.537 70.992C91.4208 70.9815 92.2966 70.823 93.128 70.523V70.523ZM107.272 64.072C107.272 64.072 114.266 58.782 120.472 57.53C121.276 57.239 122.149 57.074 123.063 57.062C127.116 57.008 130.443 59.98 130.492 63.702C130.541 67.424 127.297 70.484 123.243 70.538C122.691 70.545 122.152 70.497 121.633 70.397C115.187 69.734 107.272 64.073 107.272 64.073V64.072Z"
              fill="#195C50"
              fillOpacity="0.65"
            />
            <path
              d="M106.845 63.514C106.845 63.514 101.555 56.52 100.304 50.313C100.004 49.4819 99.8456 48.6065 99.835 47.723C99.781 43.67 102.754 40.344 106.475 40.294C110.196 40.244 113.257 43.49 113.311 47.543C113.318 48.0831 113.271 48.6225 113.17 49.153C112.507 55.599 106.845 63.514 106.845 63.514V63.514ZM106.79 64.542C106.79 64.542 101.689 71.675 100.604 77.912C100.326 78.7509 100.192 79.6305 100.205 80.514C100.259 84.567 103.319 87.813 107.04 87.763C110.761 87.713 113.734 84.387 113.68 80.334C113.673 79.782 113.609 79.244 113.496 78.728C112.661 72.302 106.79 64.542 106.79 64.542V64.542ZM93.128 70.523C99.334 69.272 106.328 63.981 106.328 63.981C106.328 63.981 98.413 58.32 91.967 57.657C91.4365 57.5557 90.897 57.5085 90.357 57.516C86.304 57.57 83.058 60.631 83.108 64.352C83.158 68.073 86.484 71.046 90.537 70.992C91.4208 70.9815 92.2966 70.823 93.128 70.523V70.523ZM107.272 64.072C107.272 64.072 114.266 58.782 120.472 57.53C121.276 57.239 122.149 57.074 123.063 57.062C127.116 57.008 130.443 59.98 130.492 63.702C130.541 67.424 127.297 70.484 123.243 70.538C122.691 70.545 122.152 70.497 121.633 70.397C115.187 69.734 107.272 64.073 107.272 64.073V64.072Z"
              fill="black"
              fillOpacity="0.2"
            />
          </g>
          <path
            d="M368.544 232.24H266.461C262.276 232.24 258.805 228.769 258.805 224.584C258.805 220.399 262.276 216.928 266.461 216.928H368.544C372.73 216.928 376.201 220.399 376.201 224.584C376.201 228.769 372.73 232.24 368.544 232.24Z"
            fill="#1F7364"
          />
          <path
            opacity="0.4"
            d="M378.747 193.958H256.247C233.687 193.958 215.414 175.685 215.414 153.124V61.249C215.414 38.688 233.687 20.416 256.247 20.416H378.747C401.308 20.416 419.581 38.689 419.581 61.249V153.124C419.581 175.685 401.308 193.958 378.747 193.958Z"
            fill="#1F7364"
          />
          <path
            d="M371.196 92.5891H333.629C329.444 92.5891 325.973 89.1181 325.973 84.9331C325.973 80.7481 329.444 77.2771 333.629 77.2771H371.196C373.226 77.2782 375.173 78.0851 376.608 79.5207C378.044 80.9562 378.851 82.9029 378.852 84.9331C378.851 86.9633 378.044 88.91 376.608 90.3455C375.173 91.7811 373.226 92.588 371.196 92.5891ZM297.083 95.1411C291.469 95.1411 286.875 90.5471 286.875 84.9331C286.875 79.3191 291.367 74.7251 297.083 74.7251C302.698 74.7251 307.292 79.3191 307.292 84.9331C307.292 90.5471 302.8 95.1411 297.083 95.1411ZM264.927 95.1411C259.312 95.1411 254.719 90.5471 254.719 84.9331C254.719 79.3191 259.21 74.7251 264.927 74.7251H265.029C270.644 74.7251 275.238 79.3191 275.238 84.9331C275.238 90.5471 270.542 95.1411 264.927 95.1411ZM371.196 151.695H263.906C259.721 151.695 256.148 148.225 256.148 144.039C256.148 139.853 259.517 136.383 263.702 136.383H371.196C373.226 136.384 375.173 137.191 376.608 138.627C378.044 140.062 378.851 142.009 378.852 144.039C378.852 146.07 378.045 148.017 376.61 149.453C375.174 150.889 373.226 151.695 371.196 151.695Z"
            fill="#1F7364"
          />
        </svg>
      </PageHeader>
      <Section name="PS.features">
        <InfoCard name="PS.features" variant="list" />
      </Section>
      <Section name="OS.plans">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Plan
            lang={params.locale}
            isPop={false}
            plan="PS.plans.basicPlan"
            price={2500}
            features={['f1', 'f2', 'f3']}
          />
          <Plan
            lang={params.locale}
            isPop={false}
            plan="PS.plans.proPlan"
            price={5000}
            features={['f1', 'f2', 'f3', 'f4']}
          />
          <Plan
            lang={params.locale}
            isPop={true}
            plan="PS.plans.premiumPlan"
            features={['f1', 'f2', 'f3', 'f4', 'f5', 'f6']}
          />
        </div>
      </Section>
      <FAQsSection name="PS.FAQs" />
    </div>
  )
}
