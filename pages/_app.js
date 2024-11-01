import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import '../assets/css/index.css';

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="theme-color" content="#31885b" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" sizes="192x192" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <title>Spectrify | Music Visualisation | PWA</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="Description"
            content="Spectrify | Music Visualisation using NextJS, tailwind.css, Styled Components | PWA"
          />
          {/* <link rel="icon" sizes="192x192" href={favicon} /> */}
        </Head>
        <ThemeProvider theme={{}}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
export default NextApp;
