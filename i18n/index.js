var en = require("../src/messages/en.json");
var es = require("../src/messages/es.json");
var zhHans = require("../src/messages/zh-Hans.json");
var zhHant = require("../src/messages/zh-Hant.json");

const i18n = {
  translations: {
    en,
    es,
    zhHans, 
    zhHant,
  },
  defaultLang: "en",
  useBrowserDefault: true,
  languageDataStore: "query",
};

module.exports = i18n;