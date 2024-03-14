import { GlobalEdit, ShoppingCart } from 'iconsax-react'
import Section from './Section'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <Section name="services">
      <div className="grid grid-cols-1 justify-center gap-5 child:flex lg:child:px-4 lg:child:py-8 child:items-start child:gap-2 child:rounded-3xl child:bg-gradient-to-b child:px-6 child:py-8 child:transition-all child-hover:scale-105 sm:grid-cols-2 sm:gap-8 child:sm:block child:sm:rounded-[3rem] child:sm:px-4 child:sm:py-8 md:gap-12 lg:gap-8 lg:grid-cols-3 xl:child:px-12 xl:child:py-16 2xl:gap-16">
        <ServiceCard
          link="/services/online-stores"
          name="onlineStores"
          className="from-[#CFD2F0] to-[#F3F3FB] child:text-dm-service sm:text-center"
        >
          <ShoppingCart variant="Bulk" />
        </ServiceCard>
        <ServiceCard
          link="/services/web-development"
          name="webDev"
          className="from-[#CFF0EA] to-[#E9F8F5] child:text-wd-service sm:text-center"
        >
          <GlobalEdit variant="Bulk" />
        </ServiceCard>
        <ServiceCard
          link="/services/social-media"
          name="socialMediaDesigns"
          className="from-[#EAD3C7] to-[#F9F3EF] child:text-ma-service sm:text-center"
        >
          <svg
            width="125"
            height="106"
            className="mx-auto h-20 w-44 sm:h-32 sm:w-24 md:w-32 lg:w-28"
            viewBox="0 0 125 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M116.818 26.9701L105.126 23.8371C100.047 22.4763 96.2083 24.6927 94.8474 29.7714L91.7183 41.4497C90.3537 46.5423 92.5701 50.3813 97.6488 51.7421L109.327 54.8713C114.406 56.2321 118.245 54.0157 119.606 48.937L122.738 37.2448C124.113 32.1698 121.897 28.3309 116.818 26.9701Z"
              fill="#AE5726"
            />
            <path
              d="M105.782 44.7713C106.493 44.9618 107.235 45.0104 107.964 44.9143C108.694 44.8183 109.398 44.5794 110.035 44.2114C110.672 43.8434 111.231 43.3535 111.679 42.7696C112.127 42.1857 112.456 41.5192 112.646 40.8083C112.837 40.0974 112.885 39.3559 112.789 38.6262C112.693 37.8965 112.454 37.1929 112.086 36.5555C111.718 35.9181 111.229 35.3594 110.645 34.9114C110.061 34.4633 109.394 34.1347 108.683 33.9442C107.248 33.5595 105.718 33.7609 104.431 34.5041C103.143 35.2473 102.204 36.4714 101.819 37.9072C101.435 39.343 101.636 40.8728 102.379 42.16C103.122 43.4473 104.346 44.3866 105.782 44.7713ZM115.892 34.947C115.708 34.8996 115.535 34.8159 115.383 34.7009C115.232 34.5858 115.105 34.4417 115.01 34.277C114.921 34.1038 114.865 33.9241 114.84 33.738C114.813 33.5511 114.824 33.3608 114.87 33.1779C114.919 32.9965 115.009 32.8264 115.124 32.6776C115.242 32.5149 115.377 32.4016 115.54 32.2957C115.947 32.0608 116.477 32.0382 116.897 32.2555C116.991 32.2956 117.067 32.3459 117.14 32.4102C117.216 32.4605 117.289 32.5248 117.357 32.6031C117.416 32.6636 117.467 32.7521 117.522 32.8266C117.61 32.9998 117.67 33.1654 117.691 33.3655C117.716 33.5516 117.709 33.7442 117.661 33.9256C117.612 34.107 117.522 34.2772 117.407 34.4259C117.293 34.5746 117.154 34.702 116.991 34.8078C116.818 34.896 116.638 34.9526 116.452 34.9775C116.266 35.0024 116.073 34.9956 115.892 34.947Z"
              fill="#AE5726"
            />
            <path
              opacity="0.4"
              d="M31.2697 3.43282L12.8122 8.3785C4.78529 10.5293 1.28221 16.5968 3.43302 24.6237L8.3787 43.0813C10.5295 51.1082 16.597 54.6113 24.6239 52.4605L43.0815 47.5148C51.1084 45.364 54.6115 39.2965 52.4607 31.2695L47.515 12.812C45.3642 4.78508 39.2967 1.28201 31.2697 3.43282Z"
              fill="#AE5726"
            />
            <path
              d="M30.5645 20.8282L32.4178 27.304L38.1939 25.6617C38.6128 25.5495 39.022 25.8416 39.0622 26.2563L39.419 30.675C39.4356 31.0015 39.23 31.2929 38.9272 31.3977L33.9891 32.8154L38.5377 48.7322L31.9516 50.6151L27.4031 34.6983L23.672 35.7689C23.2971 35.8694 22.9336 35.6595 22.8331 35.2847L21.6443 31.1125C21.5439 30.7376 21.7537 30.3741 22.1286 30.2737L25.8597 29.203L23.8291 22.0657C23.5804 21.2008 23.5049 20.2953 23.6068 19.4012C23.7088 18.5071 23.9861 17.6418 24.423 16.8551C24.8599 16.0683 25.4478 15.3756 26.1529 14.8164C26.8581 14.2573 27.6666 13.8428 28.5322 13.5967L34.4627 11.9131C34.8375 11.8127 35.201 12.0225 35.3015 12.3974L36.8078 17.6662C36.9083 18.0411 36.6984 18.4046 36.3235 18.5051L31.0547 20.0114C30.6739 20.0898 30.4699 20.4753 30.5645 20.8282Z"
              fill="#AE5726"
            />
            <path
              d="M68.9345 46.4077H66.0456C63.6478 46.4077 61.7122 48.3433 61.7122 50.741V53.6299C61.7122 56.0277 63.6478 57.9633 66.0456 57.9633H68.9345C71.3322 57.9633 73.2678 56.0277 73.2678 53.6299V50.741C73.2678 48.3433 71.3322 46.4077 68.9345 46.4077ZM45.1011 72.9046H42.2122C39.8145 72.9046 37.8789 74.8402 37.8789 77.2379V80.1268C37.8789 82.5246 39.8145 84.4602 42.2122 84.4602H45.1011C47.4989 84.4602 49.4345 82.5246 49.4345 80.1268V77.2379C49.4345 74.8402 47.47 72.9046 45.1011 72.9046ZM92.6522 72.9046H89.7633C87.3656 72.9046 85.43 74.8402 85.43 77.2379V80.1268C85.43 82.5246 87.3656 84.4602 89.7633 84.4602H92.6522C95.05 84.4602 96.9856 82.5246 96.9856 80.1268V77.2379C96.9856 74.8402 95.05 72.9046 92.6522 72.9046Z"
              fill="#AE5726"
            />
            <path
              d="M43.5983 76.5042C42.4139 76.5042 41.4316 75.522 41.4316 74.3375C41.4316 62.002 50.6761 51.6309 62.925 50.1864C64.0805 50.0709 65.1783 50.9086 65.3228 52.0931C65.4672 53.2775 64.6005 54.3464 63.4161 54.4909C58.5542 55.0639 54.0716 57.401 50.8181 61.0591C47.5647 64.7172 45.7667 69.442 45.765 74.3375C45.765 75.522 44.7828 76.5042 43.5983 76.5042ZM91.2621 76.51C90.0776 76.51 89.0954 75.5278 89.0954 74.3433C89.0954 64.2611 81.5554 55.7389 71.5599 54.5255C71.2789 54.4919 71.0074 54.4032 70.7608 54.2643C70.5142 54.1255 70.2975 53.9394 70.123 53.7166C69.9485 53.4938 69.8198 53.2388 69.7441 52.9662C69.6685 52.6935 69.6474 52.4086 69.6821 52.1278C69.8265 50.9433 70.9243 50.1055 72.1088 50.25C84.271 51.7233 93.4576 62.0944 93.4576 74.3722C93.4288 75.5278 92.4754 76.51 91.2621 76.51ZM71.1583 105.65H63.7339C61.0761 105.65 59.1116 103.512 59.6028 101.201L60.8161 95.8569H74.0761L75.2894 101.201C75.8383 103.657 73.9894 105.65 71.1583 105.65Z"
              fill="#AE5726"
            />
            <path
              opacity="0.4"
              d="M79.191 91.3268L74.0777 95.8624H60.8177L55.7044 91.3268C52.7288 88.9002 52.7288 87.0224 54.9822 84.1624L63.9955 72.7802C64.631 72.0002 65.3533 71.4513 66.1333 71.1913C66.971 70.9024 67.8955 70.9024 68.7333 71.1913C69.5133 71.4802 70.2355 72.0002 70.871 72.7802L79.8844 84.1624C82.1377 87.0224 82.051 88.8135 79.191 91.3268Z"
              fill="#AE5726"
            />
          </svg>
        </ServiceCard>
      </div>
    </Section>
  )
}
