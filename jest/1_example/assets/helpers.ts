import { format, isValid, parse, parseISO } from "date-fns";
import { makeAutoObservable } from "mobx";
import { InvestmentNote } from "./Investment";
import { Relevance, ScoreValues } from "./InvestmentProcessItem";
import { ProcessItemTypes } from "./ProcessItem";

export type NoteTransferType = {
	title: string;
	file?: File;
	fileId?: string | undefined;
	fileUuid?: string | undefined;
	text?: string;
	fileUrl?: string;
};

export const getInvestmentValuesFromType: (
	type: ProcessItemTypes
) => Record<ScoreValues, number> = (type: ProcessItemTypes) => {
	switch (type) {
		case ProcessItemTypes.Qualitative5pt:
			return {
				[ScoreValues.excellent]: 2,
				[ScoreValues.good]: 1,
				[ScoreValues.average]: 0,
				[ScoreValues.poor]: -1,
				[ScoreValues.vPoor]: -2,
				[ScoreValues.notAssigned]: 0,
			} as Record<ScoreValues, number>;
		case ProcessItemTypes.Qualitative3pt:
		case ProcessItemTypes.Flags:
		case ProcessItemTypes.TickCross:
			return {
				[ScoreValues.good]: 1,
				[ScoreValues.average]: 0,
				[ScoreValues.poor]: -1,
				[ScoreValues.notAssigned]: 0,
			} as Record<ScoreValues, number>;
		case ProcessItemTypes.Qualitative7pt:
		case ProcessItemTypes.QuantitativeDollar:
		case ProcessItemTypes.QuantitativeDollarMillion:
		case ProcessItemTypes.QuantitativePercent:
		case ProcessItemTypes.QuantitativeNum:
		case ProcessItemTypes.QuantitativeNumMillion:
		default:
			return {
				[ScoreValues.excellent]: 3,
				[ScoreValues.vGood]: 2,
				[ScoreValues.good]: 1,
				[ScoreValues.average]: 0,
				[ScoreValues.belowAve]: -1,
				[ScoreValues.poor]: -2,
				[ScoreValues.vPoor]: -3,
				[ScoreValues.notAssigned]: 0,
			};
	}
};
export const RelevanceValues = {
	[Relevance.high]: 3,
	[Relevance.moderate]: 2,
	[Relevance.low]: 1,
	[Relevance.notAssigned]: 0,
};

export interface Note {
	id: string;
	createdAt: string;
	text?: string;
	fileUrl?: string;
	fileName?: string;
	content: string;
	fileId: string;
	fileUuid?: string;
	formattedDate: string;
	title: string;
}
export class NoteModel implements Note {
	id: string;
	createdAt: string;
	text?: string;
	fileUrl?: string;
	fileName?: string;
	title: string;
	fileId: string;
	fileUuid?: string;
	constructor(note: InvestmentNote) {
		const parsedNote = {
			id: note.id,
			title: note.title,
			updated_at: note.updated_at,
			text: note.typed_text,
			fileUrl: note.media.data.url,
			fileName: note.media.data.file_name,
			fileId: note.media.data.id,
		};
		this.id = parsedNote.id ?? (Math.random() * 10000).toString();
		this.createdAt = parsedNote.updated_at;
		this.text = parsedNote.text;
		this.fileUrl = parsedNote.fileUrl;
		this.fileName = parsedNote.fileName;
		this.fileId = parsedNote.fileId;
		this.title = parsedNote.title;
		makeAutoObservable(this);
	}

	get formattedDate(): string {
		const isValidDate = isValid(parseISO(this.createdAt));
		return isValidDate ? format(parseISO(this.createdAt), "dd MMM yy") : "";
	}
	get content(): string {
		return this.text ?? this.fileUrl ?? "";
	}
}

export type CompanyFinancialSubItem = number;
export type CompanyFinancialData = {
	sales: CompanyFinancialSubItem;
	gross_profit: CompanyFinancialSubItem;
	ebitda: CompanyFinancialSubItem;
	ebit: CompanyFinancialSubItem;
	pre_tax_income: CompanyFinancialSubItem;
	npat: CompanyFinancialSubItem;
	eps: CompanyFinancialSubItem;
	dps: CompanyFinancialSubItem;
	net_debt: CompanyFinancialSubItem;
	shareholders_equity: CompanyFinancialSubItem;
} & CompanyFinancial;

