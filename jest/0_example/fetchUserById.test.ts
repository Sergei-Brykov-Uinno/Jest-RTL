import { fetchUserById } from "./fetchUserById";
import { User } from "./imports/User";
import { UserAPI } from "./imports/UsersAPI";

// const MockedUserAPIGetUser = UserAPI.getUser as jest.Mock;
// const mockHandler = jest.fn();
// const MOCK_OPTIONS = true;
// const mockDisplayYourself = jest.fn();

// jest.mock("./imports/UsersAPI", () => ({
// 	UserAPI: {
// 		getUser: jest.fn(),
// 	},
// }));

// jest.mock("./imports/useUserData", () => ({
// 	useUserData: jest.fn().mockImplementation(() => ({
// 		handler: mockHandler,
// 		options: MOCK_OPTIONS,
// 	})),
// }));

// jest.mock("./imports/User", () => ({
// 	User: jest
// 		.fn()
// 		.mockImplementation(function (
// 			this: User,
// 			userData: { id: number; name: string; registerDate: string }
// 		) {
// 			Object.assign(this, userData);
// 			this.displayYourself = mockDisplayYourself;
// 		}),
// }));

// const USER_DTO = {
// 	id: 0,
// 	firstName: "Serg",
// 	lastName: "Btykov",
// 	register_date: Date.now(),
// };
// const USER_DATA = {
// 	id: 0,
// 	name: "Serg Brykov",
// 	registerDate: new Date(Date.now()).toLocaleDateString(),
// };

// MockedUserAPIGetUser.mockResolvedValue(USER_DTO);
// MockedUserAPIGetUser.mockImplementation(async () => USER_DTO);

describe("getById", () => {
	// it("call UserAPI.getUser", async () => {
	// 	const USER_ID = "USER_ID";
	// 	await fetchUserById(USER_ID);
	// 	expect(MockedUserAPIGetUser).toBeCalledWith(USER_ID);
	// });
	// it("call handler with correct data", async () => {
	// 	const USER_ID = "USER_ID";
	// 	await fetchUserById(USER_ID);
	// 	expect(mockHandler).toBeCalledWith(USER_DTO, MOCK_OPTIONS);
	// });
	// it("displayYourself to be called", async () => {
	// 	mockHandler.mockImplementation(() => USER_DATA);
	// 	const user = await fetchUserById("USER_ID");
	// 	expect(mockDisplayYourself).toBeCalled();
	// });
	// it("correct returned class", async () => {
	// 	const USER_ID = "USER_ID";
	// 	mockHandler.mockImplementation(() => USER_DATA);
	// 	const user = await fetchUserById(USER_ID);
	// 	expect(user).toEqual(new User(USER_DATA));
	// });
});
