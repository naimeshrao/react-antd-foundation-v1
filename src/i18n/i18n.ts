import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// English translations
import authEn from './locales/en/auth.json'
import accountEn from './locales/en/account.json'
import commonEn from './locales/en/common.json'

// French translations
import authFr from './locales/fr/auth.json'
import accountFr from './locales/fr/account.json'
import commonFr from './locales/fr/common.json'

i18n.use(initReactI18next).init(
  {
    resources: {
      en: {
        auth: authEn,
        account: accountEn,
        common: commonEn
      },
      fr: {
        auth: authFr,
        account: accountFr,
        common: commonFr
      }
    },
    fallbackLng: 'en',
    ns: ['auth', 'account', 'common'], // namespaces
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React already does escaping
    },
    debug: false // set false in production
  },
  (error) => {
    if (error) {
      window.console.log('i18n initialized')
    } else {
      window.console.error('i18n initialization error', error)
    }
  }
)

export default i18n

// Usage: const { t } = useTranslation(); <h1>{t('Welcome')}</h1>
