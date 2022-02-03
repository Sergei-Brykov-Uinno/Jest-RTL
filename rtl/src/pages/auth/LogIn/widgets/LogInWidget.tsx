import React from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { validationMessages } from "constants/validationMessages";

import { TextInput } from "components/global/formFields/TextInput/TextInput";
import { PasswordInput } from "components/global/formFields/PasswordInput/PasswordInput";
import { Checkbox } from "components/global/formFields/Checkbox/Checkbox";

import { PrimaryButton } from "components/global/buttons/Primary/PrimaryButton";

import { useLogInState } from "./hooks/useLogInState";

const LogInWidget = () => {
	const {
		form: { handleSubmit, control, isValid, isLoading },
		onSubmit,
	} = useLogInState();

	return (
		<>
			<h1 className="pb-4">Welcome Back</h1>
			<p className="pb-8">
				Enter your credentials to access in to your account.
			</p>

			<form onSubmit={handleSubmit(onSubmit)} data-testid="form">
				<Controller
					name="email"
					control={control}
					defaultValue=""
					render={({ field, fieldState }) => (
						<TextInput
							id="email"
							label="Email"
							placeholder="e.g. name@company.com"
							className="mb-3"
							error={fieldState.error?.message}
							{...field}
						/>
					)}
				/>

				<Controller
					name="password"
					control={control}
					defaultValue=""
					render={({ field, fieldState }) => (
						<PasswordInput
							id="password"
							label="Password"
							placeholder={validationMessages.password}
							className="mb-6"
							error={fieldState.error?.message}
							{...field}
						/>
					)}
				/>

				<PrimaryButton
					className="w-full"
					type="submit"
					disabled={!isValid || isLoading}
				>
					Log In
				</PrimaryButton>

				<div className="flex justify-between items-center mt-4">
					<Controller
						name="remember"
						control={control}
						defaultValue={false}
						render={({ field }) => (
							<Checkbox id="remember" {...field}>
								Keep me logged in
							</Checkbox>
						)}
					/>

					<Link to="/auth/forgot-password" className="font-bold">
						Forgot password?
					</Link>
				</div>
			</form>
		</>
	);
};

export { LogInWidget };
