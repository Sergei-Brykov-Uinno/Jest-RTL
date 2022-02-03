import { format, isValid } from "date-fns";
import {
	action,
	computed,
	makeObservable,
	observable,
	runInAction,
} from "mobx";
import { injectAuthStore } from "./assets/AuthStore";
import { CompanyFinancialData } from "./assets/helpers";
import { InvestmentDTO } from "./assets/Investment";
import { InvestmentProcessDTO } from "./assets/InvestmentProcess";
import { InvestmentProcessStore } from "./assets/InvestmentProcessStore";
import { InvestmentReview } from "./assets/InvestmentReview";
import { investmentReviewAPI } from "./assets/InvestmentReviewAPI";
import { lastInvestment } from "./assets/localStorage";
import { prepareProcess } from "./assets/prepareProcessItemData";
import ProcessAPI from "./assets/ProcessAPI";
import { IInvestmentStore } from "./IInvestmentStore";

export class InvestmentReviewStore implements IInvestmentStore {
	processes: InvestmentProcessStore[] = [];
	defaultProcess?: InvestmentProcessStore;
	investment: InvestmentDTO | null = null;
	loading: boolean = true;
	fetched: boolean = false;
	activeProcessId: string | null = null;
	authStore = injectAuthStore(this);
	isActiveInvestment = true;
	_review: InvestmentReview | undefined;
	historicalFinancial: CompanyFinancialData[] = [];
	estimationFinancial: CompanyFinancialData[] = [];
	constructor() {
		makeObservable(this, {
			processes: observable.deep,
			investment: observable,
			loading: observable,
			activeProcessId: observable,
			historicalFinancial: observable,
			estimationFinancial: observable,
			investmentReview: computed,
			showSharedButton: computed,
			activeProcess: computed,
			canUserChangeReview: computed,
			_setStoreFromReview: action.bound,
			getById: action.bound,
		});
	}

	async getById(id: string, silent: boolean = false) {
		if (!silent) {
			this.loading = true;
		}

		try {
			const review = await investmentReviewAPI.get(id);
			// console.log(JSON.stringify(review, null, 2));
			this.investmentReview = review;
			await this._setStoreFromReview(review);

			runInAction(() => {
				this.loading = false;
				this.fetched = true;
				lastInvestment.setValue(`/investment-reviews/${review.id}`);
			});

			const [historical, estimation] = await this._getCompanyFinansials(
				review.id
			);
			runInAction(() => {
				this.historicalFinancial = historical;
				this.estimationFinancial = estimation;
			});
		} catch (e) {
			console.log(e);
		}
	}

	async _setStoreFromReview(review: any) {
		const { investment, processes } = review;
		this.investmentReview = review;
		this._parseInvestment(investment.data);

		const defaultProcessId = this.authStore.user?.default_process_id;

		if (processes.data.length === 0) {
			if (defaultProcessId && this.investmentReview?.isOwner) {
				const process = await this._fetchProcessById(defaultProcessId);
				this._setInvestmentProcessStore(process, defaultProcessId);
			}
		}
		const investmentProcesses: InvestmentProcessDTO[] = processes.data || [];
		this._setInvestmentProcesses(investmentProcesses, defaultProcessId);
	}

	async _getCompanyFinansials(id: string) {
		const userRoles = this.authStore.authUserRoles;
		if (userRoles.includes("free")) {
			return [[], []];
		}

		return Promise.all([
			this._getHistoricalFinancials(id),
			this._getEstimationFinancials(id),
		]);
	}

	async _fetchProcessById(id: string) {
		return ProcessAPI.getProcessDetails(id);
	}

