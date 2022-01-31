import {css} from "@emotion/react"
import React from "react";
import {OfferItem} from "./OfferItem";

type Props = {
	mainText: string,
}

export const Offer:React.FC<Props> = (props) => {
	const offer = css`
		padding: 125px 0 ;
	`

	return(
		<div css={offer}>
			<h2 css={css`text-align: center; padding: 0 0 50px 0; font-size: 40px`}>{props.mainText}</h2>
			<div css={css`display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 30px`}>
				<OfferItem heading={"The wending cake"} inside={"Inside: vanilla-lemon sponge cake, cream cheese and chocolate"} />
				<OfferItem heading={"The wending cake"} inside={"Inside: vanilla-lemon sponge cake, cream cheese and chocolate"} />
				<OfferItem heading={"The wending cake"} inside={"Inside: vanilla-lemon sponge cake, cream cheese and chocolate"} />
			</div>
		</div>
	)
}