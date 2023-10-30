'use client'
import { useForm, ValidationError } from '@formspree/react'
import { useTranslations, useLocale } from 'next-intl'
export default function Form() {
  const t = useTranslations('Index')
  const locale = useLocale()
  const [state, handleSubmit] = useForm('xqkvkody')
  return (
    <form
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      onSubmit={handleSubmit}
      className="absolute top-1/2 flex w-[28rem] flex-col gap-3 rounded-[3rem] bg-white p-8 py-12 shadow-3xl  max-sm:w-full sm:px-12 sm:max-md:left-1/2 sm:max-md:-translate-x-1/2 md:top-1/2 md:mr-8 md:-translate-y-1/2 lg:mr-12 xl:mr-16 2xl:mr-32"
    >
      {state.succeeded ? (
        <div className="flex items-center gap-4">
          <div>
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 27L23.6781 34L37 20M52 34.5V19.5C52 7 47 2 34.5 2H19.5C7 2 2 7 2 19.5V34.5C2 47 7 52 19.5 52H34.5C47 52 52 47 52 34.5Z"
                stroke="#45C4AE"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>
            تم إرسال طلبك بنجاح! <br />
            <span className="opacity-60">سنرد عليك في أسرع وقت ممكن.</span>
          </p>
        </div>
      ) : (
        <>
          <h6 className="mb-4 text-center font-semibold text-main-color sm:text-xl">
            {t('contact.form.formHeading')}
          </h6>
          <div className="group relative z-0 w-full">
            <input
              type="text"
              name="name"
              id="name"
              className="peer block w-full appearance-none rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="details"
              className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
            >
              {t('contact.form.fullName')}
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="group relative z-0 w-full">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full appearance-none rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="details"
              className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
            >
              {t('contact.form.email')}
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="group relative z-0 w-full">
            <input
              type="tel"
              name="tel-number"
              id="tel-number"
              className="peer block w-full appearance-none rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="details"
              className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
            >
              {t('contact.form.phoneNumber')}
            </label>
            <ValidationError
              prefix="Tel-number"
              field="tel-number"
              errors={state.errors}
            />
          </div>
          <div className="group relative z-0 w-full">
            <textarea
              cols={30}
              rows={12}
              name="details"
              id="details"
              className="peer block w-full resize-none appearance-none rounded-3xl border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="details"
              className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
            >
              {t('contact.form.detailes')}
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-full bg-gradient-to-r from-main-color to-main-blue-gradient py-2 text-white transition duration-300 hover:from-white hover:to-white hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color max-md:mx-auto sm:text-lg"
          >
            {t('contact.form.sendButton')}
          </button>
        </>
      )}
    </form>
  )
}
