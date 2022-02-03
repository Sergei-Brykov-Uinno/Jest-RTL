import { InvestmentReviewStore } from "./InvestmentReviewStore";
import { investmentReviewAPI } from "./assets/InvestmentReviewAPI";
import { injectAuthStore } from "./assets/AuthStore";
import { lastInvestment } from "./assets/localStorage";
import ProcessAPI from "./assets/ProcessAPI";
import {
	MOCKED_ESTIMATION,
	MOCKED_FIRST_PROCESS,
	MOCKED_HISTORICAL,
	MOCKED_INVESTMENT_DATA,
	MOCKED_INVESTMENT_REVIEW_ID,
	MOCKED_IS_OWNER,
	MOCKED_PROCESSES_DATA,
	MOCKED_REVIEW,
	MOCKED_SUMMARY,
} from "./mocked-data/investment-review";
import { InvestmentProcessStore } from "./assets/InvestmentProcessStore";
import { format } from "date-fns";

jest.mock("./assets/helpers");
jest.mock("./assets/InvestmentAPI");
jest.mock("./assets/InvestmentReviewAPI");
jest.mock("./assets/AuthStore");
jest.mock("./assets/ProcessAPI");
jest.mock("./assets/InvestmentProcessStore");
jest.mock("./assets/localStorage");

const mockedGetProcessDetails = ProcessAPI.getProcessDetails as jest.Mock;
mockedGetProcessDetails.mockResolvedValue({ id: "id" });

const DEFAULT_PROCESS_ID = "DEFAULT_PROCESS_ID";
const DEFAULT_USER = {
	authUserRoles: ["free"],
	user: { default_process_id: DEFAULT_PROCESS_ID },
};
const mockedUser = injectAuthStore as jest.Mock;

const mockedInvestmentReviewApiGetById = investmentReviewAPI.get as jest.Mock;
const mockedGetHistoricalFinancials =
	investmentReviewAPI.getHistoricalFinancials as jest.Mock;
const mockedGetEstimationFinancials =
	investmentReviewAPI.getEstimationFinancials as jest.Mock;

function setUp(
	mockedReview?: typeof MOCKED_REVIEW,
	user?: typeof DEFAULT_USER
) {
	mockedInvestmentReviewApiGetById.mockImplementation((id: string) => {
		if (id === MOCKED_INVESTMENT_REVIEW_ID) {
			return mockedReview || MOCKED_REVIEW;
		}
		throw new Error("Invalid id");
	});
	mockedUser.mockReturnValue(user || DEFAULT_USER);
	return new InvestmentReviewStore();
}

