import React from 'react';

import { Container } from '../Container/Container';

import classes from './Header.module.css';

interface HeaderProps {
  title?: string;
  logo?: { alt: string; url: string };
  items?: [React.ReactNode];
}

const Header = ({ items }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1 className={classes.title}>title</h1>
          </div>
          <div className={classes.right}>
            {items}
            <select
              className='custom-select'
              style={{ width: 200 }}
            >
              <option value='nb'>Norsk</option>
              <option value='en'>English</option>
              <option value='sa'>sámegiella</option>
            </select>
          </div>
        </div>
      </Container>
    </header>
  );
};

export type { HeaderProps };
export { Header };
