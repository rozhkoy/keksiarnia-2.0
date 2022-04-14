import { Dispatch, SetStateAction } from 'react';

export type AdminCardPhotosType = {
	photosInfo: Array<IPhotosInfo>;
	getPhotosInfo: Dispatch<SetStateAction<Array<IPhotosInfo>>>;
	field: string;
};

export interface IPhotosInfo {
	photoFile: File | null;
	photoLink: string;
	isFirst: boolean;
	order: number;
}
