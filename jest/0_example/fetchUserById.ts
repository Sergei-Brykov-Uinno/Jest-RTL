import { User } from "./imports/User";
import { UserAPI } from "./imports/UsersAPI";
import { useUserData } from "./imports/useUserData";

export async function fetchUserById(id: string) {
	// do some logic
	// ...
	// call site effects
	const userDto = await UserAPI.getUser(id);
	// console.log(JSON.stringify(userDto, null, 2));
	const { options, handler } = useUserData();
	const userData = handler(userDto, options);
	// call some class
	const user = new User(userData);
	// call site effect
	user.displayYourself();

	return user;
}
