import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import '@digdir/tlp-react/dist/tokens.css';
import 'normalize.css';
import '@/globals.css';

import { InterFont } from '@/fonts/Interfont';

import store from './../store/store';
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
