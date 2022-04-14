import './style.scss';
import { AdminCardPhotosType, IPhotosInfo } from './types';
import React, { useEffect, useRef } from 'react';

export const AdminCardPhotos: React.FC<AdminCardPhotosType> = (props) => {
	const checkboxRef = useRef<Array<HTMLInputElement>>([]);

	function inputFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (files && files.length > 0) {
			props.getPhotosInfo((state) => {
				const arr: IPhotosInfo[] = Array.from(files).map((item) => {
					const photoInfo: IPhotosInfo = {
						photoFile: item,
						photoLink: URL.createObjectURL(item),
						isFirst: 'false',
						order: 0,
					};
					return photoInfo;
				});
				if (state.length > 0) {
					const unitedArr = arr.concat(state);
					unitedArr.forEach((item, index) => {
						item.order = index;
					});
					return unitedArr;
				} else {
					return arr;
				}
			});
		}
	}

	function deletePhoto(index: number) {
		props.getPhotosInfo((state) => {
			return state.filter((item, itemIndex) => index !== itemIndex);
		});
	}

	function changeImg(e: React.ChangeEvent<HTMLInputElement>, index: number, order: number) {
		const files = e.target.files;
		files &&
			props.getPhotosInfo((state) => {
				state[index] = {
					photoFile: files[0],
					photoLink: URL.createObjectURL(files[0]),
					isFirst: 'false',
					order: order,
				};
				return [...state];
			});
	}

	function changeFirstPhoto(index: number) {
		const copyState = props.photosInfo.slice();
		for (let i = 0; i < props.photosInfo.length; i++) {
			if (checkboxRef.current[i].checked && index !== i) {
				checkboxRef.current[i].checked = Boolean(0);
				copyState[i].isFirst = 'false';
			}
		}
		checkboxRef.current[index].checked = Boolean(1);
		copyState[index].isFirst = 'true';
		props.getPhotosInfo(copyState);
	}

	useEffect(() => {
		if (checkboxRef.current.length !== props.photosInfo.length) {
			checkboxRef.current = checkboxRef.current.slice(0, props.photosInfo.length);
		}
	});

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
									<input onChange={(e) => changeImg(e, index, item.order)} type="file" className="admin-card-photos__input-file-input" name="file" />
								</div>
								<button onClick={() => deletePhoto(index)} className="admin-card-photos__bttn admin-card-photos__bttn--delete">
									Delete
								</button>
							</div>
							<div className="admin-card-photos__checkbox">
								<input ref={(elRef: HTMLInputElement) => (checkboxRef.current[index] = elRef)} onChange={() => changeFirstPhoto(index)} type="checkbox" />
								<label> First</label>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
