import React, { useEffect, useState } from 'react';
import { AdminCardFileProps } from './types';
import './style.scss';

export const AdminCardFile: React.FC<AdminCardFileProps> = (props) => {
	const [url, setUrl] = useState<string>('');

	function AdminCardFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		files && props.change(files[0]);
		files && setUrl(URL.createObjectURL(files[0]));
	}

	function deletePicture() {
		if (props.img) {
			setUrl('null');
			props.change(new Blob());
		}
	}

	useEffect(() => {
		console.log(props.img, 'img link');
		if (props.img && props.img !== '') {
			const createLink: string | undefined = process.env.REACT_APP_API_URL;
			createLink && setUrl(`${String(createLink)}${String(props.img)}`);
		}
		console.log('limk', url);
	}, [url, props.img]);

	return (
		<div className="AdminCardFile">
			<div className="AdminCardFile__preview">
				{url && (
					<div className="preview__card">
						<img src={url} alt="" className="preview__img" />
						{!props.img && (
							<button onClick={deletePicture} className="preview__bttn">
								×
							</button>
						)}
					</div>
				)}
			</div>
			<p className="AdminCardFile__field">{props.field}</p>
			<input type="file" onChange={AdminCardFileHandler} className="AdminCardFile__file" />
		</div>
	);
};
