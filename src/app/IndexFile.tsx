import React from 'react';

import { InterFont } from '@/fonts/Interfont';
import 'normalize.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import '@digdir/tlp-react/dist/tokens.css';

interface IndexProps {
  children: React.ReactNode;
}
const IndexFile = ({ children }: IndexProps) => {
  return <div className={InterFont.className}>{children}</div>;
};

export default IndexFile;
