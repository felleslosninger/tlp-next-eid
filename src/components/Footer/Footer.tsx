import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.css';

interface FooterProps {
  text?: string;
}

const Footer = ({ text }: FooterProps) => {
  const { t } = useTranslation(['main']);
  return (
    <footer className={classes.footer}>
      <div>Footer {text}</div>
      {t('tomat')}
    </footer>
  );
};

export type { FooterProps };
export { Footer };
