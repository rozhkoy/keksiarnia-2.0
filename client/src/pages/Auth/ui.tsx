import React, {useEffect, useState} from "react";
import {Container} from "../../shared/container";
import './style.scss'
import {Link, NavLink, useLocation} from "react-router-dom";

const Auth = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const path = useLocation()

	function emailHandler(event:  React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value)
	}

	function passwordHandler(event:  React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value)
	}

	function handlerSubmit(event: React.SyntheticEvent) {

		event.preventDefault();
	}

	useEffect(() => {
		console.log(path)
	})

	return (
		<div className="wrap-container">
			<Container>
				<div className="auth auth__wrap">
					<form onSubmit={handlerSubmit} className="auth__form">
						<p className="auth__form-label">{ path.pathname == "/Singup" ? "Sing in" : "Sing up"}</p>
						<input placeholder="Email" onChange={emailHandler} value={email} type="text" className="auth__input"/>
						<input placeholder="Password" onChange={passwordHandler} value={password} type="password" className="auth__input"/>
						<div className="auth__button-group">
							<Link className="auth__bttn auth__bttn--without-border" to={ path.pathname == "/Singin" ? "/Singup" : "/Singin"}>{ path.pathname == "/Singup" ? "Sing up" : "Sing in"}</Link>
							<button className="auth__bttn auth__bttn--with-border">{ path.pathname == "/Singup" ? "Sing in" : "Sing up"}</button>
						</div>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default Auth