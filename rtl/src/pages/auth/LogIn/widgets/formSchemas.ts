import * as yup from 'yup';

export const logInFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  remember: yup.boolean().notRequired(),
}).required();
