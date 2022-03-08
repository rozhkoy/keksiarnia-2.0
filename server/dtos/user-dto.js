module.exports = class UserDto {
	email;
	id;
	role;

	constructor(model) {
		this.email = model.email
		this.id = model.id_user
		this.role = model.role

	}
}
