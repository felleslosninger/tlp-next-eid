import React from 'react';
import { useTranslation } from 'react-i18next';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import classes from './Layout.module.css';
import { Sidebar } from '@/components/Sidebar/Sidebar';

/*interface LayoutProps {
  children?: React.ReactNode;
}*/
const Layout = () => {
  const { t } = useTranslation(['main']);
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <main>
        <Sidebar />
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
