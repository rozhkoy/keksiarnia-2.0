import './style.scss';
import { useEffect, useState } from 'react';
import { AdminCardFileProps } from '../AdminCardFile/types';
import { AdminCardPhotosType } from './types';

export const AdminCardPhotos: React.FC<AdminCardPhotosType> = (props) => {
	const [files, setFiles] = useState<FileList | null>(null);
	const [urls, setUrls] = useState<Array<string>>([]);

	function inputFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (files) {
			files.length > 0 && setFiles(files);
			setUrls((state) => {
				return state.concat(Array.from(files).map((item) => URL.createObjectURL(item)));
			});
		}
	}

	return (
		<div className="admin-card-photos">
			<p className="admin-card-field">text</p>
			<input type="file" onChange={inputFileHandler} className="admin-card-photos__select-bttn" multiple />
			<div className="admin-card-photos__list-photos">
				<div className="admin-card-photos__wrap">
					{urls.map((item) => (
						<div key={item} className="admin-card-photos__list-item">
							<img className="admin-card-photos__img" src={item} alt="" />
							<div className="admin-card-photos__buttons">
								<div className="admin-card-photos__input-file">
									<label className="admin-card-photos__input-file-label" htmlFor="file">
										Change
									</label>
									<input type="file" className="admin-card-photos__input-file-input" name="file" />
								</div>
								<button className="admin-card-photos__bttn admin-card-photos__bttn--delete">Delete</button>
							</div>
							<div className="admin-card-photos__checkbox">
								<input type="checkbox" /> <label> First</label>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
