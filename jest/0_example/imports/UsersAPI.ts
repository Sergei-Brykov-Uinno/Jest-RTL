const getUser = async (id: string) => {
	return {
		firstName: "Serg",
		lastName: "Brikov",
		id: 1,
		register_date: Date.now(),
	};
};

const getAllUsers = () => {};
const updateUser = () => {};

export const UserAPI = {
	getUser,
	updateUser,
	getAllUsers,
};
