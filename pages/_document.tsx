import { Head, Html, Main, NextScript } from 'next/document';

const FilmgraphyDocument = () => (
  <Html lang="ko">
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
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default FilmgraphyDocument;
