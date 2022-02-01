import React from "react";
import {css} from "@emotion/react"

type Props = {
	text: string,
}

export const FilterItemCheckbox:React.FC<Props> = (props) => {

	const checkbox = css`
	  display: flex;
	  justify-content: start;
	  padding: 5px 0;
	  align-items: center;
	  width: 100%;
	`

	return(
		<div css={checkbox}>
			<input type="checkbox" name="check" id=""/>
			<p>{props.text}</p>
		</div>
	)
}