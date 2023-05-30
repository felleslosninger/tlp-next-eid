import React from 'react';
import { Footer } from '@digdir/tlp-react';

import { Container } from '@/components/Container/Container';

//import { FooterLayout } from '../components/FooterLayout/FooterLayout';
import { HeaderLayout } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Content } from '../components/Content/Content';

interface TemplateProps {
  children: React.ReactNode;
  dictionary: Record<string, string>;
}

import classes from './Layout.module.css';
const TemplateWrapper = ({ children, dictionary }: TemplateProps) => {
  return (
    <div className={classes.layout}>
      <HeaderLayout />
      <main className={classes.main}>
        <Container className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.sidebar}>
              <Sidebar dictionary={dictionary} />
            </div>
            <div className={classes.content}>
              <Content>{children}</Content>
            </div>
          </div>
        </Container>
      </main>
      <Footer>
        <Footer.Column>
          <h2>Åpningstider</h2>
        </Footer.Column>
        <Footer.Column>
          <h2>E-post</h2>
        </Footer.Column>
        <Footer.Column>
          <h2>Viktige lenker</h2>
        </Footer.Column>
        <Footer.Bottom>
          <a href='https://uustatus.no/nn/erklaringer/publisert/3ceb57cc-b2db-46a3-9a71-b78c8779173f'>
            Tilgjengelighetserklæring
          </a>
          <p>Tjenesten er levert av Digitaliseringsdirektoratet</p>
        </Footer.Bottom>
      </Footer>
    </div>
  );
};

export { TemplateWrapper };
