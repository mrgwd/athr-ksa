import { createTranslator } from 'next-intl'

interface TranslatorOptions {
  locale: string
  namespace?: string
}

export const getTranslations = async (config: TranslatorOptions) => {
  const { locale, namespace } = config
  if (locale === 'ar') {
    const messagesModule = await import(`./messages/ar.json`)
    const translator = createTranslator({
      locale,
      messages: messagesModule.default,
      namespace,
    })

    return translator.rich
  } else {
    const messagesModule = await import(`./messages/en.json`)
    const translator = createTranslator({
      locale,
      messages: messagesModule.default,
      namespace,
    })

    return translator.rich
  }
}
