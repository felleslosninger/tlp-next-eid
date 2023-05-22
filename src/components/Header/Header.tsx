/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Header } from '@digdir/tlp-react';
import Link from 'next/link';

import classes from './Header.module.css';

interface HeaderProps {
  title?: string;
  logo?: { alt: string; url: string };
  items?: [React.ReactNode];
}

const HeaderLayout = ({ items }: HeaderProps) => {
  return (
    <Header>
      <Header.Left>
        <Link href='/nb'>
          <img
            src='/../img/logo-eid-black.svg'
            alt='Logo'
            className={classes.logo}
          />
        </Link>
      </Header.Left>
      <Header.Right>
        {items}
        <select
          className='custom-select'
          style={{ width: 200 }}
        >
          <option value='nb'>Norsk</option>
          <option value='en'>English</option>
          <option value='sa'>sámegiella</option>
        </select>
      </Header.Right>
    </Header>
  );
};

export type { HeaderProps };
export { HeaderLayout };
