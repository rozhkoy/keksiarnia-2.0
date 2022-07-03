module.exports = class UserDto {
	email;
	id;
	role;
	firstName;
	lastName;

	constructor(model) {
		this.email = model.email;
		this.id = model.id_user;
		this.role = model.role;
		this.firstName = model.firstName;
		this.lastName = model.lastName;
	}
};
