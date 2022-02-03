enum ProcessItemTypes {
	Qualitative7pt = "Qualitative 7pt",
	Qualitative5pt = "Qualitative 5pt",
	Qualitative3pt = "Qualitative 3pt",
	Flags = "Flags",
	TickCross = "Tick/Cross",
	Valuation = "Valuation",
	QuantitativeNum = "Quantitative Num",
	QuantitativeNumMillion = "Quantitative Num M",
	QuantitativePercent = "Quantitative %",
	QuantitativeDollar = "Quantitative $",
	QuantitativeDollarMillion = "Quantitative M$",
}

type Media = {
	data: {
		id?: string;
		url?: string;
		file_name?: string;
	};
};

export enum ScoreValues {
	excellent = "excellent",
	vGood = "v_good",
	good = "good",
	average = "average",
	belowAve = "below_ave",
	poor = "poor",
	vPoor = "v_poor",
	notAssigned = "n_a",
}

export const ScoreValueMapper = {
	[ScoreValues.excellent]: "Excellent",
	[ScoreValues.vGood]: "V. Good",
	[ScoreValues.good]: "Good",
	[ScoreValues.average]: "Average",
	[ScoreValues.belowAve]: "Below Ave.",
	[ScoreValues.poor]: "Poor",
	[ScoreValues.vPoor]: "V. Poor",
	[ScoreValues.notAssigned]: "n/a",
};

export type ScoreFactor = Record<ScoreValues, string | number> & {
	min?: number;
	max?: number;
};

export type InvestmentProcessItemDTO = {
	id: string;
	factor_id?: string;
	checklist_id?: string;
	question_id?: string;
	name: string;
	object: string;
	description: string;
	group: string;
	type: ProcessItemTypes;
	score_factor: ScoreFactor | null;
	relevance: Relevance | null;
	score: ScoreValues | null;
	valuation: number | null;
	upside: number;
	comment: string;
	position: number;
	updated_at: string;
	is_active: boolean;
	media: Media | null;
	checklists?: { data: InvestmentProcessItemDTO[] };
	questions?: { data: InvestmentProcessItemDTO[] };
	user: {
		data: {
			username: string;
		};
	};
};

export enum Relevance {
	high = "high",
	moderate = "moderate",
	low = "low",
	notAssigned = "n_a",
}

export const RelevanceValueMapper = {
	[Relevance.high]: "High",
	[Relevance.moderate]: "Moderate",
	[Relevance.low]: "Low",
	[Relevance.notAssigned]: "n/a",
};

export type InvestmentProcessItem = {
	id: string;
	name: string;
	description: string;
	group: string;
	type: ProcessItemTypes;
	scoreFactor: ScoreFactor;
	relevance: Relevance;
	score: ScoreValues | null;
	valuation: number | null;
	comment: string;
	updatedAt: string;
	authorName: string;
};
