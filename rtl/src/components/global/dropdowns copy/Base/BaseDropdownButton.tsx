import React, { Fragment, PropsWithChildren } from 'react';
import { Menu } from '@headlessui/react';

type DropdownButtonType = ((props: PropsWithChildren<Parameters<typeof Menu.Button>[0]>) => JSX.Element);

const BaseDropdownButton: DropdownButtonType = (
  {
    ...props
  },
) => {
  return (
    <Menu.Button
      as={Fragment}
      {...props}
    />
  );
};

export { BaseDropdownButton };
