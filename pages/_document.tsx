/* eslint-disable @next/next/no-css-tags */
import { Head, Html, Main, NextScript } from 'next/document';

const FilmgraphyDocument = () => (
  <Html lang="ko" data-theme="filmgraphy">
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              if (/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) {
                window.location = "microsoft-edge:" + window.location;
                setTimeout(function () {
                  window.location = "https://go.microsoft.com/fwlink/?linkid=2135547";
                }, 100);
              }
            `,
        }}
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#374151" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#374151" />

      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default FilmgraphyDocument;
