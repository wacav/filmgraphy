import { I18nProvider } from '@common/I18n';
import Layout from '@components/organisms/Layout';
import { SEO_OPTION } from '@config';
import { SWRGlobalConfig } from '@libs/request';
import '@styles/global.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { SWRConfig } from 'swr';

const FilmApp = ({ Component, pageProps }: AppProps) => (
  <SWRConfig value={SWRGlobalConfig}>
    <IconContext.Provider value={{ size: '24px' }}>
      <DefaultSeo {...SEO_OPTION} />
      <I18nProvider i18n={pageProps?.i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </IconContext.Provider>
  </SWRConfig>
);

export default FilmApp;
