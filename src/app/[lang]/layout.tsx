import React from 'react';

import { InterFont } from '@/fonts/Interfont';

import 'normalize.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import '@digdir/tlp-react/dist/tokens.css';
import '../../globals.css';

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={InterFont.className}>{children}</body>
    </html>
  );
}
