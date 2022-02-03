import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { LocalStorage } from "utils/localStorage";
import { LogInWidget } from "./LogInWidget";

const mockLogIn = jest.fn();
const mockGetUser = jest.fn();

jest.mock("react-router-dom", () => ({
	Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
		<a href={to}>{children}</a>
	),
}));
jest.mock("services/auth/authService", () => ({
	authService: {
		useLogInMutation: jest
			.fn()
			.mockImplementation(() => [mockLogIn, { isLoading: false }]),
		useLazyGetUserQuery: jest
			.fn()
			.mockImplementation(() => [mockGetUser, { isLoading: false }]),
	},
}));

const setup = () => {
	return render(<LogInWidget />);
};

describe("Log In Widget", () => {
	let emailField: HTMLInputElement | null = null;
	let passwordField: HTMLInputElement | null = null;
	let rememberField: HTMLInputElement | null = null;

	beforeEach(() => {
		const { getByRole, getByLabelText } = setup();

		emailField = getByRole("textbox", { name: /email/i }) as HTMLInputElement;
		passwordField = getByLabelText(/password/i) as HTMLInputElement;
		rememberField = getByLabelText(/keep me logged in/i) as HTMLInputElement;
	});

	afterEach(() => {
		emailField = null;
		passwordField = null;
		rememberField = null;
	});

	it("Valid form call logIn function with correct data", async () => {
		const ACCESS_TOKEN = "access_token";
		const REFRESH_TOKEN = "refresh_token";

		const spySetAccessToken = jest.spyOn(LocalStorage.accessToken, "set");
		const spySetRefreshToken = jest.spyOn(LocalStorage.refreshToken, "set");

		const mockUnWrap = jest.fn(() => ({
			access_token: ACCESS_TOKEN,
			refresh_token: REFRESH_TOKEN,
		}));
		mockLogIn.mockImplementation(() => ({
			unwrap: mockUnWrap,
		}));
		const EMAIL = "example@gmail.com";
		const PASSWORD = "password1";
		const REMEMBER = true;

		fireEvent.input(emailField!, { target: { value: EMAIL } });
		fireEvent.input(passwordField!, { target: { value: PASSWORD } });
		fireEvent.click(rememberField!); // REMEMBER = true

		await act(async () => {
			fireEvent.submit(screen.getByTestId("form"));
		});

		expect(mockLogIn).toHaveBeenCalledWith({
			email: EMAIL,
			password: PASSWORD,
			remember: REMEMBER,
		});
		expect(mockUnWrap).toBeCalled();
		expect(spySetAccessToken).toBeCalledWith(ACCESS_TOKEN);
		expect(spySetRefreshToken).toBeCalledWith(REFRESH_TOKEN);
		expect(mockGetUser).toBeCalled();
	});

	it("Display error message when email is invalid", async () => {
		const INVALID_EMAIL = "example@m";
		const PASSWORD = "password1";
		const ERROR_MESSAGE = "email must be a valid email";

		fireEvent.input(emailField!, { target: { value: INVALID_EMAIL } });
		fireEvent.input(passwordField!, { target: { value: PASSWORD } });

		await act(async () => {
			fireEvent.submit(screen.getByTestId("form"));
		});

		expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
		expect(mockLogIn).not.toBeCalled();
		expect(mockGetUser).not.toBeCalled();
	});

	it("Display error message when user does not pass email", async () => {
		const EMPTY_EMAIL = "";
		const PASSWORD = "fasfaf";
		const ERROR_MESSAGE = "email is a required field";

		fireEvent.input(emailField!, { target: { value: EMPTY_EMAIL } });
		fireEvent.input(passwordField!, { target: { value: PASSWORD } });

		await act(async () => {
			fireEvent.submit(screen.getByTestId("form"));
		});
		expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
		expect(mockLogIn).not.toBeCalled();
		expect(mockGetUser).not.toBeCalled();
	});
	it("Display error message when user does not pass password", async () => {
		const EMAIL = "example@gmail.com";
		const EMPTY_PASSWORD = "";
		const ERROR_MESSAGE = "password is a required field";

		fireEvent.input(emailField!, { target: { value: EMAIL } });
		fireEvent.input(passwordField!, { target: { value: EMPTY_PASSWORD } });

		await act(async () => {
			fireEvent.submit(screen.getByTestId("form"));
		});

		expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
		expect(mockLogIn).not.toBeCalled();
		expect(mockGetUser).not.toBeCalled();
	});
});
