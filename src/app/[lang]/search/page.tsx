import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <h2>search</h2>
      <ul>
        <li>
          <Link href='/nb'>FrontPage</Link>
        </li>
        <li>
          <Link href='/nb/test'>Any</Link>
        </li>
      </ul>
    </>
  );
}
