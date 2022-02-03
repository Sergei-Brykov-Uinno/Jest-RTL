export function useUserData() {
	function handler(
		{
			firstName,
			lastName,
			register_date,
			id,
		}: {
			firstName: string;
			lastName: string;
			id: number;
			register_date: number;
		},
		options: boolean
	) {
		return {
			id,
			name: firstName + lastName,
			registerDate: new Date(register_date).toLocaleDateString(),
		};
	}

	return {
		handler,
		options: true,
	};
}
