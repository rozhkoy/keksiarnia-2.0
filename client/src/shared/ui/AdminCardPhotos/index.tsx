import './style.scss';
import { AdminCardPhotosType, IPhotosInfo } from './types';
import React from 'react';

export const AdminCardPhotos: React.FC<AdminCardPhotosType> = (props) => {
	function inputFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (files && files.length > 0) {
			props.getPhotosInfo((state) => {
				const arr: IPhotosInfo[] = Array.from(files).map((item) => {
					const photoInfo: IPhotosInfo = {
						photoFile: item,
						photoLink: URL.createObjectURL(item),
					};
					return photoInfo;
				});
				return state.length > 0 ? arr.concat(state) : arr;
			});
		}
	}

	function deletePhoto(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		console.log(index);
		// const arr = props.
	}

	return (
		<div className="admin-card-photos">
			<p className="admin-card-field">text</p>
			<input type="file" onChange={inputFileHandler} className="admin-card-photos__select-bttn" multiple />
			<div className="admin-card-photos__list-photos">
				<div className="admin-card-photos__wrap">
					{props.photosInfo.map((item, index) => (
						<div key={item.photoLink} className="admin-card-photos__list-item">
							<img className="admin-card-photos__img" src={item.photoLink} alt="" />
							<div className="admin-card-photos__buttons">
								<div className="admin-card-photos__input-file">
									<label className="admin-card-photos__input-file-label" htmlFor="file">
										Change
									</label>
									<input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => deletePhoto(e, index)} className="admin-card-photos__input-file-input" name="file" />
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
