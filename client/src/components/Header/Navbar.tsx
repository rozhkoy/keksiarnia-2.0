import {css} from "@emotion/react"
import React from "react";
import {Container} from "../container";
import {Link} from "react-router-dom";

type Props = {
	stateNavBar: boolean
}

export const Navbar:React.FC<Props> = (props) => {
	const navBar = css`
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	  padding: 0 15px 0 0 ;
	  @media (max-width: 780px){
	    grid-column: 1/3;
	    grid-row: 2;
	    display: grid;
	    grid-template-columns: 1fr;
	    grid-gap: 20px;
	    transition: all 0.3s;
	    height: 100vh;
	    align-content: start;
	    padding: 20px 0 0 0 ;
	    position: absolute;
	    width: 100%;
	    background: #fff;
	  }
	`;

	const navBarLink = css`
      padding: 0 0 0 20px;
      text-decoration: none;
      color: #000;
      &:hover {
        color: #5b5b5b;
        text-decoration: underline;
      }
	  
	`;

	const close = css`
      @media(max-width: 780px) {
      	left: 0;
      }
	`;

	const open = css`
	  @media(max-width: 780px) {
        left: -100%;
      }
	`;


	return(
		<div css={[navBar, props.stateNavBar ? close : open]}>
			<Link  css={navBarLink} to="/">Home</Link>
			<Link  css={navBarLink} to="/Catalog">Catalog</Link>
			<Link  css={navBarLink} to="/Cake">Cake</Link>
			<Link  css={navBarLink} to="/Brownies">Brownies</Link>
		</div>
	)
}