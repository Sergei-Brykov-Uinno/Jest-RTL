import { InvestmentReviewStore } from "./InvestmentReviewStore";

jest.mock("./assets/helpers");
jest.mock("./assets/InvestmentAPI");
jest.mock("./assets/InvestmentReviewAPI");
jest.mock("./assets/AuthStore");
jest.mock("./assets/ProcessAPI");
jest.mock("./assets/InvestmentProcessStore");
function setUp() {
	return new InvestmentReviewStore();
}

describe("3 Step. Move mocks to separate files", () => {
	it("4 Step. Call the function under test", async () => {
		const store = setUp();

		// await store.getById("Fake_id");

		expect(42).toBe(40 + 2);
	});
});
