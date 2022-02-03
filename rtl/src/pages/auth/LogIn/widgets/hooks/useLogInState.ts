import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { LocalStorage } from "utils/localStorage";
import { LogInRequest } from "services/auth/dto";

import { useLogInQuery } from "./useLogInQuery";

import { logInFormSchema } from "../formSchemas";

export const useLogInState = () => {
	const { logIn, getUser, isLoading } = useLogInQuery();

	const {
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm<LogInRequest>({
		resolver: yupResolver(logInFormSchema),
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<LogInRequest> = useCallback(
		async (formValues) => {
			try {
				const { access_token, refresh_token } = await logIn(
					formValues
				).unwrap();
				LocalStorage.accessToken.set(access_token);
				LocalStorage.refreshToken.set(refresh_token);

				await getUser(undefined);
			} catch (error) {
				console.log(error);
				// TODO: Add toast
			}
		},
		[getUser, logIn]
	);

	return {
		form: {
			handleSubmit,
			control,
			isValid,
			isLoading,
		},
		onSubmit,
	};
};
