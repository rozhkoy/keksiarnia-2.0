import React from 'react';
import { AdminCardFileProps } from './types';
import './style.scss';

export const AdminCardFile: React.FC<AdminCardFileProps> = (props) => {
	function AdminCardFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		files && props.change(files[0]);
	}

	return (
		<div className="AdminCardFile">
			<p className="AdminCardFile__field">{props.field}</p>
			<input type="file" onChange={AdminCardFileHandler} className="AdminCardFile__file" />
		</div>
	);
};
