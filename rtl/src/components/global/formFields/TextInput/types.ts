import { InputHTMLAttributes } from 'react';
import { BaseTextFieldProps } from '../baseComponents/BaseTextField/types';

export type TextInputProps = BaseTextFieldProps & InputHTMLAttributes<HTMLInputElement>;
