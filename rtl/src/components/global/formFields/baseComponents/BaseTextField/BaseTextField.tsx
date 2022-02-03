import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { BaseTextFieldProps } from './types';

const BaseTextField = (
  {
    className,
    label,
    id,
    error,
    helperText,
    children,
  }: PropsWithChildren<BaseTextFieldProps>,
) => {
  return (
    <div className={clsx(className, 'flex flex-col text-left')}>
      {label && (
        <label className={clsx('textField-label', { hasError: error })} htmlFor={id}>
          {label}
        </label>
      )}

      {children}

      {(error || helperText) && (
        <div className={clsx('textField-messageBox', { hasError: error })}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export { BaseTextField };
