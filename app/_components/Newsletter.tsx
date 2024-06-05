'use client'
import { useLocale, useTranslations } from 'next-intl'
import Section from './Section'
import { getTranslations } from '../_i18n'

// todo: add translations
// todo: clear Section component

export default function Newsletter() {
//   {
//   locale = 'ar',
// }: {
//   locale: string | undefined
// }
  const t = useTranslations('newsletter')
  // const t = await getTranslations({ locale })
  const localee = useLocale()
  return (
    <Section name="newsletter">
      <form className="flex justify-center gap-2 md:gap-4">
        <div className="relative">
          <input
            type="email"
            name="newsletterEmail"
            id="newsletterEmail"
            className="peer block appearance-none rounded-full border border-gray-200 bg-gray-50 px-4 min-w-60 md:px-6 md:w-72 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="newsletterEmail"
            className={`absolute ${
              localee === 'ar' ? 'right-5' : 'left-5'
            } top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0`}
          >
            {t('email')}
          </label>
        </div>
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-main-color to-main-blue-gradient py-2 text-white transition duration-300 hover:from-white hover:to-white hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color sm:text-lg px-6"
        >
          {t('subscribeButton')}
        </button>
      </form>
    </Section>
  )
}
