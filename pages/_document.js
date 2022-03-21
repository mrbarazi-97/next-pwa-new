import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        <link rel="shortcut icon" href="/assets/images/logo/raybit-logo.svg" />
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="raybit" />
        <meta name="theme-color" content="#040847" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="shortcut icon"
          href="/assets/pwaImages/maskable_icon_x192.png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/pwaImages/maskable_icon_x192.png"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
