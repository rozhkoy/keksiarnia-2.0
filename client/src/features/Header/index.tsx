import { NavLink } from 'react-router-dom';
import { Container } from '../../shared/ui/container';
import './style.scss';

export const Header = () => {
	return (
		<div className={'header'}>
			<Container>
				<div className="header__container">
					<div className="header__logo">
						<span>Keksiarnia</span>
					</div>
					<div className="header__nav-links">
						<NavLink className={'header__nav-link'} to={'/woman'}>
							for women
						</NavLink>
						<NavLink className={'header__nav-link'} to={'/man'}>
							for man
						</NavLink>
						<NavLink className={'header__nav-link'} to={'/cart'}>
							{' '}
							cart
						</NavLink>
					</div>
					<div className="header__user">
						<div className="header__user-icon"></div>
					</div>
				</div>
			</Container>
		</div>
	);
};
