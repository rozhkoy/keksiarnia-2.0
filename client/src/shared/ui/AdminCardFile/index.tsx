import React, { useState } from "react";
import { AdminCardFileProps } from "./types";
import "./style.scss";

export const AdminCardFile: React.FC<AdminCardFileProps> = (props) => {
	// const reader = new FileReader()
	const [url, setUrl] = useState("");

	function AdminCardFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		files && props.change(files[0]);
		files && setUrl(URL.createObjectURL(files[0]));
	}

	function deletePicture() {
		setUrl('');
		props.change(new Blob());
	}

	return (
		<div className="AdminCardFile">
			<div className="AdminCardFile__preview">
				{url &&
					<div className="preview__card">
						<img src={url} alt="" className="preview__img" />
						<button onClick={deletePicture} className="preview__bttn">×</button>
					</div>
				}
			</div>
			<p className="AdminCardFile__field">{props.field}</p>
			<input type="file" onChange={AdminCardFileHandler} className="AdminCardFile__file" />
		</div>
	);
};
