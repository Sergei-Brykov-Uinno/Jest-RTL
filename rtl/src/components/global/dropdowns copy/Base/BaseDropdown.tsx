import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Menu } from '@headlessui/react';

import { BaseDropdownButton } from './BaseDropdownButton';
import { BaseDropdownItems } from './BaseDropdownItems';
import { BaseDropdownItem } from './BaseDropdownItem';

type DropdownType = ((props: PropsWithChildren<{
  className?: string;
} & Parameters<typeof Menu>[0]>) => JSX.Element) & {
  Button: typeof BaseDropdownButton;
  Items: typeof BaseDropdownItems;
  Item: typeof BaseDropdownItem;
};

const BaseDropdown: DropdownType = (
  {
    className,
    ...props
  },
) => {
  return (
    <Menu
      as="div"
      className={clsx(className, 'relative')}
      {...props}
    />
  );
};

BaseDropdown.Button = BaseDropdownButton;
BaseDropdown.Items = BaseDropdownItems;
BaseDropdown.Item = BaseDropdownItem;

export { BaseDropdown };
