'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@navikt/aksel-icons';

import classes from './Input.module.css';

const Input = () => {
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type='text'
        placeholder='Søk her...'
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
