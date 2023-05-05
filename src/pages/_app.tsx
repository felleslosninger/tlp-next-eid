import React from 'react';
import '@/globals.css';
import type { AppProps } from 'next/app';
import 'normalize.css';

import { initializeLocalization } from './../i18n';

initializeLocalization();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
