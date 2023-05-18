import React from 'react';

import { Container } from '@/components/Container/Container';

import { FooterLayout } from '../components/FooterLayout/FooterLayout';
import { HeaderLayout } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Content } from '../components/Content/Content';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <HeaderLayout />
      <main className={classes.main}>
        <Container className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.sidebar}>
              <Sidebar />
            </div>
            <div className={classes.content}>
              <Content>{children}</Content>
            </div>
          </div>
        </Container>
      </main>
      <FooterLayout />
    </div>
  );
};

export { Layout };
