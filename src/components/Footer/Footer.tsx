import React from 'react';
import { Container } from '../Container/Container';

import classes from './Footer.module.css';

interface FooterProps {
  text?: string;
}

const Footer = ({ text }: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div>Footer {text}</div>
        Footer
      </Container>
    </footer>
  );
};

export type { FooterProps };
export { Footer };
