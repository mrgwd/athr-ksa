'use client'
import { useTranslations } from 'next-intl'
import client1 from '../public/images/Clients/logo1.png'
import client2 from '../public/images/Clients/logo2.png'
import client3 from '../public/images/Clients/logo3.png'
import client4 from '../public/images/Clients/logo4.png'
import client5 from '../public/images/Clients/logo5.png'
import client6 from '../public/images/Clients/logo6.png'
import client7 from '../public/images/Clients/logo7.png'
import client8 from '../public/images/Clients/logo8.png'
import client9 from '../public/images/Clients/logo9.png'
import client10 from '../public/images/Clients/logo10.png'
import client11 from '../public/images/Clients/logo11.png'
import client12 from '../public/images/Clients/logo12.png'
import client13 from '../public/images/Clients/logo13.jpg'
import client14 from '../public/images/Clients/logo14.jpg'
import client15 from '../public/images/Clients/logo15.jpg'
import { useRef } from 'react'
import useAnimation from '@/hooks/useAnimation'
import Image from 'next/image'
import Section from './Section'
export default function Clients() {
  const t = useTranslations()
  const ESection = useRef<HTMLDivElement | null>(null)
  useAnimation(ESection, 500, 'opacity-0', 'translate-y-20')
  return (
    <Section name="clients">
      <div className="rid flex grid-cols-3 flex-wrap justify-center child:child:w-auto gap-2 child:inline-block child:child:h-12 md:child:child:h-16 child:rounded-md child:bg-gray-100 child:child:object-cover child:p-2 md:child:p-4 child:child:opacity-70 child:grayscale child:transition-all child:delay-100 child-hover:bg-gray-50 child-hover:grayscale-0 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        <div>
          <Image src={client7} loading="lazy" alt="logo7" />
        </div>
        <div>
          <Image src={client1} loading="lazy" alt="logo1" />
        </div>
        <div>
          <Image src={client3} loading="lazy" alt="logo3" />
        </div>
        <div>
          <Image src={client6} loading="lazy" alt="logo6" />
        </div>
        <div>
          <Image src={client4} loading="lazy" alt="logo4" />
        </div>
        <div>
          <Image src={client5} loading="lazy" alt="logo5" />
        </div>
        <div>
          <Image src={client8} loading="lazy" alt="logo8" />
        </div>
        <div>
          <Image src={client2} loading="lazy" alt="logo2" />
        </div>
        <div>
          <Image src={client9} loading="lazy" alt="logo9" />
        </div>
        <div>
          <Image src={client10} loading="lazy" alt="logo10" />
        </div>
        <div>
          <Image src={client11} loading="lazy" alt="logo11" />
        </div>
        <div>
          <Image src={client12} loading="lazy" alt="logo12" />
        </div>
        <div>
          <Image src={client13} loading="lazy" alt="logo13" />
        </div>
        <div>
          <Image src={client14} loading="lazy" alt="logo14" />
        </div>
        <div>
          <Image src={client15} loading="lazy" alt="logo15" />
        </div>
      </div>
    </Section>
  )
}
