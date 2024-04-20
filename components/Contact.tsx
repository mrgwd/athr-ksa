'use client'
import { useLocale, useTranslations } from 'next-intl'

import { CallCalling, I24Support, Location } from 'iconsax-react'
import Form from './Form'
import useAnimation from '@/hooks/useAnimation'
import { useRef } from 'react'

export default function Contact() {
  const t = useTranslations()
  const locale = useLocale()
  const cfSection = useRef<HTMLDivElement | null>(null)
  useAnimation(
    cfSection,
    800,
    'opacity-0',
    'translate-y-12',
    'sm:translate-y-0',
    locale === 'ar' ? 'sm:translate-x-12' : 'sm:-translate-x-12',
  )

  //const messages = useMessages()
  return (
    // <NextIntlClientProvider locale={locale} messages={messages}>
    <div>
      <div className="container mx-auto my-24 px-4 md:mt-44" id="contact">
        <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-48 lg:text-2xl">
          {t('contact.heading')}
        </h2>
      </div>
      <div>
        <div className="mb-24 w-full">
          <iframe
            className="-z-10 w-full max-sm:rounded-3xl md:h-[26rem]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12192.941144289647!2d46.68943095845016!3d24.69310800719901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03003aef5d85%3A0xe12f5ae77e83d77c!2z2LTYsdmD2Kkg2KPYq9ixINmE2YTYqtiz2YjZitmCINin2YTYsdmC2YXZiiDZiNiq2YLZhtmK2Kkg2YbYuNmFINin2YTZhdi52YTZiNmF2KfYqg!5e0!3m2!1sen!2sde!4v1712065580350!5m2!1sen!2sde"
            title="ATHRLocatin"
            width="800"
            height="600"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div
            ref={cfSection}
            className="relative bottom-72 transition duration-500 md:bottom-48"
          >
            <Form />
          </div>
        </div>
      </div>
      <div
        className={`container mx-auto mb-20 mt-96 grid grid-cols-1 gap-y-10 ${
          locale === 'en' ? 'max-sm:pl-12' : 'max-sm:pr-12'
        } sm:grid-cols-2 sm:justify-items-center sm:gap-y-6 md:mt-48 lg:grid-cols-3`}
      >
        <div className="flex items-start gap-4">
          <div className="inline-block rounded-full bg-main-color/25 p-4">
            <Location variant="Bulk" className="text-main-color" />
          </div>
          <div className="inline-block">
            <h5 className="text-lg font-semibold text-wd-service">
              {t('contact.supportInfo.address.heading')}
            </h5>
            <p className="text-main-color">
              {t('contact.supportInfo.address.address1')}
              <span className="block text-wd-service">
                {t('contact.supportInfo.address.address2')}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="inline-block rounded-full bg-main-color/25 p-4">
            <CallCalling variant="Bulk" className="text-main-color" />
          </div>
          <div className="inline-block">
            <h5 className="text-lg font-semibold text-wd-service">
              {t('contact.supportInfo.phoneNumber.heading')}
            </h5>
            <p className="text-main-color" dir="ltr">
              {t('contact.supportInfo.phoneNumber.phoneNumber')}
              <span className="block text-wd-service">
                {t('contact.supportInfo.phoneNumber.workTimes')}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="inline-block rounded-full bg-main-color/25 p-4">
            <I24Support variant="Bulk" className="text-main-color" />
          </div>
          <div className="inline-block">
            <h5 className="text-lg font-semibold text-wd-service">
              {t('contact.supportInfo.emailAddress.heading')}
            </h5>
            <p className="text-main-color">
              {t('contact.supportInfo.emailAddress.emailAddress')}
              <span className="block text-wd-service">
                {t('contact.supportInfo.emailAddress.support')}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // </NextIntlClientProvider>
  )
}
