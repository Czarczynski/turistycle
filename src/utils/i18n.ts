import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '~assets/locales/en.json'

const localizations = {
  en,
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
