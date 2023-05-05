import React from 'react';
import '@/globals.css';
import type { AppProps } from 'next/app';

import { initializeLocalization } from './../i18n';

initializeLocalization();

//Import i18n.ts
//import './../i18n';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
