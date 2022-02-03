import { CompanyFinancialData } from "./assets/helpers";
import { InvestmentDTO } from "./assets/Investment";
import { InvestmentProcessStore } from "./assets/InvestmentProcessStore";

/**
 * page: investments/* investment-reviews/*
 *
 * If the ticker has not yet been review by you => you will be taken to the page /investments this will be InvestmentStore
 * If the ticker has yet been review by you => you will be taken to the page /investment-reviews this will be InvestmentReviewStore
 *
 * InvestmentBase is the base class for InvestmentStore & InvestmentReviewStore both of these classes implement IInvestmentStore
 */

export interface IInvestmentStore {
	investment: InvestmentDTO | null;
	summary: string;
	processes: InvestmentProcessStore[];
	activeProcess: InvestmentProcessStore | undefined;
	fetched: boolean;
	loading: boolean;
	showSharedButton: boolean;
	canUserChangeReview: boolean;
	getById: (id: string, silent: boolean) => Promise<void>;
	historicalFinancial: CompanyFinancialData[];
	estimationFinancial: CompanyFinancialData[];
}
