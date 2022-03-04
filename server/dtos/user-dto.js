module.exports = class UserDto {
	email;
	id;

	constructor(model) {
		console.log(model)
		this.email = model.email
		this.id = model.id_user
	}
}
