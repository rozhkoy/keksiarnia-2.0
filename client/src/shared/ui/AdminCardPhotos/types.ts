import { Dispatch, SetStateAction } from 'react';

export type AdminCardPhotosType = {
	value: FileList | null;
	getValue: Dispatch<SetStateAction<FileList>>;
	field: string;
};
