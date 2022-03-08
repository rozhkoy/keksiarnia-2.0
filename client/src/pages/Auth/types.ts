export interface IUser {
	email: string;
	password: string;
}

export interface IUserSingUp extends IUser {
	role: string;
	firstName: string;
	lastName: string;
}

export interface registrationResponse {
	refreshToken: string;
	accessToken: string;
	user: userDTO;
}

export interface userDTO {
	email: string;
	id: string;
	role: string;
}
