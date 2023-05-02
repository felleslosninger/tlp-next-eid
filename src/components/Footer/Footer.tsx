import React from 'react';

import classes from './Footer.module.css';

interface FooterProps {
  text?: string;
}

const Footer = ({ text }: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <div>Footer {text}</div>
    </footer>
  );
};

export type { FooterProps };
export { Footer };
