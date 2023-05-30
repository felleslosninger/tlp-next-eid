import React from 'react';

import type { ApiDataType } from '@/types/ApiData';
import { Container } from '@/components/Container/Container';

import { FooterLayout } from '../components/FooterLayout/FooterLayout';
import { HeaderLayout } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Content } from '../components/Content/Content';

import classes from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  dictionary: Record<string, string>;
  data: ApiDataType;
}

const Layout = ({ children, dictionary, data }: LayoutProps) => {
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
      <FooterLayout />
    </div>
  );
};

export { Layout };