describe("Testing store", () => {
	describe("Testing site effects", () => {
		it("correctly calls investmentReviewAPI.get", async () => {
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(investmentReviewAPI.get).toBeCalledWith(
				MOCKED_INVESTMENT_REVIEW_ID
			);
		});

		it("correctly calls localStorage", async () => {
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(lastInvestment.setValue).toBeCalledWith(
				`/investment-reviews/${MOCKED_INVESTMENT_REVIEW_ID}`
			);
		});

		it("correctly calls localStorage", async () => {
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(lastInvestment.setValue).toBeCalledWith(
				`/investment-reviews/${MOCKED_INVESTMENT_REVIEW_ID}`
			);
		});

		it("correctly calls getProcessDetails when processes field is empty", async () => {
			const mockedReview = { ...MOCKED_REVIEW, processes: { data: [] } };

			const store = setUp(mockedReview);

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(mockedGetProcessDetails).toBeCalledWith(DEFAULT_PROCESS_ID);
		});

		it("does not call getProcessDetails when processes length >= 1", async () => {
			// mockedGetProcessDetails.mockClear();
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(mockedGetProcessDetails).not.toBeCalled();
		});
	});

	describe("Testing interface", () => {
		it("correctly displays investment data", async () => {
			const date = new Date(MOCKED_INVESTMENT_DATA.meta.year_end ?? "");
			const expectedYearEnd = format(date, "MMM-yy");

			const issuedShares = Number(MOCKED_INVESTMENT_DATA.meta.issued_shares);
			const expectedIssuedShares =
				Intl.NumberFormat("us-EN", {
					maximumFractionDigits: 1,
				}).format(issuedShares) + "m" || "-"; // 5,061.4m

			const lastPrice = Number(MOCKED_INVESTMENT_DATA?.meta.last_price);
			const expectedLastPrice = Intl.NumberFormat("us-EN", {
				style: "currency",
				currency: "USD",
				currencyDisplay: "narrowSymbol",
			}).format(lastPrice);

			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.investment?.meta).toEqual({
				yearEndFormatted: expectedYearEnd,
				issuedSharesFormatted: expectedIssuedShares,
				lastPriceFormatted: expectedLastPrice,
				...MOCKED_INVESTMENT_DATA.meta,
			});
		});

		it("correctly displays summary", async () => {
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.summary).toEqual(MOCKED_SUMMARY);
		});

		it("correctly displays processes when review data has a processes", async () => {
			const store = setUp();

			const expectedProcesses = MOCKED_PROCESSES_DATA.map(
				(process) => new InvestmentProcessStore(process, MOCKED_INVESTMENT_DATA)
			);
			const expectedMockedActiveProcess = new InvestmentProcessStore(
				MOCKED_FIRST_PROCESS,
				MOCKED_INVESTMENT_DATA
			);

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.processes).toEqual(expectedProcesses);
			expect(store.activeProcess).toEqual(expectedMockedActiveProcess);
		});

		it("correctly sets processes when review data does not have a processes", async () => {
			mockedGetProcessDetails.mockResolvedValue(MOCKED_FIRST_PROCESS);
			const mockedReview = { ...MOCKED_REVIEW, processes: { data: [] } };
			const store = setUp(mockedReview);

			const expectedMockedActiveProcess = new InvestmentProcessStore(
				MOCKED_FIRST_PROCESS,
				MOCKED_INVESTMENT_DATA
			);

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.processes).toHaveLength(1);
			expect(store.processes).toContainEqual(expectedMockedActiveProcess);
			expect(store.activeProcess).toEqual(expectedMockedActiveProcess);
		});

		it("correctly set canUserChangeReview and showSharedButton", async () => {
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.canUserChangeReview).toEqual(MOCKED_IS_OWNER);
			expect(store.showSharedButton).toEqual(MOCKED_IS_OWNER);
		});
	});
	describe("Testing historical and estimation", () => {
		beforeAll(() => {
			mockedGetHistoricalFinancials.mockResolvedValue(MOCKED_HISTORICAL);
			mockedGetEstimationFinancials.mockResolvedValue(MOCKED_ESTIMATION);
		});

		it("User does not have permission to get Historical & ", async () => {
			const store = setUp();

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.historicalFinancial).toEqual([]);
			expect(store.estimationFinancial).toEqual([]);
			expect(mockedGetHistoricalFinancials).not.toHaveBeenCalled();
			expect(mockedGetEstimationFinancials).not.toHaveBeenCalled();
		});

		it("User does not have permission to get Historical & ", async () => {
			const user = {
				user: { default_process_id: "default_process_id" },
				authUserRoles: ["investor"],
			};

			const store = setUp(undefined, user);

			await store.getById(MOCKED_INVESTMENT_REVIEW_ID);

			expect(store.historicalFinancial).toEqual(MOCKED_HISTORICAL);
			expect(store.estimationFinancial).toEqual(MOCKED_ESTIMATION);
			expect(mockedGetHistoricalFinancials).toHaveBeenCalledWith(
				MOCKED_INVESTMENT_REVIEW_ID
			);
			expect(mockedGetEstimationFinancials).toHaveBeenCalledWith(
				MOCKED_INVESTMENT_REVIEW_ID
			);
		});
	});
});
