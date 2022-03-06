import {useState} from "react";
import {css} from  '@emotion/react'
import {Container} from "../../shared/container";
import './style.scss'

const Auth = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div className="wrap-container">
			<Container>
				<div className="auth__wrap">
					<form action="" className="auth__form">
						<p className="auth__form-label">Sing in</p>
						<input placeholder="Email" type="text" className="auth__input"/>
						<input placeholder="Password" type="text" className="auth__input"/>
						<div className="auth__button-group">
							<button  className="auth__bttn--without-border">sing up</button>
							<button className="auth__bttn">sing in</button>

						</div>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default Auth