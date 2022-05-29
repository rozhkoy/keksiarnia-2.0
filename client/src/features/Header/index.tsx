import { Link, NavLink } from 'react-router-dom';
import { Container } from '../../shared/ui/container';
import './style.scss';
import userIcon from '../Header/img/user-icon.svg';
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks';
import { Logout } from 'src/pages/Auth/api';

export const Header = () => {
	const authData = useAppSelector((state) => state.authState);
	const dispatch = useAppDispatch();
	return (
		<div className={'header'}>
			<Container>
				<div className="header__container">
					<div className="header__logo">
						<span>Keksiarnia</span>
					</div>
					<div className="header__nav-links">
						<NavLink className={'header__nav-link'} to={'/catalog'}>
							Catalog
						</NavLink>
						<NavLink className={'header__nav-link'} to={'/cart'}>
							cart
						</NavLink>
					</div>
					{authData.auth ? (
						<div className="header__user">
							<div className="header__user-icon">
								<img src={userIcon} />
							</div>
							<div className="header__user-account">
								<div className="header__user-account-info">
									<img className="header__user-account-img" src={userIcon} />
									<p className="header__user-account-name">Y. Rozhko</p>
								</div>
								<Link to={'/order'}>Orders</Link>
								<Link to={'/profile'}>Profile</Link>
								<button onClick={() => dispatch(Logout())} className="header__user-auth-sing-out">
									Sing out
								</button>
							</div>
						</div>
					) : (
						<div className="header__user-auth">
							<Link className={'header__user-auth-sing-in'} to="/Sing_in">
								Sing in
							</Link>
							<Link className={'header__user-auth-sing-up'} to="/Sing_up">
								Sing up
							</Link>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};