	_setInvestmentProcesses(
		investmentProcesses: InvestmentProcessDTO[],
		defaultProcessId: string | null | undefined,
		isProcessAttach?: boolean
	) {
		if (investmentProcesses.length === 0) {
			return;
		}

		investmentProcesses.sort((a, b) => {
			let result;
			switch (true) {
				case a.process_id === defaultProcessId:
					result = -1;
					break;
				case b.process_id === defaultProcessId:
					result = 1;
					break;
				default:
					result = 0;
			}
			return result;
		});
		investmentProcesses.forEach((process) => {
			this.processes.push(new InvestmentProcessStore(process, this.investment));
		});
		const processesNumber = investmentProcesses.length;
		const hasProcesses = Boolean(processesNumber);
		const defaultProcess = investmentProcesses.find(
			(process) => process.is_default
		);
		const firstProcess = investmentProcesses[0];
		const currentActiveProcessId =
			processesNumber > 1 ? this.activeProcessId : defaultProcess?.id;
		const fallbackProcessId = hasProcesses ? firstProcess?.id : null;
		this.activeProcessId = currentActiveProcessId
			? currentActiveProcessId
			: fallbackProcessId;
		if (!isProcessAttach) {
			this.isActiveInvestment = true;
		}
	}

	_parseInvestment(investment: InvestmentDTO | null) {
		const isNewInvestment = this.investment?.id !== investment?.id;
		this.investment = investment;

		const yearEnd = new Date(this.investment?.meta.year_end ?? "");

		if (isValid(yearEnd) && this.investment) {
			runInAction(() => {
				if (this.investment && this.investment.meta) {
					this.investment.meta.yearEndFormatted = format(yearEnd, "MMM-yy");
				}
			});
		}

		/**
		 * Format issue shares to the ${xxxx.x}m format;
		 */
		const issuedShares = Number(this.investment?.meta.issued_shares);
		if (!isNaN(issuedShares) && this.investment) {
			this.investment.meta.issuedSharesFormatted =
				Intl.NumberFormat("us-EN", {
					maximumFractionDigits: 1,
				}).format(issuedShares) + "m";
		} else if (this.investment) {
			this.investment.meta.issuedSharesFormatted = "-";
		}

		const lastPrice = Number(this.investment?.meta.last_price);
		if (!isNaN(lastPrice) && this.investment) {
			this.investment.meta.lastPriceFormatted = Intl.NumberFormat("us-EN", {
				style: "currency",
				currency: "USD",
				currencyDisplay: "narrowSymbol",
			}).format(lastPrice);
		} else if (this.investment) {
			this.investment.meta.lastPriceFormatted = "-";
		}

		if (isNewInvestment) {
			this.activeProcessId = null;
		}
		this.processes = [];
	}

	_setInvestmentProcessStore(process: any, defaultProcessId: string) {
		const defaultProcessDTO = prepareProcess(process);

		const defaultProcess = new InvestmentProcessStore(
			defaultProcessDTO,
			this.investment
		);

		runInAction(() => {
			this.activeProcessId = defaultProcessId;
			this.processes.push(defaultProcess);
			this.isActiveInvestment = false;
		});
	}
	async _getHistoricalFinancials(id: string) {
		return investmentReviewAPI.getHistoricalFinancials(id);
	}

	async _getEstimationFinancials(id: string) {
		return investmentReviewAPI.getEstimationFinancials(id);
	}

	_setActiveProcess(processId: string) {
		this.activeProcessId = processId;
	}

	set investmentReview(payload: InvestmentReview | undefined) {
		this._review = payload;
	}

	get investmentReview() {
		return this._review;
	}

	get summary() {
		return this.investmentReview?.summary || "";
	}

	get activeProcess() {
		let activeProcess = this.processes.find(
			(process) => process.id === this.activeProcessId
		);
		if (!activeProcess && this.processes.length && this.processes[0]) {
			activeProcess = this.processes[0];
			this._setActiveProcess(this.processes[0].id);
		}

		return activeProcess;
	}

	get showSharedButton() {
		if (this.investmentReview?.id) {
			if (this.investmentReview?.isOwner) return true;
		}

		return false;
	}

	get canUserChangeReview() {
		if (!this.investmentReview?.id) return true;
		if (this.investmentReview.isOwner) return true;
		return false;
	}
}
