'use client';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { MagnifyingGlassIcon } from '@navikt/aksel-icons';

import classes from './Input.module.css';

const Input = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type='text'
        placeholder={t`searchPlaceholder`}
      />
      <MagnifyingGlassIcon
        fontSize={24}
        color='grey'
        title='a11y-title'
      />
    </div>
  );
};

export { Input };
