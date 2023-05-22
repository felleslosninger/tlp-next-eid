'use client';

import React from 'react';
import { Container } from '../Container/Container';
import { Heading } from '@digdir/design-system-react';
import { Footer } from '@digdir/tlp-react';

import classes from './FooterLayout.module.css';

interface FooterLayoutProps {
  text?: string;
}

const FooterLayout = ({ text }: FooterLayoutProps) => {
  return (
    <Footer>
      <Footer.Column>
        <h2 className={classes.title}>Åpningstider</h2>
      </Footer.Column>
      <Footer.Column>
        <h2 className={classes.title}>E-post</h2>
      </Footer.Column>
      <Footer.Column>
        <h2 className={classes.title}>Viktige lenker</h2>
      </Footer.Column>
      <Footer.Bottom>
        Tjenesten er levert av Digitaliseringsdirektoratet
      </Footer.Bottom>
    </Footer>
  );
};

export type { FooterLayoutProps };
export { FooterLayout };
