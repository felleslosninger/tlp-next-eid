'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

import { Input } from '../Input/Input';

import classes from './Sidebar.module.css';

const Menu = [
  {
    items: [
      {
        text: 'ID-porten NB',
        href: 'nb/id-porten',
      },
      {
        text: 'ID-porten EN',
        href: 'en/id-porten',
      },
      {
        text: 'ID-porten SE',
        href: 'se/id-porten',
      },
      {
        text: 'Search',
        href: 'nb/search',
      },
      {
        text: 'Passport',
        href: 'nb/minid-passport',
      },
      {
        text: 'Not found',
        href: 'nb/minid-passpgergregerort',
      },
      {
        text: 'Redirect',
        href: 'nb/hva-er-mitt-einnsyn',
      },
    ],
  },
];

interface SidebarProps {
  dictionary: Record<string, string>;
}

const Sidebar = ({ dictionary }: SidebarProps) => {
  const pathName = usePathname();
  return (
    <div>
      <form>
        <Input placeholder={dictionary.placeholder} />
      </form>

      {Menu.map((item, index) => (
        <ul
          key={index}
          className={classes.menu}
        >
          {item.items.map((item1, index1) => (
            <li
              key={index1}
              className={cn(classes.item, {
                [classes.active]: pathName === item1.href,
              })}
            >
              <Link href={item1.href}>{item1.text}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
export { Sidebar };
