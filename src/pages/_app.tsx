import React from 'react';
import '@/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from './../store/store';
import 'normalize.css';
//import { wrapper } from './../store/store';
import { initializeLocalization } from './../i18n';

initializeLocalization();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

//export default wrapper.withRedux(App);
