import React from 'react';
import { useTranslation } from 'react-i18next';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

/*interface LayoutProps {
  children?: React.ReactNode;
}*/
const Layout = () => {
  const { t } = useTranslation(['main']);
  return (
    <div>
      <Header />
      <main>
        <h2 className='paraStyle'>
          {t('tomat')} <br />
        </h2>
      </main>
      <Footer />
    </div>
  );
};

//export type { LayoutProps };
export { Layout };
