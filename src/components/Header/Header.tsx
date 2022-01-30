import {Logo} from "./Logo";
import {css} from "@emotion/react"
import {Navbar} from "./Navbar";
import {MobBttn} from "./MobBttn";
import {useState} from "react";

export const Header = () => {

	const header = css`
		display: grid;
		width: 100%;
		grid-template-columns: 1fr fit-content(100%);
		align-self: center;
		box-sizing: border-box;
		margin: 0 auto;
	    padding: 10px 0;
	  	z-index: 889;
		@media (min-width: 575.98px){
		};
		@media (min-width: 768.98px){
			max-width: 720px;
		};
		@media (min-width: 991.98px) {
			max-width: 960px;	
		};
		@media (min-width: 1199.98px){
			max-width: 1140px;
		}
	`;

	const [stateNavBar, setStateNavbar] = useState<boolean>(false)

	function openCLoseNavbar() {
		setStateNavbar(!stateNavBar)
		console.log(stateNavBar)
	}

	return(
		<div  css={css`width: 100%; position: fixed; top: 0; border-bottom: 1px solid #000; background: #fff`}>
			<div css={header}>
				<Logo />
				<Navbar stateNavBar={stateNavBar}/>
				<MobBttn openCloseNavbar={openCLoseNavbar}/>
			</div>
		</div>
	)
}