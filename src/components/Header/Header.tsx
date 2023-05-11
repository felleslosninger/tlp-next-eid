import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@digdir/tlp-react';

import { useAppSelector } from '../../store/hooks';

import classes from './Header.module.css';
import { changeLanguage } from './../../i18n';

interface HeaderProps {
  title?: string;
  logo?: { alt: string; url: string };
  items?: [React.ReactNode];
}

const Header = ({ items }: HeaderProps) => {
  const { t } = useTranslation(['main']);
  const activePage = useAppSelector((state) => state.activePage);
  const onClickLanguageChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (typeof e.currentTarget.value === 'string') {
      changeLanguage(e.currentTarget.value);
    }
  };
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1 className={classes.title}>
              <span>{t(activePage.header.title)}</span>
            </h1>
          </div>
          <div className={classes.right}>
            {items}
            <select
              className='custom-select'
              style={{ width: 200 }}
              onChange={onClickLanguageChange}
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
