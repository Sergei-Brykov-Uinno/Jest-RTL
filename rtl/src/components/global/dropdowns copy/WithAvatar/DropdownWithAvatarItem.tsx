import React, { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';

import { BaseDropdown } from 'components/global/dropdowns/Base/BaseDropdown';

type DropdownWithAvatarItemType = (props: PropsWithChildren<
  Parameters<typeof BaseDropdown.Item>[0] & {icon?: ReactNode}
  >) => JSX.Element;

const DropdownWithAvatarItem: DropdownWithAvatarItemType = (
  {
    className,
    icon,
    children,
    ...props
  },
) => {
  return (
    <BaseDropdown.Item
      className={clsx(className, 'flex items-center cursor-pointer py-3.5 mx-4')}
      as="div"
      {...props}
    >
      {icon && (
        <div className="flex items-center justify-center mr-3">{icon}</div>
      )}
      {children}
    </BaseDropdown.Item>
  );
};

export { DropdownWithAvatarItem };
