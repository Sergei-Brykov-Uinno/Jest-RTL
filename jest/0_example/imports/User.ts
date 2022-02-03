export class User {
	constructor(userData: { id: number; name: string; registerDate: string }) {
		Object.assign(this, userData);
	}
	displayYourself() {
		console.log("displayYourself", this);
	}

	test() {
		return true;
	}
}
