import React from 'react';

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
          <a href='#'>Lenke</a>
        </li>
        <li>
          <a href='#'>Lenke</a>
        </li>
        <li>
          <a href='#'>Lenke</a>
        </li>
        <li>
          <a href='#'>Lenke</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='#'>Lenke</a>
        </li>
        <li>
          <a href='#'>Lenke</a>
        </li>
        <li>
          <a href='#'>Lenke</a>
        </li>
        <li>
          <a href='#'>Lenke</a>
        </li>
      </ul>
    </div>
  );
};
export { Sidebar };
