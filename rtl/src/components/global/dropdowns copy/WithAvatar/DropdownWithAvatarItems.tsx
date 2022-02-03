import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { BaseDropdown } from 'components/global/dropdowns/Base/BaseDropdown';

type DropdownWithAvatarItemsType = (props: PropsWithChildren<Parameters<typeof BaseDropdown.Items>[0]>) => JSX.Element;

const DropdownWithAvatarItems: DropdownWithAvatarItemsType = (
  {
    className,
    ...props
  },
) => {
  return (
    <BaseDropdown.Items
      className={clsx(className, 'w-full divide-y font-semibold divide-gray-5 rounded shadow-dropdown-primary py-2 mt-2 bg-gray-6')}
      {...props}
    />
  );
};

export { DropdownWithAvatarItems };
