import { I18N_PATH } from '@config';
import fs from 'fs';
import path from 'path';

const I18N_DIRECTORY_PATH = path.join(process.cwd(), I18N_PATH);

const getTranslation = (filePath: string) => {
  try {
    return JSON.parse(fs.readFileSync(`${filePath}.json`, 'utf8'));
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const makeLanguage = async ({ locale, target }: { locale: string; target?: string }) => {
  const languageFilePath = path.join(I18N_DIRECTORY_PATH, locale);
  return {
    i18n: {
      common: getTranslation(path.join(languageFilePath, 'common')),
      ...(target && { [target]: getTranslation(path.join(languageFilePath, target)) }),
    },
    ...(target && { target }),
  };
};
