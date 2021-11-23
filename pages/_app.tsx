import Layout from '@common/Layout';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';

const FilmApp = ({ Component, pageProps }: AppProps) => {
  return (
    <IconContext.Provider value={{ size: '24px' }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
};

export default FilmApp;
