'use client';

import React from 'react';
import { Header } from '@digdir/tlp-react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './Header.module.css';

const HeaderLayout = () => {
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
        <ul>
          <li>
            <Link href='/nb'>Norsk</Link>
          </li>
          <li>
            <Link href='/en'>Engelsk</Link>
          </li>
          <li>
            <Link href='/se'>Samisk</Link>
          </li>
        </ul>
      </Header.Left>
    </Header>
  );
};

export { HeaderLayout };
