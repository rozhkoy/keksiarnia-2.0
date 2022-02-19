import React from "react";
import {NavLink} from "react-router-dom";
import {css} from "@emotion/react";

type Props = {
	button: button[]
}

interface button  {
	buttonName: string,
	buttonLink: string
}


const ButtonGroup:React.FC<Props> = (props) => {

	const button = css`
		margin: 10px;
		border: 1px solid red;
		padding: 5px;
		border-radius: 5px;
	  display: block;	
	`

	const buttonGroup = css`
	display: flex;
	justify-content: start`

	return (
		<div css={buttonGroup}>
			{props.button.map((item) => (
				<NavLink css={button} to={item.buttonLink}>{item.buttonName}</NavLink>
			))}
		</div>
	)
}

export default ButtonGroup
