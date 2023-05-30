'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import type { ApiDataType } from '@/types/ApiData';

import { Input } from '../Input/Input';

import Link from 'next/link';

import classes from './Sidebar.module.css';

type SidebarProps = {
  dictionary: Record<string, string>;
  data: ApiDataType;
};

const Sidebar = ({ dictionary, data }: SidebarProps) => {
  const pathName = usePathname();

  console.log(data);

  return (
    <div>
      <form>
        <Input placeholder={dictionary.placeholder} />
      </form>
      <ul className={classes.menu}>
        {data.content['menu-main'].map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <ul className={classes.menu}>
        {data.content['menu-secondary'].map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export { Sidebar };