export type CompanyFinancial = {
	object: string;
	fy_date_at: string;
	currency: string;
};
const parseFinancialDate = (date: string) => {
	return format(parse(date, "yyyy-MM-dd", new Date()), "MMM yy");
};
const formatAccessor = (date: string) => {
	return date.toLowerCase().replace(" ", "_");
};
export type HeaderType = { Header: string; accessor: string };
export const ESTIMATION_SUFFIX = "-e";
function generateDefaultHeaders(count: number, accessorPrefix: string) {
	return new Array(count)
		.fill(1)
		.map((_, index) => ({
			Header: "--",
			accessor: `${accessorPrefix}-default-${index}`,
		}));
}
export const prepareHeaders = (
	financials: CompanyFinancial[],
	suffix = ""
): HeaderType[] => {
	const dates = financials.map((f) => f.fy_date_at);

	let headers = dates.map((d) => {
		const preparedDate = parseFinancialDate(d);

		return {
			Header: preparedDate,
			accessor: formatAccessor(preparedDate) + suffix,
		};
	});

	/**
	 * This part is needed to keep table formatting even if there are no data
	 */
	if (suffix && headers.length === 0) {
		headers = generateDefaultHeaders(3, "estimation");
	} else if (!suffix && headers.length === 0) {
		headers = generateDefaultHeaders(10, "historical");
	}

	return headers;
};
const getRowAccessors = (financials: CompanyFinancial[]): string[] => {
	const dates = financials.map((f) => f.fy_date_at);
	const accessors = dates.map((d) => {
		const preparedDate = parseFinancialDate(d);

		return formatAccessor(preparedDate);
	});

	return accessors;
};
const rows: Record<
	keyof Omit<CompanyFinancialData, "object" | "fy_date_at" | "currency">,
	string
> = {
	sales: "Sales",
	gross_profit: "Gross Profit",
	ebitda: "EBITDA",
	ebit: "EBIT",
	pre_tax_income: "Pre-Tax Income",
	npat: "NPAT",
	eps: "EPS",
	dps: "DPS",
	net_debt: "Net Debt",
	shareholders_equity: "Shareholders Equity",
};
function getMaximumFractionDigits(key: keyof typeof rows) {
	if (["eps", "dps"].includes(key)) {
		return 2;
	}

	return 1;
}
const getFinancialValueObject = (
	key: keyof typeof rows,
	accessor: string,
	financialValue?: CompanyFinancialData,
	suffix = ""
) => {
	if (!financialValue) {
		return {};
	}

	const mean = financialValue[key];

	return {
		[accessor + suffix]: mean
			? Intl.NumberFormat("us-EN", {
					maximumFractionDigits: getMaximumFractionDigits(key),
					minimumFractionDigits: getMaximumFractionDigits(key),
			  }).format(mean)
			: "--",
	};
};
export const prepareHistoricalRows = (
	historical: CompanyFinancialData[],
	estimation: CompanyFinancialData[]
) => {
	const rowAccessors = [
		...getRowAccessors(historical),
		...getRowAccessors(estimation),
	];
	return Object.keys(rows).map((row) => {
		const typedRow = row as keyof typeof rows;
		const rowName = rows[typedRow];

		const historicalValues = rowAccessors.reduce((acc, accessor) => {
			const historicalValue = historical.find((h) => {
				return formatAccessor(parseFinancialDate(h.fy_date_at)) === accessor;
			});
			const estimationValue = estimation.find((e) => {
				return formatAccessor(parseFinancialDate(e.fy_date_at)) === accessor;
			});

			const historicalValueObject = getFinancialValueObject(
				typedRow,
				accessor,
				historicalValue
			);
			const estimationValueObject = getFinancialValueObject(
				typedRow,
				accessor,
				estimationValue,
				ESTIMATION_SUFFIX
			);

			return { ...acc, ...historicalValueObject, ...estimationValueObject };
		}, {});

		return { row: rowName, ...historicalValues };
	});
};
export function currencyReducer(
	currency: string[],
	h: CompanyFinancialData
): string[] {
	if (currency.includes(h.currency) || !h.currency) {
		return currency;
	}

	return [...currency, h.currency];
}
