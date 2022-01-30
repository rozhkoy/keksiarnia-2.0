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
			@media (max-width: 1000px){
				display: flex; 
				justify-content: center;  
				align-items: center;
			}
		`}>
			<img onClick={() => props.openCloseNavbar()} width="30px" height="30px" src={MobBttnIcon} alt=""/>
		</div>
	)
}