export class User {
	constructor(userData: { id: number; name: string; registerDate: string }) {
		console.log("ffff");
		Object.assign(this, userData);
	}
	displayYourself() {
		console.log("displayYourself", this);
	}

	test() {
		return true;
	}
}
