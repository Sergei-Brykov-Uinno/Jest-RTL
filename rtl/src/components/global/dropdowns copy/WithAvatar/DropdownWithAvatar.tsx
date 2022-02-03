import React, { PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';

import { BaseDropdown } from 'components/global/dropdowns/Base/BaseDropdown';
import { DropdownWithAvatarItems } from './DropdownWithAvatarItems';
import { DropdownWithAvatarItem } from './DropdownWithAvatarItem';

type DropdownWithAvatarType = ((props: PropsWithChildren<{
  name: string;
  subName: string;
  avatar?: string;
  className?: string;
}>) => JSX.Element) & {
  Items: typeof DropdownWithAvatarItems;
  Item: typeof DropdownWithAvatarItem;
};

const useAvatarLetters = (name: string) => {
  return useMemo(() => {
    const words = name.split(' ');

    if (words.length < 2) {
      return '--';
    }

    const firstLetter = words[0][0].toUpperCase();
    const secondLetter = words[1][0].toUpperCase();

    return `${firstLetter}${secondLetter}`;
  }, [name]);
};

const DropdownWithAvatar: DropdownWithAvatarType = (
  {
    className,
    name,
    subName,
    avatar,
    children,
  },
) => {
  const avatarLetters = useAvatarLetters(name);

  return (
    <BaseDropdown className={className}>
      <BaseDropdown.Button>
        {({ open }) => {
          return (
            <div
              className={clsx('flex items-center py-2 pl-4 pr-2.5 bg-gray-6 rounded cursor-pointer min-w-[248px]', {
                'ring-inset ring-1 ring-dark': open,
              })}
            >
              <div className="flex items-center justify-center shrink-0 w-[32px] h-[32px] bg-gray-4 rounded mr-3 text-md font-semibold">
                {
                  avatar
                    ? (
                      <img src={avatar} alt="avatar" className="object-cover h-full w-full rounded" />
                    )
                    : avatarLetters
                }
              </div>

              <div className="flex flex-col pr-5">
                <span className="font-semibold leading-3">{name}</span>
                <span className="text-xs text-gray-10">{subName}</span>
              </div>

              <ArrowDownIcon
                className={clsx('transition-transform duration-300 ml-auto', {
                  '-rotate-180': open,
                })}
              />
            </div>
          );
        }}
      </BaseDropdown.Button>

      {children}
    </BaseDropdown>
  );
};

DropdownWithAvatar.Items = DropdownWithAvatarItems;
DropdownWithAvatar.Item = DropdownWithAvatarItem;

export { DropdownWithAvatar };
