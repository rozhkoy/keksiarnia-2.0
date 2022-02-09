import caImg from "./catalog-itemImg.jpg"
import {css} from "@emotion/react"
import React from "react";

type Props = {
	price: number,
	name: string,
	img: string,
	key: number
}

export const CatalogItem:React.FC<Props> = (props) => {

	const item = css`
	  display: grid;
	  grid-template-columns: 1fr;
	  grid-auto-rows: 340px 1fr;
	  background: #fff;
	`

	const ItemImg = css`
		width: 100%;
	  height: 100%;
	  object-fit: cover;
	`

	return(
		<div css={item} >
			<img css={ItemImg} src={props.img} alt=""/>
			<div>
				<h3>{props.name}</h3>
				<p>{props.price}$</p>
				<button>Add to cart</button>
			</div>
		</div>
	)
}