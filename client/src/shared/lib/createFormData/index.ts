import { ICreateFormData } from './types';

export function createFormData(obj: Array<ICreateFormData>) {
	const formData = new FormData();
	obj.map((item) => {
		formData.append(item.key, item.value);
		console.log('asdfsdf', formData.get(item.key));
	});
	console.log(formData);
	return formData;
}
