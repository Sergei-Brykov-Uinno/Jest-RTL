import React, { Fragment, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Transition, Menu } from '@headlessui/react';

type DropdownItemsType = ((props: PropsWithChildren<Parameters<typeof Menu.Items>[0]>) => JSX.Element);

const BaseDropdownItems: DropdownItemsType = (
  {
    className,
    ...props
  },
) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={clsx('origin-top absolute focus:outline-none', className)}
        {...props}
      />
    </Transition>
  );
};

export { BaseDropdownItems };
