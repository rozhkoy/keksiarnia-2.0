import { CreateUpdate } from '../../shared/types';

export interface ICategoryPictures extends CreateUpdate {
	pictureID: string;
	name: string;
}
