import {css} from "@emotion/react"
import MobBttnIcon from "./mobBttn.svg"
import React from "react";

type Props = {
	openCloseNavbar: () => void
}

export const MobBttn:React.FC<Props> = (props) => {

	return(
		<div css={css`
			display: none;
			@media (max-width: 780px){
				display: flex; 
				justify-content: center;  
				align-items: center;
				padding: 0 15px 0 0 ;
			}
		`}>
			<img onClick={() => props.openCloseNavbar()} width="30px" height="30px" src={MobBttnIcon} alt=""/>
		</div>
	)
}