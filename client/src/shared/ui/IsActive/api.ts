import { $auth } from '../../api';
import { IIsActive } from './types';
import { AxiosError } from 'axios';
import { AlertError } from '../../lib/AlertError';

export async function getIsActiveState() {
	return $auth.get<IIsActive[]>('api/isActive').catch((e: AxiosError) => {
		AlertError(e);
		throw e;
	});
}
