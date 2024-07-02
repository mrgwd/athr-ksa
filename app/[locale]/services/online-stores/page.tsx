import client1 from '@/public/images/Clients/online-stores/client1.webp'
import client2 from '@/public/images/Clients/online-stores/client2.webp'
import client3 from '@/public/images/Clients/online-stores/client3.webp'
import Slideshow from '@/app/_components/common/Slideshow'
import Plan from '@/app/_components/service/Plan'
import Section from '@/app/_components/common/Section'
import PageHeader from '@/app/_components/service/PageHeader'
import FAQsSection from '@/app/_components/common/FAQsSection'
import InfoCard from '@/app/_components/common/InfoCard'
import { Metadata } from 'next'
const englishMetadata: Metadata = {
  title: 'Online Stores | ATHR',
  keywords: [
    'E-commerce',
    'Online store',
    'Sell online',
    'Shop online',
    'E-commerce platforms',
  ],
  description:
    'We offer you the best plans and solutions to create your online store, which helps you sell your products easily and quickly, reach customers better, and significantly increase sales.',
  alternates: {
    canonical: 'https://athr-ksa.com/en/services/online-stores',
    languages: {
      en: 'https://athr-ksa.com/en/services/online-stores',
      'ar-SA': 'https://athr-ksa.com/ar/services/online-stores',
    },
  },
}
const arabicMetadata: Metadata = {
  title: 'المتاجر الإلكترونية | أثر',
  keywords: [
    'التجارة الإلكترونية',
    'متجر على الانترنت',
    'بيع عبر الإنترنت',
    'تسوق عبر الإنترنت',
    'منصات التجارة الإلكترونية',
  ],
  description:
    'نقدم لك أفضل الخطط والحلول لإنشاء متجرك الإلكتروني والتي تساعدك على بيع منتجاتك بسهولة وسرعة والوصول للعملاء بشكل أفضل وزيادة المبيعات بشكل ملحوظ.',
  alternates: {
    canonical: 'https://athr-ksa.com/ar/services/online-stores',
    languages: {
      en: 'https://athr-ksa.com/en/services/online-stores',
      'ar-SA': 'https://athr-ksa.com/ar/services/online-stores',
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
    { imgSrc: client1, imgUrl: 'https://shubra.online' },
    { imgSrc: client2, imgUrl: 'https://rahatystore.com' },
    { imgSrc: client3, imgUrl: 'https://fathint.com' },
  ]
  return (
    <div>
      <PageHeader locale={params.locale} name="OS">
        <svg
          width="624"
          height="246"
          viewBox="0 0 624 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_579_6)">
            <path
              d="M366.551 245.688C371.908 245.688 377.045 243.56 380.833 239.772C384.621 235.984 386.749 230.847 386.749 225.49C386.749 220.133 384.621 214.996 380.833 211.208C377.045 207.42 371.908 205.292 366.551 205.292C361.194 205.292 356.057 207.42 352.269 211.208C348.481 214.996 346.353 220.133 346.353 225.49C346.353 230.847 348.481 235.984 352.269 239.772C356.057 243.56 361.194 245.688 366.551 245.688ZM274.217 245.688C279.573 245.687 284.71 243.559 288.498 239.772C292.286 235.984 294.414 230.847 294.415 225.49C294.414 220.133 292.286 214.996 288.498 211.208C284.71 207.421 279.573 205.293 274.217 205.292C268.86 205.293 263.723 207.421 259.936 211.209C256.148 214.997 254.02 220.133 254.02 225.49C254.02 230.846 256.148 235.983 259.936 239.771C263.723 243.559 268.86 245.687 274.217 245.688Z"
              fill="#207465"
            />
            <path
              opacity="0.4"
              d="M234.86 31.4738L232.552 59.7508C232.09 65.1758 236.361 69.6768 241.785 69.6768H418.488C423.336 69.6768 427.375 65.9838 427.722 61.1358C429.222 40.7068 413.641 24.0868 393.212 24.0868H251.596C250.442 19.0088 248.133 14.1608 244.555 10.1218C241.741 7.08176 238.332 4.65276 234.54 2.98476C230.748 1.31716 226.653 0.446493 222.511 0.426758H202.082C197.35 0.426758 193.426 4.35076 193.426 9.08276C193.426 13.8148 197.35 17.7388 202.082 17.7388H222.165C225.742 17.7388 229.09 19.2388 231.513 21.7788C233.937 24.4338 235.091 27.8958 234.86 31.4738Z"
              fill="#207465"
            />
            <path
              d="M415.722 86.9896H238.672C233.825 86.9896 229.901 90.6826 229.439 95.4156L225.284 145.622C223.668 165.243 239.134 182.209 258.87 182.209H387.214C404.526 182.209 419.761 168.013 421.031 150.7L424.839 96.8006C424.949 95.5436 424.794 94.2766 424.384 93.0826C423.974 91.8891 423.318 90.7949 422.459 89.8705C421.6 88.946 420.556 88.212 419.396 87.7156C418.235 87.2196 416.984 86.9726 415.722 86.9896Z"
              fill="#207465"
            />
            <mask
              id="mask0_579_6"
              maskUnits="userSpaceOnUse"
              x="580"
              y="113"
              width="44"
              height="44"
            >
              <path d="M580 113H624V157H580V113Z" fill="white" />
            </mask>
            <g mask="url(#mask0_579_6)">
              <path
                d="M587.652 125.602C594.252 119.002 605.061 119.002 611.661 125.602C618.261 132.202 618.261 143.011 611.661 149.611"
                stroke="#207465"
                strokeWidth="14.348"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M587.652 125.602C594.252 119.002 605.061 119.002 611.661 125.602C618.261 132.202 618.261 143.011 611.661 149.611"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="14.348"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <mask
              id="mask1_579_6"
              maskUnits="userSpaceOnUse"
              x="0"
              y="121"
              width="23"
              height="23"
            >
              <path d="M23 144H0V121H23V144Z" fill="white" />
            </mask>
            <g mask="url(#mask1_579_6)">
              <path
                d="M19.0008 137.413C15.5508 140.862 9.90078 140.862 6.45078 137.412C3.00078 133.962 3.00078 128.312 6.45078 124.862"
                stroke="#207465"
                strokeWidth="7.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0008 137.413C15.5508 140.862 9.90078 140.862 6.45078 137.412C3.00078 133.962 3.00078 128.312 6.45078 124.862"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="7.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <mask
              id="mask2_579_6"
              maskUnits="userSpaceOnUse"
              x="80"
              y="185"
              width="17"
              height="17"
            >
              <path d="M80 185H97V202H80V185Z" fill="white" />
            </mask>
            <g mask="url(#mask2_579_6)">
              <path
                d="M93.5446 186.549C93.0436 186.048 92.2316 186.048 91.7306 186.549L89.5356 188.744C89.0346 189.245 88.2226 189.245 87.7216 188.744L85.5266 186.549C85.0256 186.048 84.2136 186.048 83.7126 186.549L81.5496 188.712C81.0486 189.213 81.0486 190.025 81.5496 190.526L83.7446 192.721C84.2456 193.222 84.2456 194.035 83.7446 194.536L81.5496 196.731C81.0486 197.232 81.0486 198.044 81.5496 198.545L83.7126 200.708C84.2136 201.209 85.0256 201.209 85.5266 200.708L87.7216 198.513C88.2226 198.012 89.0346 198.012 89.5356 198.513L91.7306 200.708C92.2316 201.209 93.0436 201.209 93.5446 200.708L95.7076 198.545C96.2086 198.044 96.2086 197.232 95.7076 196.731L93.5126 194.536C93.0116 194.035 93.0116 193.222 93.5126 192.721L95.7076 190.526C96.2086 190.025 96.2086 189.213 95.7076 188.712L93.5446 186.549V186.549Z"
                fill="white"
                fillOpacity="0.21"
                stroke="white"
                strokeOpacity="0.21"
                strokeWidth="1.186"
                strokeMiterlimit="10"
              />
              <path
                d="M93.5446 186.549C93.0436 186.048 92.2316 186.048 91.7306 186.549L89.5356 188.744C89.0346 189.245 88.2226 189.245 87.7216 188.744L85.5266 186.549C85.0256 186.048 84.2136 186.048 83.7126 186.549L81.5496 188.712C81.0486 189.213 81.0486 190.025 81.5496 190.526L83.7446 192.721C84.2456 193.222 84.2456 194.035 83.7446 194.536L81.5496 196.731C81.0486 197.232 81.0486 198.044 81.5496 198.545L83.7126 200.708C84.2136 201.209 85.0256 201.209 85.5266 200.708L87.7216 198.513C88.2226 198.012 89.0346 198.012 89.5356 198.513L91.7306 200.708C92.2316 201.209 93.0436 201.209 93.5446 200.708L95.7076 198.545C96.2086 198.044 96.2086 197.232 95.7076 196.731L93.5126 194.536C93.0116 194.035 93.0116 193.222 93.5126 192.721L95.7076 190.526C96.2086 190.025 96.2086 189.213 95.7076 188.712L93.5446 186.549V186.549Z"
                fill="white"
                fillOpacity="0.21"
              />
            </g>
            <mask
              id="mask3_579_6"
              maskUnits="userSpaceOnUse"
              x="491"
              y="70"
              width="17"
              height="17"
            >
              <path d="M491 70H508V87H491V70Z" fill="white" />
            </mask>
            <g mask="url(#mask3_579_6)">
              <path
                d="M504.544 71.5491C504.043 71.0481 503.231 71.0481 502.73 71.5491L500.535 73.7441C500.034 74.2451 499.221 74.2451 498.72 73.7441L496.525 71.5491C496.024 71.0481 495.212 71.0481 494.711 71.5491L492.548 73.7121C492.047 74.2131 492.047 75.0251 492.548 75.5271L494.743 77.7221C495.244 78.2231 495.244 79.0351 494.743 79.5361L492.548 81.7311C492.047 82.2321 492.047 83.0441 492.548 83.5461L494.711 85.7091C495.212 86.2101 496.024 86.2101 496.525 85.7091L498.72 83.5141C499.221 83.0131 500.034 83.0131 500.535 83.5141L502.73 85.7091C503.231 86.2101 504.043 86.2101 504.544 85.7091L506.707 83.5461C507.208 83.0451 507.208 82.2321 506.707 81.7311L504.512 79.5361C504.011 79.0351 504.011 78.2231 504.512 77.7221L506.707 75.5271C507.208 75.0261 507.208 74.2141 506.707 73.7121L504.544 71.5491V71.5491Z"
                fill="white"
                fillOpacity="0.21"
                stroke="white"
                strokeOpacity="0.21"
                strokeWidth="1.186"
                strokeMiterlimit="10"
              />
              <path
                d="M504.544 71.5491C504.043 71.0481 503.231 71.0481 502.73 71.5491L500.535 73.7441C500.034 74.2451 499.221 74.2451 498.72 73.7441L496.525 71.5491C496.024 71.0481 495.212 71.0481 494.711 71.5491L492.548 73.7121C492.047 74.2131 492.047 75.0251 492.548 75.5271L494.743 77.7221C495.244 78.2231 495.244 79.0351 494.743 79.5361L492.548 81.7311C492.047 82.2321 492.047 83.0441 492.548 83.5461L494.711 85.7091C495.212 86.2101 496.024 86.2101 496.525 85.7091L498.72 83.5141C499.221 83.0131 500.034 83.0131 500.535 83.5141L502.73 85.7091C503.231 86.2101 504.043 86.2101 504.544 85.7091L506.707 83.5461C507.208 83.0451 507.208 82.2321 506.707 81.7311L504.512 79.5361C504.011 79.0351 504.011 78.2231 504.512 77.7221L506.707 75.5271C507.208 75.0261 507.208 74.2141 506.707 73.7121L504.544 71.5491V71.5491Z"
                fill="white"
                fillOpacity="0.21"
              />
            </g>
            <mask
              id="mask4_579_6"
              maskUnits="userSpaceOnUse"
              x="538"
              y="199"
              width="35"
              height="35"
            >
              <path d="M538 199H573V234H538V199Z" fill="white" />
            </mask>
            <g mask="url(#mask4_579_6)">
              <path
                d="M547.209 216.534H539.811"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M547.209 216.534H539.811"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M571.248 216.534H563.859"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M571.248 216.534H563.859"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M549.644 222.414L544.42 227.649"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M549.644 222.414L544.42 227.649"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M566.649 205.42L561.414 210.644"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M566.649 205.42L561.414 210.644"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M555.533 224.859V232.248"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M555.533 224.859V232.248"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M555.533 200.81V208.209"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M555.533 200.81V208.209"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M561.414 222.414L566.649 227.649"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M561.414 222.414L566.649 227.649"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M544.42 205.42L549.644 210.644"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M544.42 205.42L549.644 210.644"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </g>
            <mask
              id="mask5_579_6"
              maskUnits="userSpaceOnUse"
              x="80"
              y="35"
              width="54"
              height="54"
            >
              <path
                d="M80 61.7822L106.782 35.0005L133.563 61.7822L106.782 88.5639L80 61.7822Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask5_579_6)">
              <path
                d="M106.845 61.514C106.845 61.514 101.555 54.52 100.304 48.313C100.004 47.4819 99.8456 46.6065 99.835 45.723C99.781 41.67 102.754 38.344 106.475 38.294C110.196 38.244 113.257 41.49 113.311 45.543C113.318 46.0831 113.271 46.6225 113.17 47.153C112.507 53.599 106.845 61.514 106.845 61.514V61.514ZM106.79 62.542C106.79 62.542 101.689 69.675 100.604 75.912C100.326 76.7509 100.192 77.6305 100.205 78.514C100.259 82.567 103.319 85.813 107.04 85.763C110.761 85.713 113.734 82.387 113.68 78.334C113.673 77.782 113.609 77.244 113.496 76.728C112.661 70.302 106.79 62.542 106.79 62.542V62.542ZM93.128 68.523C99.334 67.272 106.328 61.981 106.328 61.981C106.328 61.981 98.413 56.32 91.967 55.657C91.4365 55.5557 90.897 55.5085 90.357 55.516C86.304 55.57 83.058 58.631 83.108 62.352C83.158 66.073 86.484 69.046 90.537 68.992C91.4208 68.9815 92.2966 68.823 93.128 68.523ZM107.272 62.072C107.272 62.072 114.266 56.782 120.472 55.53C121.276 55.239 122.149 55.074 123.063 55.062C127.116 55.008 130.443 57.98 130.492 61.702C130.541 65.424 127.297 68.484 123.243 68.538C122.691 68.545 122.152 68.497 121.633 68.397C115.187 67.734 107.272 62.073 107.272 62.073V62.072Z"
                fill="#195C50"
                fillOpacity="0.62"
              />
              <path
                d="M106.845 61.514C106.845 61.514 101.555 54.52 100.304 48.313C100.004 47.4819 99.8456 46.6065 99.835 45.723C99.781 41.67 102.754 38.344 106.475 38.294C110.196 38.244 113.257 41.49 113.311 45.543C113.318 46.0831 113.271 46.6225 113.17 47.153C112.507 53.599 106.845 61.514 106.845 61.514V61.514ZM106.79 62.542C106.79 62.542 101.689 69.675 100.604 75.912C100.326 76.7509 100.192 77.6305 100.205 78.514C100.259 82.567 103.319 85.813 107.04 85.763C110.761 85.713 113.734 82.387 113.68 78.334C113.673 77.782 113.609 77.244 113.496 76.728C112.661 70.302 106.79 62.542 106.79 62.542V62.542ZM93.128 68.523C99.334 67.272 106.328 61.981 106.328 61.981C106.328 61.981 98.413 56.32 91.967 55.657C91.4365 55.5557 90.897 55.5085 90.357 55.516C86.304 55.57 83.058 58.631 83.108 62.352C83.158 66.073 86.484 69.046 90.537 68.992C91.4208 68.9815 92.2966 68.823 93.128 68.523ZM107.272 62.072C107.272 62.072 114.266 56.782 120.472 55.53C121.276 55.239 122.149 55.074 123.063 55.062C127.116 55.008 130.443 57.98 130.492 61.702C130.541 65.424 127.297 68.484 123.243 68.538C122.691 68.545 122.152 68.497 121.633 68.397C115.187 67.734 107.272 62.073 107.272 62.073V62.072Z"
                fill="black"
                fillOpacity="0.2"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_579_6">
              <rect width="624" height="246" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </PageHeader>
      <Section name="OS.features">
        <InfoCard name="OS.features" variant="list" />
      </Section>
      <Section name="OS.slider">
        <Slideshow images={images} />
      </Section>
      <Section name="OS.plans">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Plan
            lang={params.locale}
            isPop={false}
            plan="OS.plans.basicPlan"
            price={2499}
            features={['f1', 'f2', 'f3', 'f4']}
          />
          <Plan
            lang={params.locale}
            isPop={false}
            plan="OS.plans.proPlan"
            price={3999}
            features={['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']}
          />
          <Plan
            lang={params.locale}
            isPop={true}
            plan="OS.plans.premiumPlan"
            price={5999}
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
            ]}
          />
          <Plan
            lang={params.locale}
            isPop={false}
            plan="OS.plans.platinumPlan"
            price={9999}
            features={['f1', 'f2', 'f3', 'f4']}
          />
        </div>
      </Section>
      <FAQsSection name="OS.FAQs" />
    </div>
  )
}
