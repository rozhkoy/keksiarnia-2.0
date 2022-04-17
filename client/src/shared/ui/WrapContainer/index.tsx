import { Container } from '../container';
import './style.scss';

export const WrapContainer: React.FC = (props) => {
	return (
		<div className="wrap-container">
			<Container>{props.children}</Container>
		</div>
	);
};
