import React from 'react';
import { Container, Breadcrumb } from '@digdir/tlp-react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Content } from '../components/Content/Content';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <Container className={classes.container}>
          <Breadcrumb>
            <a href='#'>Første side</a>
            <p>Siste side</p>
          </Breadcrumb>

          <div className={classes.wrapper}>
            <div className={classes.sidebar}>
              <Sidebar />
            </div>
            <div className={classes.content}>
              <Content />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
