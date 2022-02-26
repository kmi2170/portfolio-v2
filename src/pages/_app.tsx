import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Alex Brush;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
const theme = {
  // colors: {
  //   primary: '#0070f3',
  // },
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>KH's Portofolio</title>
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
  )
}

export default MyApp
