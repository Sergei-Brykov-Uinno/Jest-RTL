import React, { PropsWithChildren } from 'react';
import { BaseButton } from '../baseComponents/Base/BaseButton';
import { IButtonProps } from '../types';

const PrimaryButton = (
  {
    ...props
  }: PropsWithChildren<IButtonProps>,
) => {
  return (
    <BaseButton
      appearance="primary"
      {...props}
    />
  );
};

export { PrimaryButton };
