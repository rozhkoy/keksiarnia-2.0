import { $auth } from '../../shared/api';
import { IMainCategory } from './model';

export async function getMainCategory() {
	return await $auth.get<IMainCategory[]>('api/mainType');
}
