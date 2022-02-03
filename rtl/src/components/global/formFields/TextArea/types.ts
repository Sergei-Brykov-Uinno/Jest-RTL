import { TextareaHTMLAttributes } from 'react';
import { BaseTextFieldProps } from '../baseComponents/BaseTextField/types';

export type TextAreaProps = BaseTextFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
