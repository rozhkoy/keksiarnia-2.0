import {css} from "@emotion/react"
import OfferImg from "./OffersImg.jpg"
import React from "react";

type Props = {
	heading: string,
	inside: string
}

export const OfferItem:React.FC<Props> = (props) => {

	const ItemImg = css`
		height: 100%;
	  	width: 100%;
	  	object-fit: cover;
	  	object-position: center center;
	`

	const item = css`
		border-radius: 25px;
		background: #fff;
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 430px 1fr;
	  	max-width: 420px;
	`

	const ItemTextBlock = css`	
		padding: 0 20px 20px 20px;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 100px 50px 60px;
		grid-gap: 15px;
		justify-items: center;
		 
	`

	const ItemBttn = css`
		padding: 10px 30px;
		border-radius: 25px;
		background: #fff;
		color: #000;
		align-self: center;
	  	border: 1px solid #000;
	  	transition: 0.3s;
	  	:hover{
		    background: black;
		    color: #fff;
	  	}
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