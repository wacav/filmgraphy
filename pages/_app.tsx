import { I18nProvider } from '@common/I18n';
import Layout from '@common/Layout';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';

const FilmApp = ({ Component, pageProps }: AppProps) => {
  return (
    <IconContext.Provider value={{ size: '24px' }}>
      <I18nProvider i18n={pageProps?.i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </IconContext.Provider>
  );
};

export default FilmApp;
