import useTranslation from 'next-translate/useTranslation';
import React from 'react';

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
    </div>
  );
};

export { Input };
