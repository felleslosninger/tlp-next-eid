import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
      <form>
        <input
          type='search'
          placeholder='søk'
        />
      </form>
      <ul>
        <li>
          <Link href='/nb'>FrontPage</Link>
        </li>
        <li>
          <Link href='/nb/search'>Search</Link>
        </li>
        <li>
          <Link href='/nb/id-porten'>Bank ID</Link>
        </li>
        <li>
          <Link href='/nb/minid-passport'>Passport</Link>
        </li>
        <li>
          <Link href='/nb/minid-passpgergregerort'>Not Found</Link>
        </li>
        <li>
          <Link href='/nb/hva-er-mitt-einnsyn'>Redirect</Link>
        </li>
      </ul>
    </div>
  );
};
export { Sidebar };
