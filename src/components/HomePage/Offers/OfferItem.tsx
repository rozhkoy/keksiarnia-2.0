import {css} from "@emotion/react"
import OfferImg from "./OffersImg.jpg"
import React from "react";

type Props = {
	heading: string,
	inside: string
}

export const OfferItem:React.FC<Props> = (props) => {

	const ItemImg = css`
		height: 430px;
	  	width: 100%;
	  	object-fit: cover;
	`

	const item = css`
		border-radius: 25px;
	    background: #fff;
	    overflow: hidden;
	`

	const ItemTextBlock = css`	
		padding: 0 20px 20px 20px;
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
	`

	const ItemBttn = css`
		padding: 10px 30px;
	  	margin: 20px 0 0 0;
	    border-radius: 25px;
	  	background: #fff;
	  	color: #000;
	`

	return(
		<div css={item}>
			<img css={ItemImg} src={OfferImg} alt=""/>
			<div css={ItemTextBlock}>
				<h3 css={css`text-align: center; padding: 10px 0 20px 0; font-size: 24px; font-weight: 300`}>{props.heading}</h3>
				<p>{props.inside}</p>
				<button css={ItemBttn}>Add to cart</button>
			</div>
		</div>
	)
}