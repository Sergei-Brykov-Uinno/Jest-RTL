import { fetchUserById } from "./fetchUserById";
import { UserAPI } from "./imports/UsersAPI";

const mockHandler = jest.fn();
const MOCK_OPTIONS = true;
const mockDisplayYourself = jest.fn();

jest.mock("./imports/UsersAPI", () => ({
	UserAPI: {
		getUser: jest.fn(),
	},
}));

const USER_DTO = {
	id: 0,
	firstName: "Serg",
	lastName: "Btykov",
	register_date: Date.now(),
};
const USER_DATA = {
	id: 0,
	name: "Serg Brykov",
	registerDate: new Date(Date.now()).toLocaleDateString(),
};

UserAPI.getById.mockResolvedValue(USER_DTO);

describe("getById", () => {
	it("call UserAPI.getUser", async () => {
		const USER_ID = "USER_ID";
		await fetchUserById(USER_ID);

		expect(UserAPI.getUser).toBeCalledWith(USER_ID);
	});

	it("call handler with correct data", async () => {
		const USER_ID = "USER_ID";
		await fetchUserById(USER_ID);

		expect(mockHandler).toBeCalledWith(USER_DTO, MOCK_OPTIONS);
	});

	it("displayYourself to be called", async () => {
		mockHandler.mockImplementation(() => USER_DATA);
		const user = await fetchUserById("USER_ID");

		expect(mockDisplayYourself).toBeCalled();
	});

	it("correct returned class", async () => {
		const USER_ID = "USER_ID";
		mockHandler.mockImplementation(() => USER_DATA);
		const user = await fetchUserById(USER_ID);

		const { User } = jest.requireActual("./imports/User");

		const EXPECTED_OBJ = Object.assign(new User(USER_DATA), {
			displayYourself: mockDisplayYourself,
		});

		expect(user).toEqual(EXPECTED_OBJ);
	});
});
