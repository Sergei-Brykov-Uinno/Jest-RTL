import React, { PropsWithChildren } from 'react';
import { Menu } from '@headlessui/react';

type DropdownItemType = ((props: PropsWithChildren<Parameters<typeof Menu.Item>[0]>) => JSX.Element);

const BaseDropdownItem: DropdownItemType = (
  {
    ...props
  },
) => {
  return (
    <Menu.Item {...props} />
  );
};

export { BaseDropdownItem };
