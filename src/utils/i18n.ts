import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '~assets/locales/en.json'
import pl from '~assets/locales/pl.json'

const localizations = {
  en,
  pl,
}

const options: InitOptions = {
  fallbackLng: 'en',
  debug: true,
  resources: localizations,
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: false,
    useSuspense: true,
  },
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init(options)

export { i18n }

export const changeLaguage = async (languageKey: string) => {
  await i18n.changeLanguage(languageKey) // -> returns a Promise
}
