import React from 'react';

import { Container } from '@/components/Container/Container';

import { FooterLayout } from '../FooterLayout/FooterLayout';
import { HeaderLayout } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';

interface LayoutProps {
  children: React.ReactNode;
}

import classes from './Layout.module.css';

const Layout = ({ children }: LayoutProps) => {
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
