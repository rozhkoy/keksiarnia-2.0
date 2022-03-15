import { $auth } from '../../shared/api';
import { IMainCategory } from './model';
import { AxiosResponse } from "axios";

export async function getMainCategory(): Promise<AxiosResponse<IMainCategory[]>>{
	return await $auth.get<IMainCategory[]>('api/mainType');
}
