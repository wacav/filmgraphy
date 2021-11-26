import { createContext, useCallback, useContext, useMemo } from 'react';

type I18nProps = {
  i18n?: Record<string, string>;
};

const bindingText = (str: string, obj: Record<string, unknown>) => {
  if (!obj) return str;
  try {
    const pattern = new RegExp(/#{[a-zA-Z0-9]*}/g);
    return str.replace(pattern, (param) => obj[param.substring(2, param.length - 1)] as string) ?? '';
  } catch (e) {
    return str;
  }
};

const getTranslation = (i18n: Record<string, any>, key: string, compile?: Record<string, string>) => {
  const text = key.split('.').reduce((r, c) => r?.[c] ?? '', i18n) ?? '';
  if (typeof text === 'function') {
    throw new Error(`I18nProvider: Find text is Object key: ${key}`);
  }
  return bindingText(text, compile);
};

const Context = createContext<Record<string, any>>(undefined);

export const useTranslation = (key?: string) => {
  const i18n = useContext(Context);
  const targetI18n = useMemo(() => (key ? key.split('.').reduce((r, c) => r?.[c] ?? {}, i18n) : i18n), [i18n, key]);

  /**
   * Target
   */
  const t = useCallback(
    (key: string, compile?: Record<string, string>) => getTranslation(targetI18n, key, compile),
    [targetI18n],
  );

  /**
   * Common
   */
  const c = useCallback(
    (key: string, compile?: Record<string, string>) => getTranslation(i18n['common'], key, compile),
    [i18n],
  );

  return { t, c };
};

export const I18nProvider: React.FC<I18nProps> = ({ children, i18n: _i18n }) => {
  const i18n = useMemo(() => _i18n || console.error('I18nProvider: i18n is undefined') || {}, [_i18n]);

  return <Context.Provider value={i18n}>{children}</Context.Provider>;
};
