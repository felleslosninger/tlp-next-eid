import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.css';
import { Container } from '../Container.tsx/Container';

interface FooterProps {
  text?: string;
}

const Footer = ({ text }: FooterProps) => {
  const { t } = useTranslation(['main']);
  return (
    <footer className={classes.footer}>
      <Container>
        <div>Footer {text}</div>
        {t('tomat')}
      </Container>
    </footer>
  );
};

export type { FooterProps };
export { Footer };
