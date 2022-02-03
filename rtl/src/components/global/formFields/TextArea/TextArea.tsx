import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { BaseTextField } from '../baseComponents/BaseTextField/BaseTextField';
import { TextAreaProps } from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
        <textarea
          ref={ref}
          className={clsx('textField-base', { hasError: error })}
          id={id}
          rows={4}
          placeholder={placeholder || label}
          {...props}
        />
      </BaseTextField>
    );
  },
);

export { TextArea };
