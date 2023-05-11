import React from 'react';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
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

export type { SidebarProps };
export { Sidebar };
