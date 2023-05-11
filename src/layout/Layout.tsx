import React from 'react';
import { Container, Breadcrumb } from '@digdir/tlp-react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Content } from '../components/Content/Content';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <main className={classes.mainLayout}>
        <Breadcrumb>
          <a href='#'>Første side</a>
          <p>Siste side</p>
        </Breadcrumb>
        <Container>
          <div className={classes.mainLayout}>
            <div className={classes.layoutLeft}>
              <Sidebar />
            </div>
            <div className={classes.layoutLeft}>
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
