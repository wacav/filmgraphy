import '@styles/global.scss';
import type { AppProps } from 'next/app';

const FilmApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default FilmApp;
