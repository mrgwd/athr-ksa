import { useTranslations } from 'next-intl'
import Image from 'next/image'

import client1 from '../../../public/images/Clients/logo1.png'
import client2 from '../../../public/images/Clients/logo2.png'
import client3 from '../../../public/images/Clients/logo3.png'
import client4 from '../../../public/images/Clients/logo4.png'
import client5 from '../../../public/images/Clients/logo5.png'
import client6 from '../../../public/images/Clients/logo6.png'
import client7 from '../../../public/images/Clients/logo7.png'
import client8 from '../../../public/images/Clients/logo8.png'
import client9 from '../../../public/images/Clients/logo9.png'
import client10 from '../../../public/images/Clients/logo10.png'
import client11 from '../../../public/images/Clients/logo11.png'
export default function Clients() {
  const t = useTranslations('Index')
  return (
    <div className="container mx-auto my-24 px-4 transition duration-500 md:mt-36">
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        {t('clients.heading')}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 child:p-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 child:flex child:items-center child:justify-center child:rounded-md child:bg-gray-100 child:child:opacity-70 child:grayscale">
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
      </div>
    </div>
  )
}
