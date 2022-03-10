import './style.scss';
import { AdminProviders } from './providers';
export const Admin = () => {
	return (
		<div className="admin">
			<div>sitebar</div>
			<div>
				<AdminProviders />
			</div>
		</div>
	);
};
