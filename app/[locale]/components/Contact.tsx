import {
  useTranslations,
  useLocale,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl'
import { CallCalling, I24Support, Location } from 'iconsax-react'
import Form from './Form'

export default function Contact() {
  const t = useTranslations('Index')
  const locale = useLocale()
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20515.698651988758!2d46.733962165249736!3d24.634111918293375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05b8dec0cf19%3A0x2ecf2cc954b12e2a!2sAlmarqab%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1686847290339!5m2!1sen!2seg"
              title="ATHRLocatin"
              width="800"
              height="600"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
              //ref={cfSection}
              className="relative bottom-72 translate-x-12 opacit-0 transition duration-500 md:bottom-48"
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
                <span className="block text-wd-service" dir="rtl">
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
    </NextIntlClientProvider>
  )
}
