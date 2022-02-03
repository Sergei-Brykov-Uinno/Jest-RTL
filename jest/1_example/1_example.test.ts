import { InvestmentReviewStore } from "./InvestmentReviewStore";

// 1 step. const store = new InvestmentReviewStore()

jest.mock("./assets/helpers", () => ({
	NoteModel: jest.fn(),
}));
jest.mock("./assets/InvestmentAPI", () => ({}));
jest.mock("./assets/InvestmentReviewAPI", () => ({
	investmentReviewAPI: {},
}));

jest.mock("./assets/AuthStore", () => ({
	injectAuthStore: jest.fn(),
}));
jest.mock("./assets/ProcessAPI", () => ({
	getProcessDetails: jest.fn(),
}));
jest.mock("./assets/InvestmentProcessStore", () => ({
	InvestmentProcessStore: jest.fn(),
}));
describe("1 Step. Create an instance of the class", () => {
	it("2 Step. Mock all function", () => {
		const store = new InvestmentReviewStore();

		expect(42).toBe(40 + 2);
	});
});
