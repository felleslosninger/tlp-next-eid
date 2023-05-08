import React from 'react';
import '@/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { InterFont } from '@/fonts/Interfont';

import store from './../store/store';
import 'normalize.css';
import { initializeLocalization } from './../i18n';

initializeLocalization();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={InterFont.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
