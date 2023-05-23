'use client';

import React from 'react';
import { Header } from '@digdir/tlp-react';
import Link from 'next/link';
import Image from 'next/image';

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
          <Image
            src='/../img/logo-eid-black.svg'
            alt='Logo'
            width={340}
            height={500}
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
