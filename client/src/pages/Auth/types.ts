export interface IUser {
	email: string;
	password: string;
}

export interface IUserSingUp extends IUser {
	role: string;
	firstName: string;
	lastName: string;
}

export interface AuthResponse {
	refreshToken: string;
	accessToken: string;
	user: UserDTO;
}

export interface UserDTO {
	email: string;
	id: string;
	role: string;
}

export interface IAuthState {
	auth: boolean;
}
