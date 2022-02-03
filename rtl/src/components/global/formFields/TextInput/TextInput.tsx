import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { BaseTextField } from '../baseComponents/BaseTextField/BaseTextField';
import { TextInputProps } from './types';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      label,
      placeholder,
      id,
      error,
      helperText,
      ...props
    },
    ref,
  ) => {
    return (
      <BaseTextField
        className={clsx(className)}
        error={error}
        helperText={helperText}
        label={label}
        id={id}
      >
        <input
          ref={ref}
          className={clsx('textField-base', { hasError: error })}
          type="text"
          id={id}
          placeholder={placeholder || label}
          {...props}
        />
      </BaseTextField>
    );
  },
);

export { TextInput };
