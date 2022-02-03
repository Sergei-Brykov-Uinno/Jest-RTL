import React, { PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';

import {
  ButtonAppearanceEnum,
  ButtonSizesEnum,
  IBaseButtonProps,
  ButtonSizeType,
  ButtonAppearanceType,
} from '../../types';

type ButtonAppearanceClassNamesType = Record<ButtonAppearanceType, string>;
const buttonAppearanceClassNames: ButtonAppearanceClassNamesType = {
  primary: 'bg-gray-4 disabled:bg-gray-7',
  secondary: 'bg-gray-6 ring-inset ring-3 ring-gray-5 disabled:ring-gray-7',
};

type ButtonSizingClassNamesType = Record<ButtonSizeType, {
  withIcon: string;
  withoutIcon: string;
  base: string;
}>
const buttonSizingClassNames: ButtonSizingClassNamesType = {
  sm: {
    base: 'text-sm px-4',
    withIcon: 'py-1',
    withoutIcon: 'py-1.5',
  },
  md: {
    base: 'text-base px-5',
    withIcon: 'py-2',
    withoutIcon: 'py-2.5',
  },
  lg: {
    base: 'text-base px-6',
    withIcon: 'py-3',
    withoutIcon: 'py-3.5',
  },
};

type ButtonClassNamesHookProps = {
  withIcon: boolean;
  size: ButtonSizeType;
  appearance: ButtonAppearanceType;
  sizingClassesObject: ButtonSizingClassNamesType;
  appearanceClassesObject: ButtonAppearanceClassNamesType;
}
const useButtonClassNames = (
  {
    withIcon,
    size,
    appearance,
    sizingClassesObject,
    appearanceClassesObject,
  }: ButtonClassNamesHookProps,
) => {
  const sizingClasses = useMemo(() => {
    const sourceClasses = sizingClassesObject[size];
    const baseClasses = sourceClasses.base;

    const additionalClasses = withIcon
      ? sourceClasses.withIcon
      : sourceClasses.withoutIcon;

    return clsx(baseClasses, additionalClasses);
  }, [size, sizingClassesObject, withIcon]);

  const appearanceClasses = useMemo(() => {
    return appearanceClassesObject[appearance];
  }, [appearance, appearanceClassesObject]);

  return {
    sizingClasses,
    appearanceClasses,
  };
};

const BaseButton = (
  {
    children,
    className,
    appearance = ButtonAppearanceEnum.primary,
    size = ButtonSizesEnum.lg,
    type = 'button',
    icon,
    ...props
  }: PropsWithChildren<IBaseButtonProps>,
) => {
  const { appearanceClasses, sizingClasses } = useButtonClassNames({
    withIcon: !!icon,
    size,
    appearance,
    sizingClassesObject: buttonSizingClassNames,
    appearanceClassesObject: buttonAppearanceClassNames,
  });

  return (
    <button
      className={clsx(
        className,
        'text-center rounded flex justify-center items-center font-bold font-dark disabled:text-gray-8 disabled:cursor-not-allowed',
        appearanceClasses,
        sizingClasses,
      )}
      type={type}
      {...props}
    >
      {icon && (
        <div className="mr-1.5 flex justify-center items-center shrink-0">
          {icon}
        </div>
      )}

      {children}
    </button>
  );
};

export { BaseButton };
