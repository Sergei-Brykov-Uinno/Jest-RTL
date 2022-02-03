import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonAppearanceEnum {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSizesEnum {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type ButtonSizeType = keyof typeof ButtonSizesEnum;
export type ButtonAppearanceType = keyof typeof ButtonAppearanceEnum;

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearanceType;
  size?: ButtonSizeType;
  icon?: ReactNode;
}

export type IButtonProps = Omit<IBaseButtonProps, 'appearance'>;
