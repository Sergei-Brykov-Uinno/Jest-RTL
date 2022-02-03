import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { ReactComponent as CheckboxIconSelected } from 'assets/icons/check-box-selected.svg';
import { ReactComponent as CheckboxIconNotSelected } from 'assets/icons/check-box-not-selected.svg';

import { CheckboxProps } from './types';

const iconTransitionClasses = 'transition-opacity duration-200';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
  {
    className,
    id,
    children,
    value,
    ...props
  },
  ref,
) => {
  const isChecked = props.checked || Boolean(value);

  return (
    <label htmlFor={id} className={clsx(className, 'flex items-center cursor-pointer')}>
      <input
        type="checkbox"
        ref={ref}
        id={id}
        className="hidden"
        {...props}
      />

      <div className="relative mr-4 text-gray-3 flex shrink-0">
        <CheckboxIconSelected
          className={clsx(
            'opacity-0',
            iconTransitionClasses,
            {
              'opacity-100': isChecked,
            },
          )}
        />

        <CheckboxIconNotSelected
          className={clsx(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  opacity-100',
            iconTransitionClasses,
            { 'opacity-0': isChecked },
          )}
        />
      </div>

      <span className="inline-block">
        {children}
      </span>
    </label>
  );
});

export { Checkbox };
