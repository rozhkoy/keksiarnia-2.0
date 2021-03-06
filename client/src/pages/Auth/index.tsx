import React, { useEffect, useState } from 'react';
import './style.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/lib/hooks';
import { her, SingIn, SingUp } from './api';
import { Container } from 'src/shared/ui/container';

const Auth = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const path = useLocation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value);
	}

	function firstNamedHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setFirstName(event.target.value);
	}

	function lastNamedHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setLastName(event.target.value);
	}

	function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value);
	}

	function handlerSubmit(event: React.SyntheticEvent) {
		if (path.pathname == '/Sing_up') {
			console.log('test');
			dispatch(SingUp({ firstName: firstName, lastName: lastName, email: email, password: password, role: 'ADMIN' })).then((response) => {
				if (response.meta.requestStatus === 'fulfilled') {
					console.log('test');
					navigate('/');
				}
			});
		} else {
			console.log('sing-in');
			dispatch(SingIn({ email, password })).then((response) => {
				console.log(response);
				if (response.meta.requestStatus === 'fulfilled') {
					console.log('test');
					navigate('/');
				}
			});
		}
		event.preventDefault();
	}

	useEffect(() => {
		console.log(path, firstName, lastName, email, password);
	});

	return (
		<div className="wrap-container">
			<Container>
				<div className="auth auth__wrap">
					<form onSubmit={handlerSubmit} className="auth__form">
						<p className="auth__form-label">{path.pathname == '/Sing_up' ? 'Sing up' : 'Sing in'}</p>
						{path.pathname == '/Sing_up' && <input placeholder="First name" onChange={firstNamedHandler} value={firstName} type="text" className="auth__input" />}
						{path.pathname == '/Sing_up' && <input placeholder="Last name" onChange={lastNamedHandler} value={lastName} type="text" className="auth__input" />}
						<input placeholder="Email" onChange={emailHandler} value={email} type="text" className="auth__input" />
						<input placeholder="Password" onChange={passwordHandler} value={password} type="password" className="auth__input" />
						<div className="auth__button-group">
							<Link className="auth__bttn auth__bttn--without-border" to={path.pathname == '/Sing_in' ? '/Sing_up' : '/Sing_in'}>
								{path.pathname == '/Sing_in' ? 'Sing up' : 'Sing in'}
							</Link>
							<button className="auth__bttn auth__bttn--with-border">{path.pathname == '/Sing_in' ? 'Sing in' : 'Sing up'}</button>
						</div>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Auth;
