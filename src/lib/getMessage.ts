import fs from 'node:fs';

export default function getMessages(lang: string) {
  try {
    return JSON.parse(
      fs.readFileSync(process.cwd() + `/i18n/locales/${lang}.json`, 'utf8')
    );
  } catch (e) {
    try {
      return JSON.parse(
        fs.readFileSync(process.cwd() + '/i18n/locales/en.json', 'utf8')
      );
    } catch (e) {
      throw new Error(
        `No language file found, searchfile ${
          process.cwd() + '/i18n/locales/en.json'
        }`
      );
    }
  }
}
