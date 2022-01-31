import {css} from "@emotion/react"
import React from "react";
import {OfferItem} from "./OfferItem";

type Props = {
	mainText: string,
}

export const Offer:React.FC<Props> = (props) => {
	const offer = css`
		padding: 125px 0;
	  	display: grid;
	  	grid-template-columns: 1fr;
	  	grid-auto-rows: auto;
	  	justify-items: center;
	  	padding: 0 15px;
	`

	const buttonWatchMore = css`
	  	margin: 70px 0 0 0;
		background: transparent;
	  	text-decoration: underline;
	  	color: #000;
	  	border: 0;
	`

	const gridItems = css`
      display: grid;
	  grid-template-columns: repeat(3, 1fr);
	  grid-gap: 30px;
	  @media(max-width: 980px){
	    grid-template-columns: 1fr;
	  }
	`

	return(
		<div css={offer}>
			<h2 css={css`text-align: center; padding: 0 0 50px 0; font-size: 40px`}>{props.mainText}</h2>
			<div css={gridItems}>
				<OfferItem heading={"The wending cake, The wending cake"} inside={"Inside: vanilla-lemon sponge cake, cream cheese and chocolate"} />
				<OfferItem heading={"The wending cake"} inside={"Inside: vanilla-lemon sponge cake, cream cheese and chocolate"} />
				<OfferItem heading={"The wending cake"} inside={"Inside: vanilla-lemon sponge cake, cream cheese and chocolate"} />
			</div>
			<button css={buttonWatchMore}>Watch more</button>
		</div>
	)
}