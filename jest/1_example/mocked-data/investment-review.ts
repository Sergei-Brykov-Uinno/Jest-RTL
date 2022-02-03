export const MOCKED_INVESTMENT_REVIEW_ID = "433om7kanqp08zeynlbxdg596vj4ry8g";
export const MOCKED_SUMMARY = "MOCKED_SUMMARY";

export const MOCKED_INVESTMENT_DATA = {
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
};

export const MOCKED_FIRST_PROCESS = {
	object: "InvestmentProcess",
	id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
	process_id: "z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
	name: "First Process",
	description: "Generic Process for all new users to start with.",
	is_active: true,
	is_default: true,
	score: -3,
	relevance: "0.0",
	valuation: null,
	comment: null,
	position: 1,
	updated_at: "2021-11-12 07:45:23",
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
	media: {
		data: [],
	},
};

export const MOCKED_PROCESSES_DATA = [
	MOCKED_FIRST_PROCESS,
	{
		object: "InvestmentProcess",
		id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
		process_id: "z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
		name: "Generic Process",
		description: "Generic Process for all new users to start with.",
		is_active: true,
		is_default: true,
		score: -3,
		relevance: "0.0",
		valuation: null,
		comment: null,
		position: 1,
		updated_at: "2021-11-12 07:45:23",
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
		factors: {
			data: [
				{
					object: "InvestmentFactor",
					id: "7yj4qknp96a3owdk8xe08gz7dvb5rxma",
					investment_process_id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
					factor_id: "roxbo7mk3r05g9wp76wzqya6jdvn4p87",
					name: "f1",
					description: null,
					group: "Governance",
					type: "Valuation",
					score_factor: {
						max: 200,
						min: -66,
						good: 50,
						poor: -33,
						v_good: 100,
						v_poor: -50,
						average: 25,
						below_ave: -20,
						excellent: 200,
					},
					score: "v_poor",
					relevance: "high",
					valuation: 0,
					upside: -100,
					comment: null,
					position: 0,
					updated_at: "2021-11-25 16:54:04",
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
					checklists: {
						data: [
							{
								object: "InvestmentChecklist",
								id: "vgzr07qo5xdjbeqby6empn36kya984vk",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "3o5m0go348bjdyev8l6qpakzvn7xr97j",
								name: "cl 1",
								description:
									"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
								group: "Financial",
								type: "Qualitative 7pt",
								score_factor: {
									good: null,
									poor: null,
									v_good: null,
									v_poor: null,
									average: null,
									below_ave: null,
									excellent: null,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: null,
								upside: null,
								comment: null,
								position: 1,
								updated_at: "2021-11-22 10:37:18",
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
								questions: {
									data: [
										{
											object: "InvestmentQuestion",
											id: "d69mx74a8og0qwjm0d6wkjb3z5ydrpnv",
											investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
											question_id: "mpb5ax8dgm3o4nl83w0j67p9qkyrzvk9",
											name: "q 1",
											description: "лллллл",
											group: "Operational",
											type: "Valuation",
											score_factor: {
												max: 200,
												min: -66,
												good: 50,
												poor: -33,
												v_good: 100,
												v_poor: -50,
												average: 25,
												below_ave: -20,
												excellent: 200,
											},
											score: "v_poor",
											relevance: "high",
											valuation: 4,
											upside: -89,
											comment: "cfvv",
											position: 1,
											updated_at: "2021-11-25 16:55:45",
											user: {
												data: {
													object: "User",
													id: "598omjnx94kgy6err7e7vq3ab50drpzr",
													username: "sergbrikov+2@gmail.com",
													avatar:
														"https://www.gravatar.com/avatar/669520760d37b872a49b7c785962311c.jpg?s=150&d=mm",
													default_process_id:
														"z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
												},
											},
											media: {
												data: [],
											},
										},
										{
											object: "InvestmentQuestion",
											id: "pb5ax8dgm3o4nl80zj3w0j67p9qkyrzv",
											investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
											question_id: "q880a3zkgnxpd7e95w45orvqbm69yjr6",
											name: "лрлоплп",
											description: null,
											group: "Financial",
											type: "Valuation",
											score_factor: {
												max: 200,
												min: -66,
												good: 50,
												poor: -33,
												v_good: 100,
												v_poor: -50,
												average: 25,
												below_ave: -20,
												excellent: 200,
											},
											score: "n_a",
											relevance: "n_a",
											valuation: 0,
											upside: null,
											comment: null,
											position: 2,
											updated_at: "2021-11-25 16:55:45",
											user: {
												data: {
													object: "User",
													id: "598omjnx94kgy6err7e7vq3ab50drpzr",
													username: "sergbrikov+2@gmail.com",
													avatar:
														"https://www.gravatar.com/avatar/669520760d37b872a49b7c785962311c.jpg?s=150&d=mm",
													default_process_id:
														"z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
												},
											},
											media: {
												data: [],
											},
										},
									],
								},
								media: {
									data: [],
								},
							},
						],
					},
					media: {
						data: [],
					},
				},
				{
					object: "InvestmentFactor",
					id: "6d4q3on8gpbxyl0kzdeav70rk5mz96jx",
					investment_process_id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
					factor_id: "5n6y48kxrq3pb5w5o3ej0g7dnmva9ozk",
					name: "Current Valuation",
					description:
						"What is the approximate value of the business in its current state.",
					group: "Valuation",
					type: "Valuation",
					score_factor: {
						max: 200,
						min: -66,
						good: 42,
						poor: -33,
						v_good: 100,
						v_poor: -50,
						average: 25,
						below_ave: -20,
						excellent: 200,
					},
					score: "v_poor",
					relevance: "n_a",
					valuation: 0,
					upside: -100,
					comment: null,
					position: 1,
					updated_at: "2021-11-25 16:53:52",
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
					checklists: {
						data: [
							{
								object: "InvestmentChecklist",
								id: "pb5ax8dgm3o4nl8qvxpl0j67p9qkyrzv",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "97b57dp6nxm3yala3ezj48k9qgvo0rop",
								name: "cl 2",
								description: null,
								group: "Operational",
								type: "Valuation",
								score_factor: {
									max: 200,
									min: -66,
									good: 50,
									poor: -33,
									v_good: 100,
									v_poor: -50,
									average: 25,
									below_ave: -20,
									excellent: 200,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: 0,
								upside: null,
								comment: null,
								position: 1,
								updated_at: "2021-11-25 16:54:34",
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
								questions: {
									data: [],
								},
								media: {
									data: [],
								},
							},
							{
								object: "InvestmentChecklist",
								id: "880a3zkgnxpd7e9paxpl45orvqbm69yj",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "yroy06mg43bd8nlznljvx5qra7kz9p75",
								name: "лопар",
								description: null,
								group: "Operational",
								type: "Valuation",
								score_factor: {
									max: 200,
									min: -66,
									good: 50,
									poor: -33,
									v_good: 100,
									v_poor: -50,
									average: 25,
									below_ave: -20,
									excellent: 200,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: 0,
								upside: null,
								comment: null,
								position: 2,
								updated_at: "2021-11-25 16:54:34",
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
								questions: {
									data: [],
								},
								media: {
									data: [],
								},
							},
						],
					},
					media: {
						data: [],
					},
				},
				{
					object: "InvestmentFactor",
					id: "880a3zkgnxpd7e9bqvw45orvqbm69yjr",
					investment_process_id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
					factor_id: "6vgzr07qo5xdjbeqddwmpn36kya984vk",
					name: "Management",
					description: "Are management good?",
					group: "Governance",
					type: "Qualitative 7pt",
					score_factor: {
						good: "Solid, honest management.",
						poor: "Management prioritise self interest over shareholders.",
						v_good: "Expect management to prioritise shareholder returns.",
						v_poor: "Fraudulent",
						average: "Fair management and/or No opinion.",
						below_ave: "Management with poor track record relative to peers.",
						excellent:
							"Expect management to add significant shareholder value above industry.",
					},
					score: "n_a",
					relevance: "n_a",
					valuation: null,
					upside: null,
					comment: null,
					position: 2,
					updated_at: "2021-11-22 10:36:47",
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
					checklists: {
						data: [
							{
								object: "InvestmentChecklist",
								id: "33om7kanqp08zeyx8awbxdg596vj4ry8",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "97b57dp6nxm3yala3ezj48k9qgvo0rop",
								name: "cl 2",
								description: null,
								group: "Operational",
								type: "Valuation",
								score_factor: {
									max: 200,
									min: -66,
									good: 50,
									poor: -33,
									v_good: 100,
									v_poor: -50,
									average: 25,
									below_ave: -20,
									excellent: 200,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: 0,
								upside: null,
								comment: null,
								position: 1,
								updated_at: "2021-11-25 16:54:14",
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
								questions: {
									data: [
										{
											object: "InvestmentQuestion",
											id: "880a3zkgnxpd7e98q3w45orvqbm69yjr",
											investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
											question_id: "mpb5ax8dgm3o4nl83w0j67p9qkyrzvk9",
											name: "q 1",
											description: "лллллл",
											group: "Operational",
											type: "Valuation",
											score_factor: {
												max: 200,
												min: -66,
												good: 50,
												poor: -33,
												v_good: 100,
												v_poor: -50,
												average: 25,
												below_ave: -20,
												excellent: 200,
											},
											score: "v_poor",
											relevance: "high",
											valuation: 4,
											upside: -89,
											comment: "cfvv",
											position: 1,
											updated_at: "2021-11-25 16:55:06",
											user: {
												data: {
													object: "User",
													id: "598omjnx94kgy6err7e7vq3ab50drpzr",
													username: "sergbrikov+2@gmail.com",
													avatar:
														"https://www.gravatar.com/avatar/669520760d37b872a49b7c785962311c.jpg?s=150&d=mm",
													default_process_id:
														"z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
												},
											},
											media: {
												data: [],
											},
										},
									],
								},
								media: {
									data: [],
								},
							},
							{
								object: "InvestmentChecklist",
								id: "vgzr07qo5xdjbeqmzrwmpn36kya984vk",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "3o5m0go348bjdyev8l6qpakzvn7xr97j",
								name: "cl 1",
								description:
									"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
								group: "Financial",
								type: "Qualitative 7pt",
								score_factor: {
									good: null,
									poor: null,
									v_good: null,
									v_poor: null,
									average: null,
									below_ave: null,
									excellent: null,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: null,
								upside: null,
								comment: null,
								position: 2,
								updated_at: "2021-11-22 10:37:01",
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
								questions: {
									data: [
										{
											object: "InvestmentQuestion",
											id: "pb5ax8dgm3o4nl8j38e0j67p9qkyrzvk",
											investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
											question_id: "mpb5ax8dgm3o4nl83w0j67p9qkyrzvk9",
											name: "q 1",
											description: "лллллл",
											group: "Operational",
											type: "Valuation",
											score_factor: {
												max: 200,
												min: -66,
												good: 50,
												poor: -33,
												v_good: 100,
												v_poor: -50,
												average: 25,
												below_ave: -20,
												excellent: 200,
											},
											score: "v_poor",
											relevance: "high",
											valuation: 4,
											upside: -89,
											comment: "cfvv",
											position: 1,
											updated_at: "2021-11-25 16:55:06",
											user: {
												data: {
													object: "User",
													id: "598omjnx94kgy6err7e7vq3ab50drpzr",
													username: "sergbrikov+2@gmail.com",
													avatar:
														"https://www.gravatar.com/avatar/669520760d37b872a49b7c785962311c.jpg?s=150&d=mm",
													default_process_id:
														"z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
												},
											},
											media: {
												data: [],
											},
										},
										{
											object: "InvestmentQuestion",
											id: "7b57dp6nxm3yalaqxgwzj48k9qgvo0ro",
											investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
											question_id: "q880a3zkgnxpd7e95w45orvqbm69yjr6",
											name: "лрлоплп",
											description: null,
											group: "Financial",
											type: "Valuation",
											score_factor: {
												max: 200,
												min: -66,
												good: 50,
												poor: -33,
												v_good: 100,
												v_poor: -50,
												average: 25,
												below_ave: -20,
												excellent: 200,
											},
											score: "n_a",
											relevance: "n_a",
											valuation: 0,
											upside: null,
											comment: null,
											position: 2,
											updated_at: "2021-11-25 16:55:06",
											user: {
												data: {
													object: "User",
													id: "598omjnx94kgy6err7e7vq3ab50drpzr",
													username: "sergbrikov+2@gmail.com",
													avatar:
														"https://www.gravatar.com/avatar/669520760d37b872a49b7c785962311c.jpg?s=150&d=mm",
													default_process_id:
														"z4d39jxo4yzgapwbqgw706rqk5nbmv8j",
												},
											},
											media: {
												data: [],
											},
										},
									],
								},
								media: {
									data: [],
								},
							},
						],
					},
					media: {
						data: [],
					},
				},
				{
					object: "InvestmentFactor",
					id: "qp0xyqakr4ovml74v6ldb57g96zj3n8y",
					investment_process_id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
					factor_id: "6m53zby0xmg497wk46lqda8jo6vrknpr",
					name: "f3",
					description: null,
					group: "Financial",
					type: "Valuation",
					score_factor: {
						max: 200,
						min: -66,
						good: 50,
						poor: -33,
						v_good: 100,
						v_poor: -50,
						average: 25,
						below_ave: -20,
						excellent: 200,
					},
					score: "v_poor",
					relevance: "n_a",
					valuation: 0,
					upside: -100,
					comment: null,
					position: 3,
					updated_at: "2021-11-25 16:54:04",
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
					checklists: {
						data: [],
					},
					media: {
						data: [],
					},
				},
				{
					object: "InvestmentFactor",
					id: "bpr3ob7jq4dx0wg36ql6nv8ag5mk9yzr",
					investment_process_id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
					factor_id: "433om7kanqp08zeyv0ebxdg596vj4ry8",
					name: "Business Qlty",
					description: "How established/strong is the company franchise/moat?",
					group: "Operational",
					type: "Qualitative 7pt",
					score_factor: {
						good: "Solid profitable business with low risk.",
						poor: "Early stage revenue or business in structural decline.",
						v_good:
							"Significant barriers to entery underpin sustained excess returns.",
						v_poor: "Start up/loss making operation.   Pre-revenue.",
						average: "Cyclical business with fair profits through the cycle.",
						below_ave: "Expect consistent returns below cost of capital.",
						excellent: "Well established Monopoly.",
					},
					score: "n_a",
					relevance: "n_a",
					valuation: null,
					upside: null,
					comment: null,
					position: 4,
					updated_at: "2021-11-22 10:36:47",
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
					checklists: {
						data: [
							{
								object: "InvestmentChecklist",
								id: "rrp98d0xyojvkwox5y9wbn5qz3ga67m4",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "3o5m0go348bjdyev8l6qpakzvn7xr97j",
								name: "cl 1",
								description:
									"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
								group: "Financial",
								type: "Qualitative 7pt",
								score_factor: {
									good: null,
									poor: null,
									v_good: null,
									v_poor: null,
									average: null,
									below_ave: null,
									excellent: null,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: null,
								upside: null,
								comment: null,
								position: 1,
								updated_at: "2021-11-22 10:37:33",
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
								questions: {
									data: [],
								},
								media: {
									data: [],
								},
							},
							{
								object: "InvestmentChecklist",
								id: "m53zby0xmg497wknaxbwqda8jo6vrknp",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "97b57dp6nxm3yala3ezj48k9qgvo0rop",
								name: "cl 2",
								description: null,
								group: "Operational",
								type: "Valuation",
								score_factor: {
									max: 200,
									min: -66,
									good: 50,
									poor: -33,
									v_good: 100,
									v_poor: -50,
									average: 25,
									below_ave: -20,
									excellent: 200,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: 0,
								upside: null,
								comment: null,
								position: 2,
								updated_at: "2021-11-25 16:54:34",
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
								questions: {
									data: [],
								},
								media: {
									data: [],
								},
							},
							{
								object: "InvestmentChecklist",
								id: "vgzr07qo5xdjbeqk8jyempn36kya984v",
								investment_review_id: "jr8grz3o7mxaq6l6grw5vbkjp40ynd9v",
								checklist_id: "b7yj4qknp96a3owd9l08gz7dvb5rxmam",
								name: "лллл",
								description: null,
								group: "Financial",
								type: "Valuation",
								score_factor: {
									max: 200,
									min: -66,
									good: 50,
									poor: -33,
									v_good: 100,
									v_poor: -50,
									average: 25,
									below_ave: -20,
									excellent: 200,
								},
								score: "n_a",
								relevance: "n_a",
								valuation: 0,
								upside: null,
								comment: null,
								position: 3,
								updated_at: "2021-11-25 16:54:34",
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
								questions: {
									data: [],
								},
								media: {
									data: [],
								},
							},
						],
					},
					media: {
						data: [],
					},
				},
				{
					object: "InvestmentFactor",
					id: "roy06mg43bd8nlzxb0wjvx5qra7kz9p7",
					investment_process_id: "qp0xyqakr4ovml73pyedb57g96zj3n8y",
					factor_id: "4rrp98d0xyojvkwo7bebn5qz3ga67m4p",
					name: "f2",
					description: null,
					group: "Operational",
					type: "Valuation",
					score_factor: {
						max: 200,
						min: -66,
						good: 50,
						poor: -33,
						v_good: 100,
						v_poor: -50,
						average: 25,
						below_ave: -20,
						excellent: 200,
					},
					score: "v_poor",
					relevance: "n_a",
					valuation: 0,
					upside: -100,
					comment: null,
					position: 5,
					updated_at: "2021-11-25 16:54:04",
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
					checklists: {
						data: [],
					},
					media: {
						data: [],
					},
				},
			],
		},
		media: {
			data: [],
		},
	},
];

export const MOCKED_IS_OWNER = true;
export const MOCKED_HISTORICAL = [
	{
		object: "Historical",
		fy_date_at: "2011-06-30",
		currency: "USD",
		sales: 71739.24366589595,
		gross_profit: 36799.12499005146,
		ebitda: 37699.1280537098,
		ebit: 32256.109559474535,
		pre_tax_income: 31255.10615951683,
		npat: 23648.08032187669,
		eps: 4.290967525681724,
		dps: 0.9655933907762683,
		net_debt: 5558.998034385422,
		shareholders_equity: 56761.97992944492,
	},
	{
		object: "Historical",
		fy_date_at: "2012-06-30",
		currency: "USD",
		sales: 72226.03601033166,
		gross_profit: 30413.015163268214,
		ebitda: 35841.017865409856,
		ebit: 28964.014440828036,
		pre_tax_income: 23022.011478274562,
		npat: 15417.007686584908,
		eps: 2.895976029604181,
		dps: 1.1008884760012496,
		net_debt: 23267.0039998159,
		shareholders_equity: 65870.01132367189,
	},
	{
		object: "Historical",
		fy_date_at: "2013-06-30",
		currency: "USD",
		sales: 65967.96786423882,
		gross_profit: 25081.98778151287,
		ebitda: 28331.986199056955,
		ebit: 20932.989802663542,
		pre_tax_income: 17871.991293804247,
		npat: 10875.994701847307,
		eps: 2.043979990068902,
		dps: 1.2305738286844579,
		net_debt: 29067.95442155509,
		shareholders_equity: 70663.88919928347,
	},
	{
		object: "Historical",
		fy_date_at: "2014-06-30",
		currency: "USD",
		sales: 67206.17908257789,
		gross_profit: 27036.07204232618,
		ebitda: 30171.08039730479,
		ebit: 21005.05597163273,
		pre_tax_income: 21041.056067561276,
		npat: 13832.036857873116,
		eps: 2.6000146877926085,
		dps: 1.2018561697908825,
		net_debt: 25786.009373330093,
		shareholders_equity: 79143.02876884614,
	},
	{
		object: "Historical",
		fy_date_at: "2015-06-30",
		currency: "USD",
		sales: 44636.00985511189,
		gross_profit: 14496.00320054896,
		ebitda: 20463.00451429666,
		ebit: 10863.002398424576,
		pre_tax_income: 7508.0016576794515,
		npat: 4064.000897284134,
		eps: 0.7641821377110349,
		dps: 1.4043066556724386,
		net_debt: 24416.94135064524,
		shareholders_equity: 64767.844428004726,
	},
	{
		object: "Historical",
		fy_date_at: "2016-06-30",
		currency: "USD",
		sales: 30912.08250062109,
		gross_profit: 6138.0163816256,
		ebitda: 11397.030417697568,
		ebit: 3041.008116084005,
		pre_tax_income: -5155.0137581101735,
		npat: -6385.017040840634,
		eps: -1.1999708921554357,
		dps: 0.29026691893465284,
		net_debt: 26066.057345452347,
		shareholders_equity: 54290.11943852554,
	},
	{
		object: "Historical",
		fy_date_at: "2017-06-30",
		currency: "USD",
		sales: 38285.06787786914,
		gross_profit: 14256.025275353284,
		ebitda: 19054.033778535282,
		ebit: 10793.019135584205,
		pre_tax_income: 10050.017818273065,
		npat: 5890.010442749101,
		eps: 1.1070219232422567,
		dps: 0.8003563375289406,
		net_debt: 16289.949745603819,
		shareholders_equity: 57257.823359962415,
	},
	{
		object: "Historical",
		fy_date_at: "2018-06-30",
		currency: "USD",
		sales: 43637.975935659044,
		gross_profit: 19156.989435799518,
		ebitda: 22186.98776528565,
		ebit: 15546.99142654778,
		pre_tax_income: 14603.991946568702,
		npat: 3704.9979568636672,
		eps: 0.6960382460735013,
		dps: 1.2330059895086745,
		net_debt: 10916.03785139473,
		shareholders_equity: 55592.19276609894,
	},
	{
		object: "Historical",
		fy_date_at: "2019-06-30",
		currency: "USD",
		sales: 44288.06442462068,
		gross_profit: 20369.02963026325,
		ebitda: 22269.03239648144,
		ebit: 16177.023532268038,
		pre_tax_income: 14650.02131098026,
		npat: 8816.012824409712,
		eps: 1.7019237645712648,
		dps: 1.371545662590288,
		net_debt: 9199.992939041902,
		shareholders_equity: 47239.96374351527,
	},
	{
		object: "Historical",
		fy_date_at: "2020-06-30",
		currency: "USD",
		sales: 42930.908850705026,
		gross_profit: 20427.956628128857,
		ebitda: 22014.953261692954,
		ebit: 15948.966137753516,
		pre_tax_income: 13513.971307643174,
		npat: 7955.9831081551365,
		eps: 1.5732280403027397,
		dps: 1.1722099469736074,
		net_debt: 13586.02642483858,
		shareholders_equity: 47936.093235761924,
	},
	{
		object: "Historical",
		fy_date_at: "2021-06-30",
		currency: "USD",
		sales: 60817.09619762841,
		gross_profit: 34738.05494702494,
		ebitda: 39660.06273404049,
		ebit: 32821.051914799486,
		pre_tax_income: 24532.038803627605,
		npat: 11304.017880164929,
		eps: 2.2353011383132673,
		dps: 3.003638723537573,
		net_debt: 5734.005734011404,
		shareholders_equity: 51264.051264102396,
	},
];

export const MOCKED_ESTIMATION = [
	{
		object: "Estimation",
		fy_date_at: "2022-06-30",
		currency: "USD",
		sales: 60760.188259,
		gross_profit: 39723,
		ebitda: 38070.753715,
		ebit: 31204.699784,
		pre_tax_income: 30783.38495,
		npat: 18089.001374,
		eps: 3.524525,
		dps: 2.764694,
		net_debt: 5109.805831,
		shareholders_equity: 54864.906766,
	},
	{
		object: "Estimation",
		fy_date_at: "2023-06-30",
		currency: "USD",
		sales: 53227.626075,
		gross_profit: 35897,
		ebitda: 32120.687224,
		ebit: 24241.306685,
		pre_tax_income: 25388.102644,
		npat: 13890.896884,
		eps: 2.738213,
		dps: 2.04684,
		net_debt: 3616.451009,
		shareholders_equity: 57187.958092,
	},
	{
		object: "Estimation",
		fy_date_at: "2024-06-30",
		currency: "USD",
		sales: 49161.630895,
		gross_profit: 33351,
		ebitda: 27505.355291,
		ebit: 21132.096903,
		pre_tax_income: 20542.447223,
		npat: 12267.353299,
		eps: 2.363419,
		dps: 1.64067,
		net_debt: 1744.802465,
		shareholders_equity: 59873.679234,
	},
];
export const MOCKED_REVIEW = {
	object: "InvestmentReview",
	id: MOCKED_INVESTMENT_REVIEW_ID,
	summary: MOCKED_SUMMARY,
	isOwner: MOCKED_IS_OWNER,
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
		data: MOCKED_INVESTMENT_DATA,
	},
	processes: {
		data: MOCKED_PROCESSES_DATA,
	},
	permissions: {
		data: [],
	},
};