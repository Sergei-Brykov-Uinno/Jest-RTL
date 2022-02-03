import { InvestmentReviewStore } from "./InvestmentReviewStore";
import { investmentReviewAPI } from "./assets/InvestmentReviewAPI";
import { injectAuthStore } from "./assets/AuthStore";
import { lastInvestment } from "./assets/localStorage";
import ProcessAPI from "./assets/ProcessAPI";

jest.mock("./assets/helpers");
jest.mock("./assets/InvestmentAPI");
jest.mock("./assets/InvestmentReviewAPI");
jest.mock("./assets/AuthStore");
jest.mock("./assets/ProcessAPI");
jest.mock("./assets/InvestmentProcessStore");
jest.mock("./assets/localStorage");

const mockedGetProcessDetails = ProcessAPI.getProcessDetails as jest.Mock;
mockedGetProcessDetails.mockResolvedValue({ id: "id" });

const FAKE_ID = "FAKE_ID";
const MOCK_REVIEW_DATA_ID = "MOCK_REVIEW_DATA_ID";

const MOCK_REVIEW_DATA = {
	object: "InvestmentReview",
	id: MOCK_REVIEW_DATA_ID,
	summary: null,
	isOwner: true,
	updated_at: "2021-09-27T02:32:56.000000Z",
	user: {
		data: {
			object: "User",
			id: "598omjnx94kgy6err7e7vq3ab50drpzr",
			username: "sergbrikov+2@gmail.com",
			avatar:
				"https://www.gravatar.com/avatar/669520760d37b872a49b7c785962311c.jpg?s=150&d=mm",
			default_process_id: "z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
		},
	},
	investment: {
		data: {
			object: "Investment",
			id: "433om7kanqp08zeynlbxdg596vj4ry8g",
			ticker: "BHP-AU",
			type: "factset",
			name: "BHP Group Ltd.",
			meta: {
				name: "BHP Group Ltd.",
				ticker: "BHP-AU",
				local_fx: "AUD",
				year_end: "2021-06-30",
				sector_l1: "Non-Energy Minerals",
				sector_l3: "Other Metals/Minerals",
				last_price: 44.78,
				market_cap: 226651.1381128,
				description:
					"BHP Group Ltd. engages in the exploration, development, production and processing of iron ore, metallurgical coal and copper. It operates through the following segments: Petroleum, Copper, Iron Ore and Coal. The Petroleum segment explores, develops and produces oil and gas. The Copper segment refers to the mining of copper, silver, lead, zinc, molybdenum, uranium and gold. The Iron Ore segment refers to mining of iron ore. The Coal segment focuses on metallurgical coal and energy coal. The company was founded on August 13, 1885 and is headquartered in Melbourne, Australia.",
				reporting_fx: "USD",
				issued_shares: 5061.43676,
			},
			updated_at: "2022-01-11T07:56:26.000000Z",
		},
	},
	processes: {
		data: [],
	},
	model: {
		data: [],
	},
	notes: {
		data: [],
	},
	permissions: {
		data: [],
	},
};

const DEFAULT_PROCESS_ID = "DEFAULT_PROCESS_ID";
const DEFAULT_USER = {
	authUserRoles: ["free"],
	user: { default_process_id: DEFAULT_PROCESS_ID },
};
const mockedUser = injectAuthStore as jest.Mock;

const mockedInvestmentReviewApiGetById = investmentReviewAPI.get as jest.Mock;

function setUp() {
	mockedInvestmentReviewApiGetById.mockImplementation((id: string) => {
		if (id === FAKE_ID) {
			return MOCK_REVIEW_DATA;
		}
		throw new Error("Invalid id");
	});
	mockedUser.mockReturnValue(DEFAULT_USER);
	return new InvestmentReviewStore();
}

describe("Testing imported interfaces ", () => {
	it("correctly calls investmentReviewAPI", async () => {
		const store = setUp();

		await store.getById(FAKE_ID);

		expect(investmentReviewAPI.get).toBeCalledWith(FAKE_ID);
	});

	it("correctly calls localStorage", async () => {
		const store = setUp();

		await store.getById(FAKE_ID);

		expect(lastInvestment.setValue).toBeCalledWith(
			`/investment-reviews/${MOCK_REVIEW_DATA_ID}`
		);
	});

	it("correctly calls localStorage", async () => {
		const store = setUp();

		await store.getById(FAKE_ID);

		expect(lastInvestment.setValue).toBeCalledWith(
			`/investment-reviews/${MOCK_REVIEW_DATA_ID}`
		);
	});
	it("correctly calls getProcessDetails (BAD TEST)", async () => {
		const store = setUp();

		await store.getById(FAKE_ID);

		expect(mockedGetProcessDetails).toBeCalledWith(
			DEFAULT_USER.user.default_process_id
		);
	});
});
