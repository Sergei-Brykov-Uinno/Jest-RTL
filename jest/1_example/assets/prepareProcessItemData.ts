import { Relevance, ScoreFactor } from "./InvestmentProcessItem";

export const prepareProcess = (process: any) => {
	return {
		...process,
		process_id: process.id,
		comment: "",
		score: null,
		relevance: null,
		valuation: null,
		is_default: false,
		factors: {
			data: prepareProcessFactor(process.factors?.data),
		},
	};
};

export const prepareProcessFactor = (factors: any) => {
	return (
		factors?.map((factor: any) => ({
			...factor,
			...processItemNullObject(factor.score as ScoreFactor),
			checklists: {
				data: factor.checklists?.data.map((checklist: any) => ({
					...checklist,
					...processItemNullObject(checklist.score as ScoreFactor),
					questions: {
						data: checklist.questions?.data.map((question: any) => ({
							...question,
							...processItemNullObject(question.score as ScoreFactor),
						})),
					},
				})),
			},
		})) ?? []
	);
};

export const processItemNullObject = (score: ScoreFactor) => {
	return {
		relevance: Relevance.notAssigned,
		valuation: null,
		upside: 0,
		comment: "",
		score: null,
		score_factor: score,
		position: 0,
	};
};
