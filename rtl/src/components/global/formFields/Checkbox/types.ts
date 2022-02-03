import { InputHTMLAttributes } from 'react';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
  value?: HTMLInputElement['value'] | boolean;
};
