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
	id: number;
	role: string;
	lastName: string;
	firstName: string;
}

export interface IAuthState {
	auth: boolean;
	userId: number;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

export type DataError = {
	errors: string[];
	message: string;
};
