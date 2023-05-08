import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Header.module.css';

interface HeaderProps {
  title?: string;
  logo?: { alt: string; url: string };
  items?: [React.ReactNode];
}

const Header = ({ title }: HeaderProps) => {
  const { t } = useTranslation(['main']);
  return (
    <header className={classes.header}>
      <div className={classes.title}>{title}</div>
      {t('tomat')}
    </header>
  );
};

export type { HeaderProps };
export { Header };
