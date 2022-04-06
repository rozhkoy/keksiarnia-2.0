import { AdminCardTextareaType } from './types';
import './style.scss';

export const AdminCardTextarea: React.FC<AdminCardTextareaType> = (props) => {
	function textareaHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
		props.getValue(e.target.value);
	}

	return (
		<div className={'admin-card-textarea'}>
			<div className="admin-card-textarea__field">{props.field}</div>
			<textarea className="admin-card-textarea__textarea" onChange={textareaHandler} rows={10} value={props.value} />
		</div>
	);
};
