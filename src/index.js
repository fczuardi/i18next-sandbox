const i18next = require('i18next');
const resources = require('../locales');

const i18n = i18next.createInstance({
  debug: false,
  lng: 'en',
  defaultNS: "common",
  resources
}, (err, t) => {
  if(err){
    return console.error(err)
  }
  console.log({resources})
  console.log("AA", t('foo'))
  console.log("BB", t('translation:foo'))
  console.log("CC", t(['translation:foo', 'foo']))
})
