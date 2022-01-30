import {css} from "@emotion/react"
import {useRef} from "react";

export const Navbar = () => {
	const navBar = css`
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	  @media (max-width: 1000px){
	    grid-column: 1/3;
	    grid-row: 2;
	    display: grid;
	    grid-template-columns: 1fr;
	  }
	`;

	const navBarLink = css`
      padding: 0 0 0 10px;
      text-decoration: none;
      color: #000;
      &:hover {
        color: #5b5b5b;
        text-decoration: underline;
      }
	`;

	const test = css`
	  background-color: red
	`;


	return(
		<div css={[navBar, false ? test : navBarLink]}>
			<a href="#" css={navBarLink}>HOME</a>
			<a href="#" css={navBarLink}>HOME</a>
			<a href="#" css={navBarLink}>HOME</a>
		</div>
	)
}