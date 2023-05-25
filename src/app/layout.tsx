import React from 'react';

import { InterFont } from '@/fonts/Interfont';
import 'normalize.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import '@digdir/tlp-react/dist/tokens.css';
import '../globals.css';

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  console.log(lang);
  return (
    <html lang={lang}>
      <head />
      <body className={InterFont.className}>{children}</body>
    </html>
  );
}
