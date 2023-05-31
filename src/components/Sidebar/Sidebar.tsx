'use client';

import React from 'react';
import Link from 'next/link';

import type { ApiDataType } from '@/types/ApiData';

import { Input } from '../Input/Input';

import classes from './Sidebar.module.css';

type SidebarProps = {
  dictionary: Record<string, string>;
  data: ApiDataType;
};

const Sidebar = ({ dictionary, data }: SidebarProps) => {
  return (
    <div>
      <form>
        <Input placeholder={dictionary.placeholder} />
      </form>
      <ul className={classes.menu}>
        {data.content.menu.main.map((item, index) => (
          <li key={index}>
            <Link href={item.relative.replace(/\/eid\//, '')}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={classes.menu}>
        {data.content.menu.secondary.map((item, index) => (
          <li key={index}>
            <Link href={item.relative.replace(/\/eid\//, '')}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export { Sidebar };
