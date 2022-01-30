import {Logo} from "./Logo";
import {css} from "@emotion/react"
import {Navbar} from "./Navbar";
import {MobBttn} from "./MobBttn";
import {useState} from "react";


export const Header = () => {

	const header = css`
		display: grid;
		grid-template-columns: 1fr fit-content(100%);
		align-self: center;	
	  	padding: 10px;
	`;

	const [stateNavBar, setStateNavbar] = useState<boolean>(false)

	function openCLoseNavbar() {
		setStateNavbar(!stateNavBar)
		console.log(stateNavBar)
	}

	return(
		<div css={header}>
			<Logo />
			<Navbar/>
			<MobBttn openCloseNavbar={openCLoseNavbar}/>
		</div>
	)
}