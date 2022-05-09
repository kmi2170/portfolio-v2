import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../styles/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>KH&apos;s Portfolio</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="description" content="KH's Portofolio" />
          <link rel="icon" href="/my_favicon.png" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
