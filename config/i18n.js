module.exports = {
  locales: [
    {
      code: 'en-GB',
      iso: 'en-GB',
      file: 'en.json'
    }
  ],
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'en-GB',
  vueI18n: {
    dateTimeFormats: {
      'en-GB': {
        fullDateTime: {
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        },
        fullDate: {
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          year: 'numeric'
        },
        abrDateTime: {
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        },
        abrDate: {
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          year: 'numeric'
        },
        shortDateTime: {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        },
        shortDate: {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        },
        time: {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        },
        year: {
          year: 'numeric'
        }
      }
    }
  }
}
