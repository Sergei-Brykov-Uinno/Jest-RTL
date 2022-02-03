import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';

import { ReactComponent as VisibilityOffIcon } from 'assets/icons/visibility-off.svg';
import { ReactComponent as VisibilityIcon } from 'assets/icons/visibility.svg';

import { BaseTextField } from '../baseComponents/BaseTextField/BaseTextField';
import { PasswordInputProps } from './types';

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
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
    const [showPassword, toggleShowPassword] = useState(false);

    const toggleTextVisibility = () => {
      toggleShowPassword((prevValue) => !prevValue);
    };

    return (
      <BaseTextField
        className={clsx(className)}
        error={error}
        helperText={helperText}
        label={label}
        id={id}
      >
        <div className="relative">
          <input
            ref={ref}
            className={clsx('textField-base pr-10 w-full', { hasError: error })}
            type={showPassword ? 'text' : 'password'}
            id={id}
            placeholder={placeholder || label}
            {...props}
          />

          <button
            type="button"
            className="absolute right-2.5 top-1/2 -translate-y-1/2"
            onClick={toggleTextVisibility}
          >
            {
              showPassword
                ? <VisibilityIcon />
                : <VisibilityOffIcon />
            }
          </button>
        </div>
      </BaseTextField>
    );
  },
);

export { PasswordInput };
