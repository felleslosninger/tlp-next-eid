import React from 'react';

import { InterFont } from '@/fonts/Interfont';
import 'normalize.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import '@digdir/tlp-react/dist/tokens.css';
import '../globals.css';
import { Layout } from '@/layout/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={InterFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
