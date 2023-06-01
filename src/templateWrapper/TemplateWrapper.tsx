import React from 'react';
import { Footer, Link } from '@digdir/tlp-react';

import type { ApiDataType } from '@/types/ApiData';
import { Container } from '@/components/Container/Container';

//import { FooterLayout } from '../components/FooterLayout/FooterLayout';
import { HeaderLayout } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Content } from '../components/Content/Content';

import classes from './Layout.module.css';

type TemplateProps = {
  children: React.ReactNode;
  dictionary: Record<string, string>;
  data: ApiDataType;
};

const TemplateWrapper = ({ children, dictionary, data }: TemplateProps) => {
  return (
    <div className={classes.layout}>
      <HeaderLayout />
      <main className={classes.main}>
        {data.content.node.title}
        <Container className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.sidebar}>
              <Sidebar
                dictionary={dictionary}
                data={data}
              />
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
          <Link
            inverted={true}
            href='https://uustatus.no/nn/erklaringer/publisert/3ceb57cc-b2db-46a3-9a71-b78c8779173f'
          >
            Tilgjengelighetserklæring
          </Link>
        </Footer.Column>
        <Footer.Bottom>
          <p>Tjenesten er levert av Digitaliseringsdirektoratet</p>
        </Footer.Bottom>
      </Footer>
    </div>
  );
};

export { TemplateWrapper };
