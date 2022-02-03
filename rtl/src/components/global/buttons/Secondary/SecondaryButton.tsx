import React, { PropsWithChildren } from 'react';
import { BaseButton } from '../baseComponents/Base/BaseButton';
import { IButtonProps } from '../types';

const SecondaryButton = (
  {
    ...props
  }: PropsWithChildren<IButtonProps>,
) => {
  return (
    <BaseButton
      appearance="secondary"
      {...props}
    />
  );
};

export { SecondaryButton };
