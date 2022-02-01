import caImg from "./catalog-itemImg.jpg"
import {css} from "@emotion/react"
import React from "react";

export const CatalogItem = () => {

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
			<img css={ItemImg} src={caImg} alt=""/>
			<div>
				<h3>Lorem ipsum dolor sit amet</h3>
				<p>2.4$</p>
				<button>Add to cart</button>
			</div>
		</div>
	)
}